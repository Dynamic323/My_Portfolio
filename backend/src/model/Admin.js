const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false
  },
  role: {
    type: String,
    enum: ['admin'],
    default: 'admin'
  },
  lastLogin: Date,
  loginAttempts: {
    type: Number,
    default: 0
  },
  lockUntil: Date
}, { timestamps: true });

// Password hashing middleware
adminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Password comparison method
adminSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Account locking for brute force protection
adminSchema.methods.incrementLoginAttempts = function() {
  const LOCK_TIME = 5 * 60 * 1000; // 5 minutes
  const MAX_ATTEMPTS = 5;
  
  if (this.lockUntil && this.lockUntil > Date.now()) {
    throw new Error('Account is temporarily locked');
  }

  this.loginAttempts += 1;
  
  if (this.loginAttempts >= MAX_ATTEMPTS) {
    this.lockUntil = Date.now() + LOCK_TIME;
    this.loginAttempts = 0;
    throw new Error(`Account locked. Try again after ${LOCK_TIME/60000} minutes`);
  }
};

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
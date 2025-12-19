"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Pagebg from "../components/Pagebg";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Check for empty strings after trimming
    if (
      !formData.fullname.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("All fields must be filled out properly.");
      return;
    }

    // Redirect to WhatsApp with form details
    window.location.href = `https://wa.me/2349161712483?text=Name:${encodeURIComponent(
      formData.fullname
    )}%0AEmail:${encodeURIComponent(
      formData.email
    )}%0AMessage:${encodeURIComponent(formData.message)}`;
  };
  return (
    <>
      <Navbar />

      <Pagebg title="Contact">
        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.138540140844!2d5.638440073936543!3d6.354244793635705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d360d5f4e017%3A0x39e60adf8645b6f0!2s9%20Edokpolor%20St%2C%20Use%2C%20Benin%20City%20300102%2C%20Edo!5e1!3m2!1sen!2sng!4v1731170131749!5m2!1sen!2sng"
              width="400"
              height="300"
              loading="lazy"
              title="Google Map"
              style={{ border: "0" }}
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form onSubmit={handleSubmit} className="form" data-form>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                value={formData.fullname}
                onChange={handleChange}
                required
                data-form-input
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                data-form-input
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              data-form-input
            ></textarea>

            <button
              className="form-btn"
              type="submit"
              disabled={
                !formData.fullname || !formData.email || !formData.message
              }
              data-form-btn
            >
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </Pagebg>
    </>
  );
}

export default Contact;

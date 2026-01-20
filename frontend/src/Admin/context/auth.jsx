"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../utils/coco";

export const Admincontext = createContext();

export const Adminprovider = ({ children }) => {
  const [admin, setadmin] = useState(db.auth.getUser());
  const [loading, setloadin] = useState(true);
 
  useEffect(async () => {
    const initAuth = async () => {
      await db.auth.initAuth();
      if (db.auth.isAuthenticated()) {
        setadmin(db.auth.getCurrentUser());
      }
      setloadin(false);
    };
    initAuth();

    db.auth.onAuthEvent({
      onLogin: (user) => {
        setadmin(user);
        setloadin(false);
      },
      onLogout: (user) => {
        setadmin(null);
        setloadin(false);
      },
    });
  }, []);

  const Login = (email, password) => db.auth.login(email, password);

  return (
    <Admincontext.Provider value={{ Login, loading }}>
      {children}
    </Admincontext.Provider>
  );
};

export const useAuth = () => useContext(Admincontext);

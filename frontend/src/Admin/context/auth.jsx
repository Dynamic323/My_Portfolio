"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../utils/coco";

export const Admincontext = createContext();

export const Adminprovider = ({ children }) => {
  const [admin, setadmin] = useState(db.auth.getUser());
  const [loading, setloadin] = useState(true);

  useEffect(async () => {
    const initAuth = async () => {
      try {
        await db.auth.initAuth();
        const currentAdmin = db.auth.getUser();
        if (currentAdmin) {
          setadmin(currentAdmin);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setloadin(false);
      }
    };

    initAuth();
  }, []);

  const Login = (email, password) => db.auth.login(email, password);

  return (
    <Admincontext.Provider value={{ Login, loading }}>
      {children}
    </Admincontext.Provider>
  );
};

export const useAuth = () => useContext(Admincontext);

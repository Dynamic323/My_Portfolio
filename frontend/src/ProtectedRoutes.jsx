"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const ProtectedRoutesWrapper = ({ children }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/admin");
    else setAuthorized(true);
  }, [router]);

  return authorized ? children : null;
}

export default ProtectedRoutesWrapper;

import { useState } from "react";

import "./App.css";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
  <div >
     <ParticleBackground/>
      <Layout>
        <Outlet />
      </Layout>
   </div>
  );
}

export default App;

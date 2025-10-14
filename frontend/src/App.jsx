import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";
import CoderLoader from "./components/CoderLoader";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <CoderLoader onLoadComplete={handleLoadComplete} />}
      
      <ParticleBackground />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
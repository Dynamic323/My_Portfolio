import { useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";

function ParticleBackground() {
  const particlesInit = async (engine) => {
    // Load the stars preset into tsparticles engine
    await loadStarsPreset(engine);
  };

  const options = useMemo(
    () => ({
      preset: "stars",
      fullScreen: { enable: true, zIndex: 0 },
      background: {
        color: "#000000",
      },
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{ position: "absolute", inset: 0 }}
    />
  );
}

export default ParticleBackground;

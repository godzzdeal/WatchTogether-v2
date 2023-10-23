
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export const ParticlesBg = () => {

    const particlesInit = async (engine: Engine) => {
        await loadFull(engine);
    };

    const options = {
        preset: "stars",
    };

    return (
        <>
            <Particles id="tsparticles" init={particlesInit}  options={{
                fullScreen: {
                    zIndex: -1
                },
                background: {
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        // onHover: {
                        //     enable: true,
                        //     mode: "repulse",
                        // },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    // links: {
                    //     color: "#ffffff",
                    //     distance: 150,
                    //     enable: true,
                    //     opacity: 0.5,
                    //     width: 1,
                    // },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.9,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}/>
        </>
    )
}

export default ParticlesBg
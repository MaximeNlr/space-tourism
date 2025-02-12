import "../Technology/Technology.css";
import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/Mobile_Header/MobileHeader";
import TabletHeader from "../Components/Tablet_Header/TabletHeader";
import Assets from "../assets/Assets";
import { motion, AnimatePresence } from "framer-motion";

export default function Technology() {

    const [selectedTechno, setSelectedTechno] = useState("launch")
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 480 && window.innerWidth <= 1180);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth >= 480 && window.innerWidth <= 1180);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const techno = {
        launch: {
            id: "1",
            secondTitle: "LAUNCH VEHICLE",
            about: `A launch vehicle or carrier rocket is a
                    rocket-propelled vehicle used to carry a
                    payload from Earth's surface to space,
                    usually to Earth orbit or beyond. Our WEB-X
                    carrier rocket is the most powerful in operation.
                    Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
            image: Assets.launch,
            imageTablet: Assets.launchLand
        },
        spaceport: {
            id: "2",
            secondTitle: "SPACEPORT",
            about: `A launch vehicle or carrier rocket is a
                    rocket-propelled vehicle used to carry a
                    payload from Earth's surface to space,
                    usually to Earth orbit or beyond. Our WEB-X
                    carrier rocket is the most powerful in operation.
                    Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
            image: Assets.spaceport,
            imageTablet: Assets.spaceportLand
        },
        capsule: {
            id: "3",
            secondTitle: "SPACE CAPSULE",
            about: `A space capsule is an often-crewed spacecraft that uses
                    a blunt-body reentry capsule to reenter the Earth's
                    atmosphere without wings. Our capsule is where you'll
                    spend your time during the flight. It includes a space gym,
                    cinema, and plenty of other activities to keep you entertained.`,
            image: Assets.capsule,
            imageTablet: Assets.capsuleLand
        }
    }

    return (
        <section className="technoContainer">
            <div className="normalHeader">
                <Header />
            </div>
            <div className="headerMobile">
                <MobileHeader />
            </div>
            <div className="tabletHeader">
                <TabletHeader />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="allTitle"><span className="titleSpan">03</span> SPACE LAUNCH 101</h1>
                <div className="techContainer">
                    <div className="techNav">
                        <div className="navTechno">
                            {Object.keys(techno).map((tech) => (
                                <div className="technoLink" key={tech}>
                                    <div
                                        onClick={() => setSelectedTechno(tech)}
                                        className={selectedTechno == tech ? "active" : ""}
                                    >
                                        {techno[tech].id}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="aboutTechno">
                            <h2>THE TERMINOLOGY...</h2>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`tech-${selectedTechno}`}
                                    initial={{ opacity: 0.4 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h3>{techno[selectedTechno].secondTitle}</h3>
                                    <p id="txt18">{techno[selectedTechno].about}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="technoImg">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={`techno-${selectedTechno}`}
                                src={isTablet ? techno[selectedTechno].imageTablet : techno[selectedTechno].image}
                                alt={techno[selectedTechno].secondTitle}
                                initial={{ opacity: 0.4 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section >
    )
}
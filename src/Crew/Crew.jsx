import "../Crew/Crew.css";
import { useState, useEffect } from "react";
import Assets from "../assets/Assets";
import Header from "../Components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";

export default function Crew() {

    const [selectedMember, setSelectedMember] = useState("doug");

    const members = {
        doug: {
            role: "COMMANDER",
            name: "DOUGLAS HURLEY",
            about: `Douglas Gerald Hurley is an American engineer,
                    former Marine Corps pilot and former NASA
                    astronaut. He launched into space for the
                    third time as commander of Crew Dragon Demo-2.                        `,
            image: Assets.doug,
            nav: ""
        },
        mark: {
            role: "MISSION SPECIALIST",
            name: "MARK SHUTTLEWORTH",
            about: `Mark Richard Shuttleworth is the founder and CEO of Canonical,
                    the company behind the Linux-based Ubuntu operating system.
                    Shuttleworth became the first South African to travel to space as a space tourist.`,
            image: Assets.mark,
            nav: ""
        },
        victor: {
            role: "PILOT",
            name: "VICTOR GLOVER",
            about: `Pilot on the first operational flight of the SpaceX Crew Dragon
                    to the International Space Station. Glover is a commander
                    in the U.S. Navy where he pilots an F/A-18.He was a crew member
                    of Expedition 64, and served as a station systems flight engineer. `,
            image: Assets.victor,
            nav: ""
        },
        anoush: {
            role: "SLIGHT ENGINEER",
            name: "ANOUSHEH ANSARI",
            about: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea
                    Systems. Ansari was the fourth self-funded space tourist, the first
                    self-funded woman to fly to the ISS, and the first Iranian in space. `,
            image: Assets.anous,
            nav: ""
        },
    }

    return (
        <section className="crewContainer">
            <Header />
            <h1 className="allTitle"><span className="titleSpan">02</span> MEET YOUR CREW</h1>
            <div className="membersContainer">
                <div className="memberTxt">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`member-${selectedMember}`}
                            initial={{ opacity: 0.4 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h2>{members[selectedMember].role}</h2>
                            <h3>{members[selectedMember].name}</h3>
                            <p id="txt18">{members[selectedMember].about}</p>
                        </motion.div>
                    </AnimatePresence>
                    <div className="crewNav">
                        {Object.keys(members).map((member) => (
                            <div
                                className={`memberLink ${selectedMember === member ? "active" : ""}`}
                                key={member}
                                onClick={() => setSelectedMember(member)}
                            >
                                {members[member].nav}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="crewImg">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={`member-${selectedMember}`}
                            src={members[selectedMember].image}
                            alt={members[selectedMember].name}
                            initial={{ opacity: 0.4 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                        </motion.img>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
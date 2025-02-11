import "../Destination/Dest.css";
import { useEffect, useState } from "react";
import Assets from "../assets/Assets";
import Header from "../Components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";

export default function Dest() {

    const [selectedPlanet, setSelectedPlanet] = useState("moon");

    const planets = {
        moon: {
            name: "MOON",
            image: Assets.moonImg,
            about: `See our planet as you’ve never seen it before.
                    A perfect relaxing trip away to help regain
                    perspective and come back refreshed.
                    While you’re there, take in some history
                    by visiting the Luna 2 and Apollo 11 landing sites.`,
            distance: "384,400 km",
            travel_time: "3 DAYS"
        },
        MARS: {
            name: "MARS",
            image: Assets.marsImg,
            about: `Don’t forget to pack your hiking boots. You’ll need them
                    to tackle Olympus Mons, the tallest planetary mountain in
                    our solar system. It’s two and a half times the size of Everest!.`,
            distance: "225 MIL. km",
            travel_time: "9 months"
        },
        europa: {
            name: "EUROPA",
            image: Assets.europaImg,
            about: `The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover’s dream. With an icy surface,
                    it’s perfect for a bit of ice skating, curling, hockey,
                    or simple relaxation in your snug wintery cabin.`,
            distance: "628 MIL. km",
            travel_time: "3 YEARS"
        },
        titan: {
            name: "TITAN",
            image: Assets.titanImg,
            about: `The only moon known to have a dense atmosphere other than
                    Earth, Titan is a home away from home (just a few hundred degrees colder!).
                    As a bonus, you get striking views of the Rings of Saturn.`,
            distance: "1.6 BIL. km",
            travel_time: "7 YEARS"
        },
    }
    return (
        <section className="destContainer">
            <Header />
            <h1 className="allTitle"><span className="titleSpan">01</span> PICK YOUR DESTINATION</h1>
            <div className="planetContainer">
                <div className="planetImg">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={`planet-${selectedPlanet}`}
                            src={planets[selectedPlanet].image}
                            alt={planets[selectedPlanet].name}
                            initial={{ opacity: 0.4 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    </AnimatePresence>
                </div>
                <div className="planetTxt active">
                    <div className="planetHeader">
                        {Object.keys(planets).map((planet) => (
                            <div className="headerLink" key={planet}>
                                <p
                                    onClick={() => setSelectedPlanet(planet)}
                                    className={selectedPlanet === planet ? "active" : ""}
                                >
                                    {planets[planet].name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`planet-${selectedPlanet}`}
                            initial={{ opacity: 0.4 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h2>{planets[selectedPlanet].name}</h2>
                            <div className="planetAbout">
                                <p id="txt18">{planets[selectedPlanet].about}</p>
                            </div>
                            <div className="borderPlanet"></div>
                            <div className="planetInfo">
                                <div className="planetsDistance">
                                    <p>AVG. DISTANCE</p>
                                    <h3>{planets[selectedPlanet].distance}</h3>
                                </div>
                                <div className="planetsTimeTravel">
                                    <p>Est. travel time</p>
                                    <h3>{planets[selectedPlanet].travel_time}</h3>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
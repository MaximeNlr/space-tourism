import "../Home/Home.css";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/Mobile_Header/MobileHeader";
import TabletHeader from "../Components/Tablet_Header/TabletHeader";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {

    const navigate = useNavigate();

    return (
        <section className="homeContainer">
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="spaceContainer">
                    <motion.div
                        className="spaceTxt"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="subTitle">SO, YOU WANT TO TRAVEL TO</p>
                        <h1 className="title">SPACE</h1>
                        <p id="txt18">
                            Let’s face it; if you want to go to space,
                            you might as well genuinely go to outer space
                            and not hover kind of on the edge of it.
                            Well sit back, and relax because we’ll
                            give you a truly out of this world experience!
                        </p>
                    </motion.div>
                    <motion.div
                        className="hoverExplore"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="exploreBtn" onClick={() => navigate("/destination")}>
                            <p>EXPLORE</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
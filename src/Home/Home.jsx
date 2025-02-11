import "../Home/Home.css";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/Mobile_Header/MobileHeader";

export default function Home() {

    return (
        <section className="homeContainer">
            <div className="normalHeader">
                <Header />
            </div>
            <div className="headerMobile">
                <MobileHeader />
            </div>            <div className="spaceContainer">
                <div className="spaceTxt">
                    <p className="subTitle">SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className="title">SPACE</h1>
                    <p id="txt18">
                        Let’s face it; if you want to go to space,
                        you might as well genuinely go to outer space
                        and not hover kind of on the edge of it.
                        Well sit back, and relax because we’ll
                        give you a truly out of this world experience!
                    </p>
                </div>
                <div className="hoverExplore">
                    <div className="exploreBtn">
                        <p>EXPLORE</p>
                    </div>
                </div>
            </div>
        </section >
    )
}
import "../Home/Home.css";
import Header from "../Components/Header/Header";

export default function Home() {

    return (
        <section className="homeContainer">
            <Header />
            <div className="spaceContainer">
                <div className="spaceTxt">
                    <p className="subTitle">SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className="title">SPACE</h1>
                    <p id="txt18">
                        Let’s face it; if you want to go to space,
                        you might as well genuinely go<br /> to outer space
                        and not hover kind of on the edge of it.
                        Well sit back,<br /> and relax because we’ll
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
import "./TabletHeader.css";
import { NavLink, useLocation } from "react-router-dom";
import Assets from "../../assets/Assets";

export default function TabletHeader() {
    const location = useLocation();
    return (
        <section className="tabletHeaderContainer">
            <div className="tabletLeftHeader">
                <img src={Assets.logo_header} alt="" />
            </div>
            <nav>
                <NavLink
                    to="/"
                    className={`tabletNavLink ${location.pathname === "/" ? "active" : ""}`}
                >
                    <span className="numbersHeader">00</span> HOME
                </NavLink>
                <NavLink
                    to="/Destination"
                    className={`tabletNavLink ${location.pathname === "/Destination" ? "active" : ""}`}
                >
                    <span className="numbersHeader">01</span> DESTINATION
                </NavLink>
                <NavLink
                    to="/Crew"
                    className={`tabletNavLink ${location.pathname === "/Crew" ? "active" : ""}`}
                >
                    <span className="numbersHeader">02</span> CREW
                </NavLink>
                <NavLink
                    to="/Technology"
                    className={`tabletNavLink ${location.pathname === "/Technology" ? "active" : ""}`}
                >
                    <span className="numbersHeader">03</span> TECHNOLOGY
                </NavLink>
            </nav>
        </section >
    )
}
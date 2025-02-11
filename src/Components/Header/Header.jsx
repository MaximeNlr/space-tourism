import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import Assets from "../../assets/Assets";

export default function Header() {
    const location = useLocation();
    return (
        <section className="headerContainer">
            <div className="leftHeader">
                <img src={Assets.logo_header} alt="" />
                <div className="lineHeader"></div>
            </div>
            <nav>
                <NavLink
                    to="/"
                    className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                >
                    00 HOME
                </NavLink>
                <NavLink
                    to="/Destination"
                    className={`nav-link ${location.pathname === "/Destination" ? "active" : ""}`}
                >
                    01 DESTINATION
                </NavLink>
                <NavLink
                    to="/Crew"
                    className={`nav-link ${location.pathname === "/Crew" ? "active" : ""}`}
                >
                    02 CREW
                </NavLink>
                <NavLink
                    to="/Technology"
                    className={`nav-link ${location.pathname === "/Technology" ? "active" : ""}`}
                >
                    03 TECHNOLOGY
                </NavLink>
            </nav>
        </section >
    )
}
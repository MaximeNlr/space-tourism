import "./MobileHeader.css"
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Assets from "../../assets/Assets";

export default function MobileHeader() {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="mobileHeaderContainer">
            <div className="mobileLogo">
                <img
                    src={Assets.logo_header} alt="Logo "
                />
                <img
                    src={Assets.mobileNavLogo} alt=""
                    className="menu-icon"
                    onClick={() => setMenuOpen(true)}
                />
            </div>
            <div className={`mobileHeader ${menuOpen ? "open" : ""}`}>
                <img
                    src={Assets.mobileClose} alt=""
                    onClick={() => setMenuOpen(false)}
                />
                <nav>
                    <NavLink
                        to="/"
                        className={`nav-link-mobile ${location.pathname === "/" ? "active" : ""}`}
                    >
                        00 HOME
                    </NavLink>
                    <NavLink
                        to="/Destination"
                        className={`nav-link-mobile ${location.pathname === "/Destination" ? "active" : ""}`}
                    >
                        01 DESTINATION
                    </NavLink>
                    <NavLink
                        to="/Crew"
                        className={`nav-link-mobile ${location.pathname === "/Crew" ? "active" : ""}`}
                    >
                        02 CREW
                    </NavLink>
                    <NavLink
                        to="/Technology"
                        className={`nav-link-mobile ${location.pathname === "/Technology" ? "active" : ""}`}
                    >
                        03 TECHNOLOGY
                    </NavLink>
                </nav>
            </div>
        </section >
    )
}
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
                    className="delete-icon"
                    onClick={() => setMenuOpen(false)}
                />
                <nav>
                    <NavLink
                        to="/"
                        className={`navLinkMobile ${location.pathname === "/" ? "active" : ""}`}
                    >
                        <span className="numbersHeader">00</span> HOME
                    </NavLink>
                    <NavLink
                        to="/Destination"
                        className={`navLinkMobile ${location.pathname === "/Destination" ? "active" : ""}`}
                    >
                        <span className="numbersHeader">01</span> DESTINATION
                    </NavLink>
                    <NavLink
                        to="/Crew"
                        className={`navLinkMobile ${location.pathname === "/Crew" ? "active" : ""}`}
                    >
                        <span className="numbersHeader">02</span> CREW
                    </NavLink>
                    <NavLink
                        to="/Technology"
                        className={`navLinkMobile ${location.pathname === "/Technology" ? "active" : ""}`}
                    >
                        <span className="numbersHeader">03</span> TECHNOLOGY
                    </NavLink>
                </nav>
            </div>
        </section >
    )
}
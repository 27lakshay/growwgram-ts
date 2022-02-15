import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./navbar.css";
import { removeCache } from "../../utils/cache/cache";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isDark, setIsDark] = useState(true);

    function resetCache() {
        if (location.pathname === "/") {
            removeCache("feed_posts");
            window.location.reload();
            return;
        }
        navigate("/");
    }

    useEffect(() => {
        if (isDark) {
            document.documentElement.style.setProperty("--gg-primary", "#0B132B");
            document.documentElement.style.setProperty("--gg-primary-light", "#1C2541");
            document.documentElement.style.setProperty("--gg-primary-lightest", "#3A506B");
            document.documentElement.style.setProperty("--gg-button-hover", "#34312D");
            document.documentElement.style.setProperty("--gg-text", "#E8EDDF");
            document.documentElement.style.setProperty("--gg-text-hover", "#fff");
            return;
        }
        document.documentElement.style.setProperty("--gg-primary-lightest", "#f1a9a8");
        document.documentElement.style.setProperty("--gg-primary", "#F5CAC3");
        document.documentElement.style.setProperty("--gg-primary-light", "#F28482");
        document.documentElement.style.setProperty("--gg-off-white", "#dbdbdb");
        document.documentElement.style.setProperty("--gg-grey-light", "#dbdbdb");
        document.documentElement.style.setProperty("--gg-button-hover", "#F6DCD3");
    }, [isDark]);

    return (
        <nav className="nb19Wrapper">
            <span className="nb19Brand">
                <button onClick={() => resetCache()}>GrowwGram</button>
            </span>
            <span className="nb19Options">
                <button title="Messages" className="nb19Option">
                    <i className="fas fa-comment" />
                </button>
                <button title="Notifications" className="nb19Option">
                    <i className="fas fa-bell" />
                </button>
                <button title="Profile" className="nb19Option" onClick={() => navigate("/windows")}>
                    <i className="fas fa-user-circle" />
                </button>
                <button title="Theme" className="nb19Option" onClick={() => setIsDark((prev) => !prev)}>
                    {isDark ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
                </button>
                {/* <button onClick={() => setTheme("brown")}>brown</button>
                <button onClick={() => setTheme("blue")}>blue</button>
                <button onClick={() => setTheme("yellow")}>yellow</button>
                <button onClick={() => setTheme("green")}>green</button> */}
            </span>
        </nav>
    );
}

// if (theme === "brown") {
//     document.documentElement.style.setProperty("--gg-primary", "#14110F");
//     document.documentElement.style.setProperty("--gg-primary-light", "#34312D");
//     document.documentElement.style.setProperty("--gg-primary-lightest", "#7E7F83");
//     document.documentElement.style.setProperty("--gg-button-hover", "#34312D");
//     document.documentElement.style.setProperty("--gg-text", "#D9C5B2");
//     document.documentElement.style.setProperty("--gg-text-hover", "#F3F3F4");
// }
// if (theme === "blue") {
//     document.documentElement.style.setProperty("--gg-primary", "#0B132B");
//     document.documentElement.style.setProperty("--gg-primary-light", "#1C2541");
//     document.documentElement.style.setProperty("--gg-primary-lightest", "#3A506B");
//     document.documentElement.style.setProperty("--gg-button-hover", "#34312D");
//     document.documentElement.style.setProperty("--gg-text", "#E8EDDF");
//     document.documentElement.style.setProperty("--gg-text-hover", "#fff");
// }
// if (theme === "yellow") {
//     document.documentElement.style.setProperty("--gg-primary", "#EEA243");
//     document.documentElement.style.setProperty("--gg-primary-light", "#F3E37C");
//     document.documentElement.style.setProperty("--gg-primary-lightest", "#F3D34Ay");
//     document.documentElement.style.setProperty("--gg-button-hover", "#F3D34A");
//     document.documentElement.style.setProperty("--gg-text", "#242423");
//     document.documentElement.style.setProperty("--gg-text-hover", "#242423");
// }
// if (theme === "green") {
//     document.documentElement.style.setProperty("--gg-primary", "#111D13");
//     document.documentElement.style.setProperty("--gg-primary-light", "#415D43");
//     document.documentElement.style.setProperty("--gg-primary-lightest", "#709775");
//     document.documentElement.style.setProperty("--gg-button-hover", "#415D43");
//     document.documentElement.style.setProperty("--gg-text", "#E8EDDF");
//     document.documentElement.style.setProperty("--gg-text-hover", "#fff");
// }

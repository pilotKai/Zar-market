import React, { useState } from "react"
import { NavLink, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SectionTwo from "./pages/SectionTwo"
// import Home from "./pages/Home";
function NavFunc() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="nav">
                <header className="header">
                    <div className="navLeft"><NavLink to="/"><h1>zar</h1></NavLink></div>
                    <button className="menu-button" onClick={() => setOpen(!isOpen)}>About</button>
                    <nav className={`menu ${isOpen ? "active" : ""}`} >
                        <ul className="menu_list">

                            <NavLink to="/about"><li className="menu_item"><span>Ishchi haqida malumot</span></li></NavLink>
                            <NavLink to=""><li className="menu_item"><span>Qoida va intizom</span></li></NavLink>
                            <li className="menu_item"><span>Kim qanday vazifani bajarishi</span></li>
                            {/* <li className="menu_item"><p>Bu savvolarga javobni pasroqdan izlang <img src="./img/IMAGE.png" alt="" /></p></li> */}

                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<SectionTwo />} />
                </Routes>
            </div>
        </>
    )
}
export default NavFunc
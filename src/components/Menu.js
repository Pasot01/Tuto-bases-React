import { NavLink } from "react-router-dom"

import '../css/menu.css';

export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><NavLink to="/" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Home</NavLink></li>
                <li><NavLink to="/MyProfil" className={({isActive}) => (isActive ? "activeLink" : undefined)}>My Profil</NavLink></li>
                <li><NavLink to="/TechnoAdd" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Add Techno</NavLink></li>
                <li><NavLink to="/TechnoList" className={({isActive}) => (isActive ? "activeLink" : undefined)}>All Technos</NavLink></li>
            </ul>
        </div>
    )
}
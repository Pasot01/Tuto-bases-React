import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function MyProfil() {
    return (
        <>
            <div className="myprofil">
                <h1 className="myprofil-h1">MyProfil</h1>
            </div>
            <nav className="menu link2">
                <NavLink to="/MyProfil/Courses/Learning">My Courses</NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/MyProfil/Courses/Web">Web Courses</NavLink>
            </nav>
            <Outlet />
        </>


    )
}

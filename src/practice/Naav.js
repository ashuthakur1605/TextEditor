
import React from "react"
import { Link } from "react-router-dom"
// import PropType from 'prop-types'
export default function Nav(props) {
    return (
        <>
            <header>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                            </div>
                        </div>
                    </div>
                    {/* <nav classNameName="navbar h-className-resp">
                    <ul classNameName="navlist v-className-resp">
                    <li><a href="/">Home</a></li>
                    <li> <a href="/">Explore</a> </li>
                    <li> <a href="/">About us</a> </li>
                    <li> <a href="/">Our plans</a> </li>
                    <li> <a href="/">support</a> </li>
                    
                    </ul>
                    <input type="text" classNameName="search " placeholder="Search Here" />
                <button type="button" classNameName="btn btn-primary ">Search</button> 


                <div classNameName="burgar">
                    <div classNameName="line"></div>
                    <div classNameName="line"></div>
                    <div classNameName="line"></div>
                </div>
                
                
            </nav> */}
            </nav>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
            </header>
        </>
    )
}



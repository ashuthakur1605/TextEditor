
import React from "react"
// import { a } from "react-router-dom"
// import PropType from 'prop-types'
export default function Nav(props) {
    return (
        <>
            <header>
                {/* <nav className={`navbar navbar-expand-lg navbar-
                ${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                
                               
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav> */}
                <nav className={`navbar navbar-expand-lg navbar-
                ${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">{props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                               <li>
                                <a className="nav-a active" aria-current="page" href="#">Home</a>
                               </li>
                                <li>
                                <a className="nav-a" href="#">About</a>
                                </li>
                            </div>
                        </div>
                    </div>
                    </nav>
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
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </header>
        </>
    )
}




import React from "react"
export default function Texty(props){
    return(
        <>
        <header>
        <nav className="navbar h-class-resp">
                    <ul className="navlist v-class-resp">
                        <li><a href="/">Home</a></li>
                        <li> <a href="/">Explore</a> </li>
                        <li> <a href="/">About us</a> </li>
                        <li> <a href="/">Our plans</a> </li>
                        <li> <a href="/">support</a> </li>

                    </ul>

                    <div className="bar v-class-resp">

                        <input type="text" className="search" placeholder="Search Here" />
                        <button className="btn"> search</button>

                    </div>

                    <div className="burgar">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </nav>
        </header>
        </>
    )
}



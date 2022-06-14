// import React, { useState } from 'react'
import image from "./pic/bg1.jpg";
import c1 from "./pic/apple.png";
import c2 from "./pic/google.png";
import c3 from "./pic/sam.png";
import c4 from "./pic/sony.png";



export default function Navbar(props) {












    return (
        <>



            <header>

                <nav className="navbar h-class-resp">
                    <ul className="navlist v-class-resp">
                        <li><a href="/">Home</a></li>
                        <li> <a href="/">Explore</a> </li>
                        <li> <a href="/">{props.Aboutus}</a> </li>
                        <li> <a href="/">Our plans</a> </li>
                        <li> <a href="/">support</a> </li>

                    </ul>

                    <div className="bar v-class-resp">

                        <input type="text" className="search" placeholder="Search Here" />
                        <button className="btn"> {props.search}</button>

                    </div>

                    <div className="burgar">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </nav>




                <div className="mainbox">

                    <div className="box">
                        <h1>Welcome</h1>
                        <h2>"Enjoy the new experience"</h2>
                        <img src={image} className="box img" alt="" />
                    </div>

                </div>








                <div className="head"><h1>Recommended Place</h1></div>



                <div className="section">



                    <div className="block" id="block1">

                        <p>Lorem ipsum dolor </p>

                    </div>
                    <div className="block" id="block2">
                        <p> Lorem ipsum dolLorem ipsum dolor</p>

                    </div>


                    <div className="block" id="block3">
                        <p> Lorem ipsum dolor
                            Lorem ipsum dolor</p>

                    </div>



                </div>

                <div className="container">
                    <p>  About Madhya Pradesh Tourism (MP) Welcome to the heart of India, Madhya Pradesh, a state which exudes timelessness in every way. The exotic land is an intoxicating mixture of rich history, vibrant sights, awe inspiring art and shrines. From north to south, east to west, Madhya Pradesh is adorned with beautiful tourist attractions. On the state's rugged northern side, there are the famous temples of Khajuraho. Never before was sensuality and spirituality depicted as artistically as here. Two of India's most famous wildlife sanctuaries- Kanha and Bandhavgarh are embracing the state's area. Towards the southwest are the Buddhist stupas of Sanchi and 15th-century citadels of Mandu. Madhya Pradesh tourism offers you a wonderful mix of nature, heritage, wildlife and spirituality.
                        The state shares its borders with 6 states of India – Chhattisgarh towards south-east, south-west border touches "Maharashtra", western border touches "Gujarat", north-west border touches "Rajasthan", and north-east border touches "Uttar Pradesh".  </p>
                </div>
                <div className="h"><h1>"Madhaya Pradesh tourism"</h1>

                </div>








                { /* 
            <div className="block" id="block4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rem aliquam quas.

          </div>






           <div className="block" id="block5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rem aliquam quas.


            </div>



               <div className="block" id="block6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rem aliquam quas.

             </div> */}












                <div className="sponser">
                    <div className="sponser1" id="client1">
                        <img src={c1} id="client1 img" className="sponser1 img" alt="" />


                    </div>
                    <div className="sponser1" id="client2">

                        <img src={c2} className="sponser1 img" alt="" />


                    </div>
                    <div className="sponser1" id="client3">

                        <img src={c3} id="client3 img" className="sponser1 img" alt="" />

                    </div>
                    <div className="sponser1" id="client4">

                        <img src={c4} className="sponser1 img" alt="" />

                    </div>
                </div>
            </header>

            <footer>

                copyrights &copy; all rights are reserved.

            </footer>



        </>
    );
}
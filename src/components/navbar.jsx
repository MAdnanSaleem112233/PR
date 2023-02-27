import React from "react";
import { FaHome, FaWonSign,FaServicestack } from 'react-icons/fa';
import { AiOutlinePhone } from "react-icons/ai";

function navbar(){
    return(
        <>
<nav className="navbar">
 <div className="navbar-logo">

   <a href="#">PRMS</a>
 </div>
 
 <ul className="navbar-menu">
   <li><a href="#"><FaHome/> Home</a></li>
   <li><a href="#"><FaWonSign/> About</a></li>
   <li><a href="#"><FaServicestack/> Services</a></li>
   <li><a href="#"><AiOutlinePhone/> Contact</a></li>
   <button className="input3">connect wallet</button>
 </ul>
 
</nav>
        </>
    )
}
export default navbar;
 
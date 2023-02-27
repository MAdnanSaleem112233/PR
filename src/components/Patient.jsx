import React from "react";
import { FaHome, FaWonSign,FaServicestack, FaPills,FaPumpMedical } from 'react-icons/fa';

export const Patient =(props) => {
  
     
     
    return(
        <>
<nav className="navbar3">
 <div className="navbar-logo">
   <a href="#"><FaPumpMedical/>PRMS</a>
 </div>
 
 <ul className="navbar-menu">
   <li><a href="#"><FaHome/> Home</a></li>
   <li><a href="#"><FaWonSign/> About</a></li>
   <li><a href="#"><FaServicestack/> Services</a></li>
   <li><a href="#"><FaPills/> Contact</a></li>
   <button className="input3">connect wallet</button>
 </ul>
 <div className="navbar-toggle">
   <span></span>
   <span></span>
   <span></span>
 </div>
</nav>

       	<div className="box">
		<form autocomplete="off">

			<h2>Patient Record</h2>

			<div class="inputBox">
				<input type="text" required="required"/>
				<span>Name</span>
				<i></i>
			</div>

			<div className="inputBox">
				<input type="text" required="required"/>
				<span>Father Name</span>
				<i></i>
			</div>

			<div className="inputBox">
				<input type="email" required="required"/>
				<span>Email</span>
				<i></i>
			</div>
			
			

           <div className="left">
			<div className="inputBox">
				<input type="number" required="required"/>
				<span>Age</span>
				<i></i>
			</div>

			<div className="inputBox">
				<input type="text" required="required"/>
				<span>Address</span>
				<i></i>
			</div>

			<div className="inputBox">
				<input type="tel" required="required"/>
				<span>Phone No</span>
				<i></i>
			</div>
			
		</div>
        
        <div className="in">
		<label className="choose" for="inputGroupFile">Choose Image</label>
		<input className="choose1" type="file" id="inputGroupFile"/>    
        </div>
        
		<div className="radio">
		<input type="radio" name="gender" value="male" /> Male &nbsp;
        <input type="radio" name="gender" value="female"  /> Female
        </div>
		<button class="input1" type="submit">Register</button>
			
		</form>
	</div>
        </>
    );
}
export default Patient;
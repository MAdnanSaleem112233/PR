import React from "react";
import { FaHome, FaWonSign,FaServicestack, FaPills,FaPumpMedical } from 'react-icons/fa';

export const Register =() => {
  
     
    
    return(
        
        <>
       <nav className="navbar2">
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

       	<div className="box2">
          
		 <form autocomplete="off">

			<h2>Register</h2>

			<div className="inputBox">
				<input type="text" required="required"/>
				<span>First Name</span>
				<i></i>
			</div>

            <div className="inputBox">
				<input type="text" required="required"/>
				<span>Last Name</span>
				<i></i>
			</div>

            <div className="inputBox">
				<input type="email" required="required"/>
				<span>Email</span>
				<i></i>
			</div>

			<div className="inputBox">
				<input type="password" required="required"/>
				<span>Password</span>
				<i></i>
			</div>
            
            <div className="inputBox">
				<input type="password" required="required"/>
				<span>Confirm Password</span>
				<i></i>
			</div>
		<button className="input2" type="submit">Register</button>
     

        <a href="patientRecord" style={{ marginLeft: "30px " }}>Have an account! Login here</a>
			
		</form>
	</div>
        </>
    );
}
export default Register;
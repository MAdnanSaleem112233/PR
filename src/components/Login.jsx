import React from "react";
import Nav from "./navbar";

export const login =(props) => {
  
     
     
    return(
        <>
        <Nav/>
        
       	<div className="box1">
		 <form autocomplete="off">

			<h2>Login Form</h2>

			<div className="inputBox">
				<input type="text" required="required"/>
				<span>Name</span>
				<i></i>
			</div>


            <div className="inputBox">
				<input type="password" required="required"/>
				<span>Password</span>
				<i></i>
			</div>
        
		<button className="input2" type="submit">Login</button>

        <a href="register">Don't have an account! Register here</a>
       


			
		</form>
	</div>
        </>
    );
}
export default login;
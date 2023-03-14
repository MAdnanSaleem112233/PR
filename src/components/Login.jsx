import React from "react";
import Nav from "./navbar";
import { useState } from "react";

export const Login =(props) => {
	const [formdata, setForm] = useState({
        name : "",
        password:" ",

});
const [name, setName] = useState ('');
const [password, setPassword] = useState('');
    
const handleSubmit =(e) => {
	e.preventDefault();
 }
    return(
        <>
        
       	<div className="box1">
		 <form autocomplete="off" onSubmit={handleSubmit}>

			<h2>Login Form</h2>

			<div className="inputBox">
				<input type="text" name="name" required="required"/>
				<span>Name</span>
				<i></i>
			</div>


            <div className="inputBox">
				<input type="password" name="password" required="required"/>
				<span>Password</span>
				<i></i>
			</div>
        
		<button className="input2" type="submit">Login</button>

        <a href="register" style={{ marginLeft:"20px",marginTop:"20px"}}>Don't have an account! Register here</a>
       


			
		</form>
	</div>
        </>
    );
}
export default Login;
import React from "react";


export const Register =() => {
	const [formdata, setForm] = useState({
        fname : "",
		lname: "",
		email:"",
        password:"",
		cpassword:"",

});
const [fname, setFname] = useState ('');
const [lname, setLname] = useState ('');
const [email, setEmail] = useState ('');
const [password, setPassword] = useState('');
const [cpassword, setCpassword] = useState ('');
    
const handleSubmit =(e) => {
	e.preventDefault();
 }
     
    
    return(
        
        <>
       
       	<div className="box2">
          
		 <form autocomplete="off" onSubmit={handleSubmit}>

			<h2>Register</h2>

			<div className="inputBox">
				<input type="text" name="fname" required="required"/>
				<span>First Name</span>
				<i></i>
			</div>

            <div className="inputBox">
				<input type="text" name="lname" required="required"/>
				<span>Last Name</span>
				<i></i>
			</div>

            <div className="inputBox">
				<input type="email" name="email" required="required"/>
				<span>Email</span>
				<i></i>
			</div>

			<div className="inputBox">
				<input type="password" name="password" required="required"/>
				<span>Password</span>
				<i></i>
			</div>
            
            <div className="inputBox">
				<input type="password" name="cpassword" required="required"/>
				<span>Confirm Password</span>
				<i></i>
			</div>
		<button className="input2" type="submit">Register</button>
     

        <a href="patientRecord"  style={{ marginLeft:"50px",marginTop:"20px"}}>Have an account! Login here</a>
			
		</form>
	</div>
        </>
    );
}
export default Register;
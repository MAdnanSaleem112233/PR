import React from "react";
import {FaStethoscope,FaTable } from 'react-icons/fa';
import logo from "../components/img/BP.png";


export const measureBP =() => {
  
    
     
    return(
        <>
       
        
       	<div className="bpbox"style={{backgroundColor:"#45f3ff", marginTop:"20px",marginLeft: "50px"}}>
		<form style={{backgroundColor:"#282c34"}}>
       

			<h2  style={{marginTop:"20px"}}>Blood Pressure Report</h2>
            <a href="">
            <div className="boxbp" style={{backgroundColor:"#45f3ff", marginTop:"5px",height:"30px",border:"2px solid black"}}>
           
            <h4  style={{color:"black",marginLeft: "220px"}}>Detailed Instructions</h4>
             
            </div></a>
           
            <div className="boxbp" style={{backgroundColor:"#45f3ff", marginTop:"10px",height:"200px"}}>
            <ul>
          <li  style={{color:"black",marginLeft:"25px"}}>Measure patient's blood pressure twice a day, in the morning and late afternoon, at almost the same times every day.</li>
          <li  style={{color:"black",marginLeft:"25px"}}>Before taking a measurement, a patient needs to sit comfortably with both feet on the floor for at least two minutes.</li>
          <li  style={{color:"black",marginLeft:"25px"}}>For valid results, when taking a patient's blood pressure, place his or her arm on a table so that the blood pressure cuff is roughly the same height as the patient's heart.</li>
          <li  style={{color:"black",marginLeft:"25px"}}>Record the patient's blood pressure and fill out the form daily.</li>
          </ul> 
            </div> 
            <div className="boxbp" style={{backgroundColor:"black", marginTop:"10px",height:"800px"}}>
            <div style={{marginTop:"10px",marginLeft:"150px"}}>
            <div className="inputBox">
				<input type="Date" required="required"/>
				<span>Date</span>
				<i></i>
			</div>

            <div className="inputBox">
				<input type="text" required="required"/>
				<span>Patient Name </span>
				<i></i>
			</div>

            <div className="inputBox">
				<input type="text" required="required" />
				<span>Blood Pressure</span>
				<i></i>
			</div>

			<div className="inputBox">
				<input type="number" required="required"/>
				<span>Age</span>
				<i></i>
			</div>
            
            <div className="inputBox">
				<input type="text" required="required"/>
				<span>Doctor Name</span>
				<i></i>
			</div>
		<button className="input2" type="submit" style={{marginTop:"30px", marginLeft: "100px", marginBottom:"10px"}}>Save</button>
        </div>
    </div>
           
		</form>
	</div>
        </>
    );
}
export default measureBP;
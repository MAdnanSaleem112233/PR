import React from "react";
import {FaStethoscope,FaTable } from 'react-icons/fa';
import logo from "../components/img/BP.png";


export const bloodPressure =() => {
  
    const tableStyle = {
        border: '1px solid black',
        borderCollapse: 'collapse',
        margin: '0 auto',
        marginTop: '20px',
        width: '100%'
      };
      const thStyle = {
        backgroundColor: '#45f3ff',
        border: '1px solid black',
        color: 'black',
        padding: '10px',
        textAlign: 'left',
      };
      const tdStyle = {
        border: '1px solid black',
        backgroundColor: 'lightgray',
        padding: '10px',
        textAlign: 'left',
      };
     
    return(
        <>
       
        
       	<div className="bpbox"style={{backgroundColor:"#45f3ff", marginTop:"20px",marginLeft: "50px"}}>
		<form  style={{backgroundColor:"#282c34"}}>
       <img src={logo} style={{height:"100px",width:"200px",marginLeft: "200px", marginTop: "-20px"}} />

			<h2  style={{marginTop:"20px"}}>Blood Pressure</h2>
            <a href="measureBP">
            <div className="boxbp" style={{backgroundColor:"#45f3ff", marginTop:"10px",height:"100px"}}>
            <FaStethoscope style={{color:"red",marginLeft:"300px",marginTop:"10px"}}/>
            <h4  style={{color:"black",marginLeft: "180px"}}>Measure Patient Blood Pressure</h4>
            <p  style={{color:"black",marginLeft: "130px"}}>Fill the form to save Patient's blood pressure</p>
            </div></a>
				
            <a href="patientRc">
            <div className="boxbp" style={{backgroundColor:"#45f3ff", marginTop:"10px",height:"100px"}}>
            <FaTable style={{color:"green",marginLeft:"300px",marginTop:"10px"}}/>
            <h4  style={{color:"black",marginLeft: "170px"}}>Track Blood Pressure Measurements</h4>
            <p  style={{color:"black",marginLeft: "120px"}}>Track Measurements with this blood pressure table</p>
            </div>  </a>
         

            <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Blood Pressure Category</th>
            <th style={thStyle}>Systolic hg mm (upper number)</th>
            <th style={thStyle}>and/or</th>
            <th style={thStyle}>Systolic hg mm (lower number)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Normal</td>
            <td style={tdStyle}>less then 120</td>
            <td style={tdStyle}>and</td>
            <td style={tdStyle}>less than 80</td>
          </tr>
          <tr>
            <td style={tdStyle}>Elevated</td>
            <td style={tdStyle}>120-129</td>
            <td style={tdStyle}>and </td>
            <td style={tdStyle}>less than 80</td>
          </tr>
          <tr>
            <td style={tdStyle}>High Blood pressure (Hypertension) Stage 1</td>
            <td style={tdStyle}>130-139</td>
            <td style={tdStyle}>or</td>
            <td style={tdStyle}>80-89</td>
          </tr>

          <tr>
            <td style={tdStyle}>HIGH BLOOD PRESSURE (HYPERTENSION) STAGE 2</td>
            <td style={tdStyle}>140 OR HIGHER</td>
            <td style={tdStyle}>or</td>
            <td style={tdStyle}>90 OR HIGHER</td>
          </tr>
          <tr>
            <td style={tdStyle}>HYPERTENSIVE CRISIS (CONSULT DOCTOR IMMEDIATELY)</td>
            <td style={tdStyle}>HIGHER THAN 180</td>
            <td style={tdStyle}>and/or</td>
            <td style={tdStyle}>HIGHER THAN 120</td>
          </tr>
        </tbody>
      </table>
           
		</form>
	</div>
        </>
    );
}
export default bloodPressure;
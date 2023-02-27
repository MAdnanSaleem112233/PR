import React from "react";




export const patientRc =() => {
    
    return(
        <>
        <div className="bpboxPR"style={{backgroundColor:"#45f3ff", marginTop:"20px",marginLeft: "50px"}}>
		<form style={{backgroundColor:"#d3d3d3"}}> 

        <h2  style={{marginTop:"15px", color: "#45f3ff", border: "2px solid #45f3ff",backgroundColor:"#23242a"}}>Track Blood Pressure Measurement</h2>
        <div className="maketable">
        <table>
       
          <tr>
            <th>Patient Name</th>
            <th>Category</th>
            <th>Blood Pressure</th>
            <th>Date</th>
            <th>Doctor Name</th>
            
          </tr>
       
    
          <tr>
            <td>Faisal</td>
            <td>Normal</td>
            <td>120/80</td>
            <td>12-01-2023</td>
            <td>Dr. Tariq</td>
          </tr>
          <tr>
            <td>1234</td>
            <td>1234</td>
            <td>1234</td>
            <td>1234</td>
            <td>1234</td>
          </tr>

    
        
          
       
      </table>
      </div>
        </form>
        </div>
        </>
    );
}
export default patientRc;
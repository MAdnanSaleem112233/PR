import React from "react";
import tbimg from "./img/tb.png"


function TB(){
    return(
        <>
   	      <div className="bpboxtb">
          
          <form autocomplete="off">
 
             <h2>TB TEST</h2>
             <img src={tbimg}/>
         
         <div style={{ marginLeft:"140px"}}>
             <div className="inputBox">
                 <input type="text" required="required"/>
                 <span>Patient Name</span>
                 <i></i>
             </div>
 
             
             <div className="inputBox">
                 <input type="Date" required="required"/>
                 <span>Date</span>
                 <i></i>
             </div>
             
             <div className="inputBox">
                 <input type="text" required="required"/>
                 <span>Test result mm</span>
                 <i></i>
             </div>

        <div className="radio">
        <h5 style={{marginTop:"30px", marginLeft:"-260px"}}>Test Result:</h5>&nbsp;
		<input style={{marginTop:"10px",marginLeft:"-170px"}} required="required" type="radio" name="gender" value="male" />  Positive 
        <input style={{marginTop:"10px",marginLeft:"-170px"}} required="required" type="radio" name="gender" value="female"  />Negative
        </div>



 
             
         <button className="input2" type="submit">Submit</button>
      
 
         </div>
             
         </form>
     </div>
        </>
    );
}
export default TB;

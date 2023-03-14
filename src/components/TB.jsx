import React from "react";
import tbimg from "./img/tb.png";
import { useState } from "react";

function TB() {
  const [formdata, setForm] = useState({
    pname: "",
    date: "",
    dname: "",
    testresult: "",
  });
  const [pname, setPname] = useState("");
  const [date, setDate] = useState("");
  const [dname, setDname] = useState("");
  const [testresult, setTestresult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    setTestresult(event.target.value);
  };

  return (
    <>
      <div className="bpboxtb">
        <form autocomplete="off" onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: "20px" }}>TB TEST</h2>
          <img src={tbimg} alt={tbimg} />

          <div style={{ marginLeft: "140px" }}>
            <div className="inputBox">
              <input type="text" name="pname" required="required" />
              <span>Patient Name</span>
              <i></i>
            </div>

            <div className="inputBox">
              <input type="Date" name="date" required="required" />
              <span>Date</span>
              <i></i>
            </div>

            <div className="inputBox">
              <input type="text" name="dname" required="required" />
              <span>Doctor Name</span>
              <i></i>
            </div>

            <div className="inputBox">
              <input type="text" name="testresult" required="required" />
              <span>Test result mm</span>
              <i></i>
            </div>

            <div className="radio">
              <h4 style={{ marginTop: "30px", marginLeft: "-260px" }}>
                Test Result:
              </h4>
              &nbsp;
              <input
                style={{ marginTop: "10px", marginLeft: "-170px" }}
                required="required"
                type="radio"
                name="gender"
                value="male"
              />{" "}
              Positive
              <input
                style={{ marginTop: "10px", marginLeft: "-170px" }}
                required="required"type="radio"name="gender"value="female"onChange={handleChange}/>
              Negative
            </div>

            <button className="input2" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default TB;

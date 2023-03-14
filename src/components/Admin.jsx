import React from "react";
import { useState} from "react";
import { FaUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Admin() {

  // Properties

  const [walletAddress, setWalletAddress] = useState("");

  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    // alert("Do you want to connect your Wallet");
    
    console.log('Requesting account...');

    // Check if Meta Mask Extension exists 
    if (window.ethereum) {
      console.log('detected');
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }
  requestAccount();

  return (
    <>
    <div style={{height:"100vh"}}>

      <nav className="navbar" style={{ height:"10vh"}}>
        <div className="navbar-logo">
          <Link to='#'>PRMS</Link>
        </div>
        <ul className="navbar-menu">
         
          <li><Link to='/bloodPressure'>BP Test</Link></li>
          <li><Link to='/tb'>TB Test</Link></li>
          <li><Link to='/login'><FaUserCircle/></Link></li>
          
          <button className="input3" style={{ display: "block", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", textAlign: "left"}} onClick={requestAccount} id="myButton">{walletAddress} Connect Wallet  </button>
         
        </ul>
      </nav>
      <div class="sp-container">
     
        <div class="sp-content">
          {/* <div class="sp-globe"></div> */}
          <h2 class="frame-1">Welcome</h2>
          <h2 class="frame-2">To Patient Record</h2>
          <h2 class="frame-3">Management</h2>
          <h2 class="frame-4">System</h2>
          <h2 class="frame-5">
            <span>P</span>
            <span>R</span>
            <span>M</span>
            <span>S</span>
          </h2>
        </div>
        
      </div>
    </div>
        
      
    </>
  );
}
export default Admin;
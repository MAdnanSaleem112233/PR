import React from "react";
import { useState } from "react";
import { ethers } from 'ethers';


function Admin() {

  // Properties

  const [walletAddress, setWalletAddress] = useState("");

  // Helper Functions


  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    var button = document.getElementById("myButton");
    button.style.width = "450px";

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

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (
    <>
      <nav className="navbar" style={{ marginTop: "-311px" }}>
        <div className="navbar-logo">
          <a href="#" >PRMS</a>
        </div>
        <ul className="navbar-menu">
          <li><a href="bloodPressure">BP Test</a></li>
          <li><a href="tb">TB Test</a></li>
          <button className="input3" style={{ display: "block", overflow: "hidden", whiteSpace: " nowrap", textOverflow: "ellipsis", textAlign: "left" }} onClick={requestAccount} id="myButton"> Connect Wallet {walletAddress} </button>
        </ul>
      </nav>

      <div class="sp-container">
        <div class="sp-content">
          <div class="sp-globe"></div>
          <h2 class="frame-1">Welcome</h2>
          <h2 class="frame-2">To Patient Record</h2>
          <h2 class="frame-3">Management </h2>
          <h2 class="frame-4"> System</h2>
          <h2 class="frame-5">
            <span>P</span>
            <span>R</span>
            <span>M</span>
            <span>S</span>
          </h2>

        </div>
      </div>
    </>
  );
}
export default Admin;
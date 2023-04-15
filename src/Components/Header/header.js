import React from "react";
import "./header.css";
import Logo from "../Media/Logo.svg";
import { Link } from "react-router-dom";
import Web3 from "web3";
import { useState } from "react";

function Header() {
  const [connected, setConnected] = useState(false);

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Get the current chain ID
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        // Check if the current chain ID matches the zkSync Era Mainnet chain ID
        if (chainId !== "0x144") {
          // Prompt the user to switch to the zkSync Era Mainnet
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x144" }],
          });
        }
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setConnected(true);
        console.log("Connected to MetaMask with account:", accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Please install MetaMask");
    }
  };

  return (
    <header>
      <div className="wrap-header">
        <div className="logo-header">
          <img src={Logo}></img>
        </div>
        <ul className="header-links">
          <li>
            <Link to="/">Swap</Link>
          </li>
          <li>
            <Link to="/liquidity">Liquidity</Link>
          </li>
          <li>
            <Link to="/vest">Vest</Link>
          </li>
          <li>
            <Link to="/vote">Vote</Link>
          </li>
          <li>
            <Link to="/rewards">Rewards</Link>
          </li>
          <li>
            <Link to="/bribe">Bribe</Link>
          </li>
          <li>
            <Link to="/presale">Presale</Link>
          </li>
        </ul>
        <div className="header-btn">
          <button onClick={connectMetaMask}>
            {connected ? "Connected" : "Connect"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

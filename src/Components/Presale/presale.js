import React, { useState, useEffect } from 'react';
import "./presale.css";
import contractABI from "./contractABI.json";
import arrow from "../Media/arrow_right.svg";
import down from "../Media/arrow.svg";
import Web3 from "web3";

function Presale() {
  const gradientStyle = {
    background: "linear-gradient(to bottom right, #F4AD4A, #FC6359)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const [amount, setAmount] = useState("");
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState(0);
  const [stackValue, setStackValue] = useState("");

  const ETH_TO_STACK_RATIO = 43668.122;

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
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


  const handleMaxClick = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const value = web3.utils.fromWei(balance, "ether");
    const formattedValue = parseFloat(value).toFixed(1);

    setBalance(formattedValue);
  };

  const handleUnlockWallet = async () => {
    const web3 = new Web3(window.ethereum);
    const contractAddress = "0xE9287a50B7979Bf81eB9f62966D735a7FCC5Cc1A";
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const chainId = await window.ethereum.request({ method: "eth_chainId" });

    if (chainId !== "0x144") {
      // Prompt the user to switch to the zkSync Era Mainnet
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x144" }],
      });
    }
    const sender = (await web3.eth.getAccounts())[0];
    const value = web3.utils.toWei(amount, "ether");

    try {
      const gasPrice = await web3.eth.getGasPrice();
      const gasLimit = 201000;
      const result = await contract.methods.buyPresale().send({
        from: sender,
        value: value,
        gasPrice: gasPrice,
        gasLimit: gasLimit,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    setStackValue(value * ETH_TO_STACK_RATIO);
  };

  useEffect(() => {
    handleMaxClick();
  }, []);

  return (
    <main>
      <div className="presale-wrap">
        <div className="title-presale">
          <h3>POTION PRESALE</h3>
        </div>
        <div className="card-presale">
          <div className="card-presale-header">
            <div className="image-converter">
              <h2>ETH</h2>
              <img src={arrow}></img>
              <h2 style={gradientStyle}>POTION</h2>
            </div>
            <div className="info-price">
              <h5>1 POTION = 0.05 USDC</h5>
            </div>
          </div>
          <div className="card-presale-content">
            <div className="timer">
              <p>Contribute in ETH</p>
            </div>

            <div className="input-buy">
              <input
                type={"number"}
                placeholder="0"
                value={amount}
                onChange={handleAmountChange}
              ></input>
       

              <div className="eth-pointer">
                <h3>ETH</h3>
              </div>
            </div>
            <div className="arrow-down">
              <img src={down}></img>

            </div>
            <div className="input-buy">
              <input
                type={"number"}
                placeholder="0"
                value={stackValue}
                readOnly
              ></input>
      

              <div className="eth-pointer">
                <h3>POTION</h3>
              </div>
            </div>

            <div className="button-buy">
              {connected ? (
                <button onClick={handleUnlockWallet}>Contribute</button>
              ) : (
                <button onClick={connectMetaMask}>Connect Wallet</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Presale;

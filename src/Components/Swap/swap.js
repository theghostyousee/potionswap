import React from "react";
import "./swap.css";
import ETH from "../Media/eth.png";
import usdc from "../Media/usdc.png";
import arrow from "../Media/arrow.svg";

function Swap() {
  return (
    <main>
      <div className="wrap-swap">
        <div className="swap-card">
          <div className="first-input">
            <div className="info-token">
              <img src={ETH}></img>
              <h4>ETH</h4>
            </div>
            <input type="number"></input>
          </div>
          <div className="arrow">
            <img src={arrow}></img>
          </div>

          <div className="second-input">
            <div className="info-token-SECOND">
              <img src={usdc}></img>
              <h4>USDC</h4>
            </div>
            <input type="number"></input>
          </div>
          <div className="price-info">
            <h5>Price info</h5>
          </div>
          <div className="return-info">
            <div className="smol">
                <p>0</p>
                <p>ETH per USDC</p>
            </div>
            <div className="smol">
                <p>0</p>
                <p>USDC per ETH</p>
            </div>
          </div>
          <div className="button-swap">
            <button>Swap</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Swap;

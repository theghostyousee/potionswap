import React from "react";
import Glass from "../Media/Glass.svg";
import "./liquidity.css";

function Liquidity() {
  return (
    <main>
      <div className="wrap-liquidity">
        <div className="pool">
          <h1>POOLS</h1>
          <p>
            Create a pair or add liquidity to existing Correlated or Volatile
            liquidity pairings.
          </p>
        </div>
        <div className="pool-shit">
          <button>Add Liquidity</button>
          <input type="text" placeholder="ETH, POTION, 0x..."></input>
          <button id="yes">My Pools</button>
          <button>Correlated</button>
        </div>
        <div className="soon">
            <h4>Loading...</h4>
        </div>
      </div>
    </main>
  );
}

export default Liquidity;

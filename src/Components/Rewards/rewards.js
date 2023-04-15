import React from "react";
import Glass from "../Media/Glass.svg";
import "./rewards.css";

function Rewards() {
  return (
    <main>
      <div className="wrap-rewards">
        <div className="pool">
          <h1>REWARDS</h1>
          <p>Claim your earned rewards.</p>
        </div>
        <div className="vote-shit">
          <button>Claim All</button>
          <button id="yes">Select your veNFT</button>
        </div>
        <div className="vest-card">
          <div className="top-vest">
            <p>Pool</p>
            <p>Your Position</p>
            <p>Your Earned</p>
            <p>Actions</p>
          </div>
          <div className="content-vest">
            <h5>Loading...</h5>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Rewards;

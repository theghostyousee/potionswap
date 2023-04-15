import React from "react";
import Glass from "../Media/Glass.svg";
import "./vote.css";

function Vote() {
  return (
    <main>
      <div className="wrap-vote">
        <div className="pool">
          <h1>VOTE</h1>
          <p>
            Use your vePOTION to vote for directing emissions to your desired
            pools.
          </p>
        </div>
        <div className="vote-shit">
          <input type="text" placeholder="ETH, POTION, 0x..."></input>
          <button id="yes">Select your veNFT</button>
        </div>
        <div className="vest-card">
          <div className="top-vest">
            <p>Asset</p>
            <p>My Stake</p>
            <p>TVL</p>
            <p>My Votes</p>
            <p>Current Vote</p>
          </div>
          <div className="content-vest">
            <h5>Loading...</h5>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Vote;

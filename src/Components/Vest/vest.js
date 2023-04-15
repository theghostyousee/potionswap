import React from "react";
import "./vest.css";
function Vest() {
  return (
    <main>
      <div className="wrap-vest">
        <div className="buttons-wrap">
          <button>Create Lock</button>
          <button>Merge veNFTs</button>
        </div>
        <div className="vest-card">
          <div className="top-vest">
            <p>Pair</p>
            <p>Vest Amount</p>
            <p>Vest Value</p>
            <p>Vest Expires</p>
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

export default Vest;

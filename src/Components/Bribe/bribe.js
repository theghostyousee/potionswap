import React from "react";
import "./bribe.css";
function Bribe() {
  return (
    <main>
      <div className="wrap-bribe">
        <div className="bribe-content">
          <div className="left">
            <h1>BRIBE</h1>
            <p>
              Offer incentives to attract votes and maximize emissions awarded
              to your pools. Alternatively, add direct rewards to LPers streamed
              out over the next 7 days.
            </p>
          </div>
          <div className="right">
            <div className="top-bribe">
                <button>Vote Bribe</button>
                <div className="fake-btn">
                    <h4>LP Bribe</h4>
                </div>
            </div>
            <div className="not-available">
                <h3>Not Available..</h3>
            </div>
            <div className="button-bribe">
                <button>Create Bribe</button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Bribe;

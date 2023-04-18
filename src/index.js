import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import Header from "./Components/Header/header";
import Nav from "./Components/Nav/Nav";
import Swap from "./Components/Swap/swap";
import Liquidity from "./Components/Liquidity/liquidity";
import Vest from "./Components/Vest/vest";
import Vote from "./Components/Vote/vote";
import Rewards from "./Components/Rewards/rewards";
import Bribe from "./Components/Bribe/bribe";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Presale from "./Components/Presale/presale";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Header />
      <Routes>
        <Route exact path="/" element={<Presale />} />
        <Route exact path="/liquidity" element={<Liquidity />} />
        <Route path="/vest" element={<Vest />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/presale" element={<Presale />} />
        <Route path="/bribe" element={<Bribe />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();



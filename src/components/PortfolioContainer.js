import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stockList, onUpdateStock }) {

  const displayPortfolio = stockList
  .filter(stock => {return stock.portfolio})
  .map(stock => {
    return <Stock key={stock.id} stock={stock} onUpdateStock={onUpdateStock} />
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {displayPortfolio}
    </div>
  );
}

export default PortfolioContainer;

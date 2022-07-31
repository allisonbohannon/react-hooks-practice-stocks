import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, onUpdateStock, filterTerm, sort}) {

  const displayStocks = stockList
  .filter(stock => {
    if (filterTerm) {
      return stock.type === filterTerm
    } else {
      return true
    } 
  })
  .sort((stockA, stockB) => {
    if (sort === 'Alphabetically') {
      if (stockA.name < stockB.name) {
        return -1
      } else {
        return 1
      }
    } else if (sort === "Price") {
      return stockA.price - stockB.price 
    } else {
      return 0
    }
  })
  .map(stock => {
    return <Stock key={stock.id} stock={stock} onUpdateStock={onUpdateStock}/>
  })
  

  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;

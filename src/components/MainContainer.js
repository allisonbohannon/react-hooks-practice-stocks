import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer() {

  const [stockList, setStockList] = useState([]); 
  const [filterTerm, setFilterTerm] = useState('')
  const [sort, setSort] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(response => response.json())
    .then(data => {
      const mappedStocks = data.map(stock => {
        return {...stock, portfolio: false}
      })
      
      setStockList(mappedStocks)})
  }, [])

  function handleUpdateStock(id) {
      const updatedStockList = stockList.map(stock => {
        if (stock.id === id) {
          return {...stock, portfolio: !stock.portfolio}
        } else {return stock}
      })
      setStockList(updatedStockList)
    }

    function handleUpdateSort(type) {
      setSort(type)
    }

    function handleUpdateFilter(term) {
      setFilterTerm(term)
    }
  

  return (
    <div>
      <SearchBar onUpdateSort={handleUpdateSort} onUpdateFilter={handleUpdateFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} onUpdateStock={handleUpdateStock} filterTerm={filterTerm} sort={sort}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stockList={stockList} onUpdateStock={handleUpdateStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

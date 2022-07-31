import React, {useState} from "react";

function SearchBar({onUpdateSort, onUpdateFilter}) {
  const [sort, setSort] = useState('')
  const [dropDown, setDropDown] = useState('Tech')
  
  
  function handleChangeSort(e) { 
    setSort(e.target.value)
    onUpdateSort(e.target.value)
  }

  function handleChange(e) {
    setDropDown(e.target.value)
    onUpdateFilter(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sort === 'Alphabetically' ? true : false}
          onChange={handleChangeSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sort === 'Price' ? true : false}
          onChange={handleChangeSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleChange} value={dropDown}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

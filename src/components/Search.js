import React, { useState } from "react";

function Search({onSearch}) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setInputValue(searchValue); 

    if (onSearch && typeof onSearch === "function") {
      onSearch(searchValue);
    } else {
      console.error("onSearch is not a function");
    }
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={inputValue}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;

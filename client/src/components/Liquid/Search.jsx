import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import './Liquid.css'
function SearchBar({ placeholder, data }) {
  console.log(data,'heyyy')
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
// creating tow state for searching 
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      console.log(data,'hyhyhy')
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
 // creating a function to save the search word and filtring the data 
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
// creating a function to save the set state 
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
            {/* saving the input */}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <div>
      <div className="container mx-auto mt-4 ">
        <div className="row">
          <div className="d-flex justify-content-center ">
            <div className="card">
              <img src={value.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">{value.name}</h4>
                <h6>{value.description}</h6>
                <h3>{value.price}DTN</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
// maping over the filter data 
// rendring the data 


export default SearchBar;
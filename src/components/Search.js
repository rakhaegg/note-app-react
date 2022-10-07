import React from "react";
import PropTypes from 'prop-types';
const Search = ({handleSearch , name , value})=>{
    
    return(
        <div className="search-bar">
            <input type="text" placeholder="Cari" onInput={(event) => handleSearch(event.target.value)} name={name} value={value}/>
        </div>
    )
}
Search.propTypes = {
    handleSearch : PropTypes.func.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired
}

export default Search;

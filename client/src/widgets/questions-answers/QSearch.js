import React, {useState, useEffect} from 'react';

const QSearch = props => {

  return (

    <form>
      <label className="rr-searchbar">
        <input onChange={() => props.setSearchTerm(event.target.value)} placeholder="Have a question? Search for answers…" type="text" name="search" />
      </label>
    </form>
  );

}

export default QSearch;
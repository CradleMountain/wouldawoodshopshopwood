import React, {useState, useEffect} from 'react';

const QSearch = props => {




  // const submitHandler = e => {
  //   e.preventDefault()
  // }

  // const changeHandler = e => {
  //   e.preventDefault();


  // }

  return (

    <form>
      <label>
        Search
        <input onChange={() => props.setSearchTerm(event.target.value)} placeholder="Have a question? Search for answers…" type="text" name="search" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

}


export default QSearch;


// <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTornado, faSearch } from '@fortawesome/free-solid-svg-icons';

<<<<<<< HEAD
const NavBar = ({currentProduct, setProduct}) => {
=======
const NavBar = ({setProduct}) => {
>>>>>>> 44bd3964e7733ee1747eb5ff98fd5e4cff96584a
  const [term, setTerm] = useState('');
  return (
    <div className="nav-bar">
      <span className="nav-header" onClick={() => {setProduct(37311);}}>
       <FontAwesomeIcon icon={faTornado}/> I AM A SHARK TORNADO
      </span>
      <div>{currentProduct}</div>
      <div className="nav-search">
        <input type="text" value={term} onChange={(e) => {setTerm(e.target.value);}} placeholder="Looking for something?"/>
<<<<<<< HEAD
        <span className="icon" onClick={() => {setProduct(term);}}><FontAwesomeIcon icon={faSearch}/></span>
=======
        <span className="icon"><FontAwesomeIcon icon={faSearch} onClick={() => {setProduct(term);}}/></span>
>>>>>>> 44bd3964e7733ee1747eb5ff98fd5e4cff96584a
      </div>
    </div>
  );
};

export default NavBar;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTornado, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({currentProduct, setProduct}) => {
  const [term, setTerm] = useState('');
  return (
    <div className="nav-bar">
      <span className="nav-header">
       <FontAwesomeIcon icon={faTornado}/> I AM A SHARK TORNADO
      </span>
      <div>{currentProduct}</div>
      <div className="nav-search">
        <input type="text" value={term} onChange={(e) => {setTerm(e.target.value);}} placeholder="Looking for something?"/>
        <span className="icon" onClick={() => {setProduct(term);}}><FontAwesomeIcon icon={faSearch}/></span>
      </div>
    </div>
  );
};

export default NavBar;
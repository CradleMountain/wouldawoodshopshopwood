import React, { useState } from 'react';

const Sorter = ({ sort, select }) => {
  const [selection, setSelection] = useState(sort);
  const selectSort = (e) => {
    e.preventDefault();
    setSelection(e.target.value);
    select(e.target.value);
  };

  return (
    <div className="rr-sorter">
      <span>Sort by <select name="sorter" onChange={selectSort} defaultValue={selection}>
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </span>
    </div>
  )
};

export default Sorter;
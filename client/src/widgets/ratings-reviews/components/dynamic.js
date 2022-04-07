import React, { useState } from 'react';

const DynamicTextInput = ({state, setState, validate, type = 'text', placeholder = '', min = 1, max = 1000, required = true}) => {
  const [text, setText] = useState(state);

  const change = (e) => {
    setText(e.target.value);
    validate(e.target.checkValidity());
    if (setState) {
      setState(e.target.value);
    }
  };

  if (type === 'textarea') {
    return (<>
      <textarea value={text} onChange={change} placeholder={placeholder} minLength={min} maxLength={max} required/>
      { text.length < 50
      ? <span className="rr-wq-caption">Minimum required characters left: {50 - text.length}</span>
      : <span className="rr-wq-caption">Minimum reached</span> }
    </>);
  } else {
    return  (
      <input type={type} value={text} onChange={change} placeholder={placeholder} minLength={min} maxLength={max} required={required}/>
    );
  }
};

export default DynamicTextInput;
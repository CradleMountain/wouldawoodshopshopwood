import React, { useState } from 'react';

const DynamicTextInput = ({state, type, placeholder = '', min = 1, max = 1000}) => {
  const [text, setText] = useState(state);

  const change = (e) => {
    setText(e.target.value);
  };

  if (type === 'textarea') {
    return (<>
      <textarea value={text} onChange={change} placeholder={placeholder} minLength={min} maxLength={max}/>
      <span>
        { text.length < 50
          ? "Minimum required characters left:" ${50 - text.length}
          : "Minimum reached"
        }
      </span>
    </>);
  } else {
    return  (
      <input type="text" value={text} onChange={change} placeholder={placeholder} minLength={min} maxLength={max}/>
    );
  }
};

export default DynamicTextInput;
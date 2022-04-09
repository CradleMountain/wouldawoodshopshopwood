import React, {useState, useEffect}  from 'react';

const AddA = (props) => {



  return (
    <div class='white-box'>
      Submit your Answer for {props.product_name} : {props.question_body}
    </div>
  )
}

export default AddA;
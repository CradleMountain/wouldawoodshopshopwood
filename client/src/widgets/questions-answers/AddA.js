import React, {useState, useEffect}  from 'react';

const AddA = (props) => {

  const handleChange = e => {

    e.preventDefault();
  }

  const handleSubmit = e => {
    e.preventDefault();

  }

  return (
    <div class='white-box'>
      Submit your Answer for {props.product_name} : {props.question_body}
      <br></br>
      <div>
      <form>
        <label>Your Answer (*mandatory)</label><br></br>
        <textarea onChange={handleChange} name='body' type='text'></textarea><br></br>
        <label>What is your nickname? (*mandatory)</label><br></br>
        <input onChange={handleChange} name='name' placeholder='Example: jack543!' type='text'></input>
        <label>Your email (*mandatory)</label><br></br>
        <textarea onChange={handleChange} name='email' placeholder='Why did you like the product or not?' type='text'></textarea>
        <input onSubmit={handleSubmit} type="submit" value="Submit"></input>
      </form>
      </div>
    </div>
  )
}

export default AddA;


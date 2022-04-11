import React, {useState, useEffect}  from 'react';

const AddQ = (props) => {

  const [QBody, setQBody] = useState('');
  const [QName, setQName] = useState('');
  const [QEmail, setQEmail] = useState('');

  const handleSubmit = e => {
    console.log(QBody, QName, QEmail)
    e.preventDefault();
    props.QPOST(QBody, QName, QEmail);
  }

  const handleChange = e => {
    if (e.target.name === 'body') {
      setQBody(e.target.value);
    }
    if (e.target.name === 'name') {
      setQName(e.target.value);
    }
    if (e.target.name === 'email') {
      setQEmail(e.target.value);
    }
    e.preventDefault();
  }

  return (
    <div class='white-box'>
      Ask Your Question About the {props.product_name}
      <br></br>
      <div>
        <form>
          <label>Your Question (*mandatory)</label><br></br>
          <textarea onChange={handleChange} name='body' type='text'></textarea><br></br>
          <label>What is your nickname? (*mandatory)</label>
          <br></br>
          <input onChange={handleChange} name='name' placeholder='Example: jackson11!' type='text'></input>
          <div>For privacy reasons, do not use your full name or email address</div>
          <label>Your email (*mandatory)</label><br></br>
          <textarea type='email' onChange={handleChange} name='email' placeholder='Why did you like the product or not?' type='text'></textarea>
          <div>For authentication reasons, you will not be emailed</div>
          <input onClick={handleSubmit} type="submit" value="Submit"></input>
        </form>
      </div>
      <br></br>
      <button onClick={() => props.exitModal()}>Exit</button>
    </div>
  );
}

export default AddQ;


import React, {useState, useEffect}  from 'react';
import axios from 'axios';

const AddQ = (props) => {

  const [QBody, setQBody] = useState('');
  const [QName, setQName] = useState('');
  const [QEmail, setQEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);


  const QPOST = (e) => {

    e.preventDefault();

    let errorMessage = 'You must enter the following:'

    if (!QBody) {
      errorMessage += '\nYour Question';
    }
    if (!QName) {
      errorMessage += '\nYour nickname';
    }
    if  (!validEmail || !QEmail) {
      errorMessage += '\nValid Email Address';
    }

    if (errorMessage.length > 30) {
      alert(errorMessage);
    } else {
      axios({
        method: 'POST',
        url: '/qa/questions',
        data: {
          body: QBody,
          name: QName,
          email: QEmail,
          product_id: props.product_id
        }
      })
      .then(res => {
        console.log('QPOST SUCCESS', res)
      })
      .catch(err => {
        console.log('FAIL QPOST', err)
      })
      props.exitModal();
    }
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
      setValidEmail(e.target.checkValidity());
    }
    e.preventDefault();
  }

  return (
    <div className='white-box'>
      Ask Your Question About the {props.product_name}
      <br></br>
      <div>
        <form>
          <label>*Your Question (mandatory)</label><br></br>
          <textarea onChange={handleChange} name='body' type='text' required></textarea><br></br>
          <label>*What is your nickname? (mandatory)</label>
          <br></br>
          <input onChange={handleChange} name='name' placeholder='Example: jackson11!' type='text' required></input>
          <div>For privacy reasons, do not use your full name or email address</div>
          <label>*Your email (mandatory)</label><br></br>
          <input onChange={handleChange} type='email' name='email' placeholder='Why did you like the product or not?' required></input>
          <span></span>
          <input onClick={QPOST} type="submit" value="Submit"></input>

        </form>
      </div>
      <br></br>
      <button onClick={() => props.exitModal()}>Exit</button>
    </div>
  );
}

export default AddQ;


// For authentication reasons, you will not be emailed

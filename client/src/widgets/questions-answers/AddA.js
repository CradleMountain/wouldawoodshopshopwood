import React, {useState, useEffect}  from 'react';
import axios from 'axios';


const AddA = (props) => {

  const [ABody, setABody] = useState('');
  const [AName, setAName] = useState('');
  const [AEmail, setAEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);


  const APOST = (e) => {

    e.preventDefault();

    let errorMessage = 'You must enter the following:'

    if (!ABody) {
      errorMessage += '\nYour Question';
    }
    if (!AName) {
      errorMessage += '\nYour nickname';
    }
    if  (!validEmail || !AEmail) {
      errorMessage += '\nValid Email Address';
    }



    if (errorMessage.length > 30) {
      alert(errorMessage);

    } else {
      console.log('APOST READY')
    }
    // } else {
    //   axios({
    //     method: 'POST',
    //     url: '/qa/questions',
    //     data: {
    //       body: QBody,
    //       name: QName,
    //       email: QEmail,
    //       product_id: props.product_id
    //     }
    //   })
    //   .then(res => {
    //     console.log('QPOST SUCCESS', res)
    //   })
    //   .catch(err => {
    //     console.log('FAIL QPOST', err)
    //   })
    //   props.exitModal();
    }

  const handleChange = e => {
    if (e.target.name === 'body') {
      setABody(e.target.value);
    }
    if (e.target.name === 'name') {
      setAName(e.target.value);
    }
    if (e.target.name === 'email') {
      setAEmail(e.target.value);
      setValidEmail(e.target.checkValidity());
    }
    e.preventDefault();
  }

  // const handleSubmit = e => {
  //   e.preventDefault();

  // }

  return (
    <div class='white-box'>
      Submit your Answer for {props.product_name} : {props.question_body}
      <br></br>
      <div>
        <form>
          <label>*Your Answer (mandatory)</label><br></br>
          <textarea onChange={handleChange} name='body' type='text'></textarea><br></br>
          <label>*What is your nickname? (mandatory)</label><br></br>
          <input onChange={handleChange} name='name' placeholder='Example: jack543!' type='text'></input>
          <div>For privacy reasons, do not use your full name or email address</div>
          <label>*Your email (mandatory)</label>
          <input onChange={handleChange} name='email' placeholder='Why did you like the product or not?' type='email' required></input>
          <div>For authentication reasons, you will not be emailed</div>
          <input onClick={APOST} type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  )
}

export default AddA;


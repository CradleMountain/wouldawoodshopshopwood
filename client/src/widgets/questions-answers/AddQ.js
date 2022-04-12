import React, {useState, useEffect}  from 'react';

const AddQ = (props) => {

  const [QBody, setQBody] = useState('');
  const [QName, setQName] = useState('');
  const [QEmail, setQEmail] = useState('');


  const QPOST = (e) => {

    e.preventDefault();

    // console.log('QEmai', QEmail)

    // console.log("E.target", e.target)

    // axios({
    //   method: 'POST',
    //   url: '/qa/questions',
    //   data: {
    //     body: body,
    //     name: name,
    //     email: email,
    //     product_id: props.currentProduct.id
    //   }
    // })
    // .then(res => {
    //   console.log('QPOST SUCCESS', res)
    // })
    // .catch(err => {
    //   console.log('FAIL QPOST', err)
    // })
  }

  // const handleSubmit = e => {
  //   console.log(QBody, QName, QEmail)
  //   e.preventDefault();
  //   props.QPOST(QBody, QName, QEmail);
  // }

  const handleChange = e => {
    if (e.target.name === 'body') {
      setQBody(e.target.value);
    }
    if (e.target.name === 'name') {
      setQName(e.target.value);
    }
    if (e.target.name === 'email') {
      setQEmail(e.target.value);
      console.log('validity', e.target.value.checkValidity())
      // console.log('event.target email', e.target)
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
          <textarea onChange={handleChange} type='email' name='email' placeholder='Why did you like the product or not?' required></textarea>
          <input onClick={QPOST} type="submit" value="Submit"></input>
        </form>
      </div>
      <br></br>
      <button onClick={() => props.exitModal()}>Exit</button>
    </div>
  );
}

export default AddQ;


{/* <div>For authentication reasons, you will not be emailed</div> */}

import React, {useState, useEffect}  from 'react';

const AddQ = (props) => {

  const [QBody, setQBody] = useState('');
  const [QName, setQName] = useState('');
  const [QEmail, setQEmail] = useState('');


  const handleSubmit = e => {

    axios({
      method: 'POST',
      url: '/qa/questions',
      params: {
        body: QBody,
        name: QName,
        email: QEmail,
        product_id: props.product_id
      }
    })
    .then(res => {
      console.log('ADDQ SUCCESS', res)
    })
    .catch(err => {
      console.log('FAIL AddQ', err)
    })

    e.preventDefault();

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
          <label>What is your nickname? (*mandatory)</label><br></br>
          <input onChange={handleChange} name='name' placeholder='Example: jackson11!' type='text'></input>
          <label>Your email (*mandatory)</label><br></br>
          <textarea onChange={handleChange} name='email' placeholder='Why did you like the product or not?' type='text'></textarea>
          <input onSubmit={handleSubmit} type="submit" value="Submit"></input>
        </form>
      </div>
      <br></br>
      <button onClick={() => props.exitModal()}>Exit</button>
    </div>

  );
}

export default AddQ;


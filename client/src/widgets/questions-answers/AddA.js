import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'regenerator-runtime/runtime';
import React, {useState, useEffect}  from 'react';
import axios from 'axios';


const AddA = (props) => {
  const [ABody, setABody] = useState('');
  const [AName, setAName] = useState('');
  const [AEmail, setAEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [APhotos, setPhotos] = useState([]);

  const uploader = (e) => {
    e.preventDefault();
    var url = prompt('Image URL:')
    var newPhotos = APhotos.slice();
    if (url) {
      newPhotos.push(url)
    }
    setPhotos(newPhotos)
  }

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
      axios({
        method: 'POST',
        url: `/qa/questions/${props.question_id}/answers`,
        data: {
          body: ABody,
          name: AName,
          email: AEmail,
          photos: APhotos
        }
      })
      .then(res => {
        console.log('APOST SUCCESS', res)
      })
      .catch(err => {
        console.log('FAIL APOST', err)
      })
    }
      props.exitModal();
  }

  const remove = (url) => {
    var newPhotos = APhotos.slice();
    newPhotos = newPhotos.filter(photo => photo !== url);
    setPhotos(newPhotos);
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

  const removePhoto = (i) => {
    for (var j = i; j < APhotos.length; j++) {
      APhotos[j] = APhotos[j + 1];
    }
    APhotos.pop();
    setPhotos(APhotos.slice());
  };

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
          <div className="rr-up-photos">
            {APhotos.length < 6 ? <button onClick={uploader}>Add photo</button> : null }
            <div className="rr-up-thumbs">
              {APhotos.map((url, i) => {
                return (<div key={i} className="rr-up-thumb">
                  <img src={url} onError={() => {remove(url); alert('Please enter a valid URL')}}/>
                  <div onClick={() => {removePhoto(i);}}>
                    <span className="rr-up-remove fa-layers fa-fw">
                      <FontAwesomeIcon icon="fa-solid fa-circle" className="icon-white"/>
                      <FontAwesomeIcon icon="fa-solid fa-circle-xmark" className="icon-red"/>
                    </span>
                  </div>
                </div>);
              })}
            </div>
          </div>
          <input onClick={APOST} type="submit" value="Submit"></input>
        </form>
      </div>
      <button onClick={() => props.exitModal()}>Exit</button>
    </div>
  )
}

export default AddA;


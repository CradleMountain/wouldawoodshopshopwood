import React, { useState } from 'react';
import axios from 'axios';

import ModalWrapper from '../../../components/modal.js';
import StarRating from '../../../components/starRating.js';
import DynamicTextInput from './dynamic.js';

const factorPhrases = {
  Size: ['None selected', 'A size too small', 'Half a size too small', 'Perfect', 'Half a size too big', 'A size too wide'],
  Width: ['None selected', 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['None selected', 'Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect'],
  Quality: ['None selected', 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['None selected', 'Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['None selected', 'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
};

const ReviewForm = ({show, product, factors}) => {
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [textInputs, setTextInputs] = useState({
    summary: '',
    body: '',
    nickname: '',
    email: ''
  });
  const [factorRating, setFactorRating] = useState(() => {
    var result = {};
    for (var i = 0; i < Object.keys(factorPhrases).length; i++) {
      result[Object.keys(factorPhrases)[i]] = 0;
    }
    return result;
  });
  const [valid, setValid] = useState({
    rating: false,
    recommend: false,
    summary: true,
    body: false,
    nickname: false,
    email: false
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(textInputs);
    console.log(valid);
  };

  const validate = (field, validated) => {
    valid[field] = validated;
    setValid(valid);
  };

  const clickStars = (e) => {
    var star = e.target.tagName === 'path' ? e.target.viewportElement : e.target;
    for (var i = 0; i < star.parentElement.children.length; i++) {
      if (star.parentElement.children[i] === star) {
        setRating(i + 1);
        validate('rating', true);
      }
    }
  };

  const rateFactor = (e) => {
    setFactorRating((state) => {
      var result = {};
      for (var key in state) {
        if (key === e.target.name) {
          result[key] = Number(e.target.value);
        } else {
          result[key] = state[key];
        }
      }
      return result;
    });
  };

  const setTextInput = (field, response) => {
    setTextInputs(() => {
      textInputs[field] = response;
      return textInputs;
    });
  };

  const required = (<span className="rr-write-required">*</span>)

  return (
    <ModalWrapper styles="rr-write-modal" backClick={()=>{}}>
      <h3>Write Your Review</h3>
      <h4>About the {product.name}</h4>
      <form>
        <div className="rr-write-question">
          <div className="rr-wq-header">Overall rating {required}</div>
          <div onClick={clickStars} className="rr-write-stars">
            <StarRating rating={rating}/>
            {rating > 0 ? <span> {(['Poor', 'Average', 'Fair', 'Good', 'Great'])[rating - 1]}</span> : null}
          </div>
          <input type="hidden" value={rating}/>
        </div>

        <div className="rr-write-question">
          <div className="rr-wq-header">Do you recommend this product? {required}</div>
          <label htmlFor="rec-yes"><input type="radio" name="recommended" value={true} onChange={(e) => {setRecommend(true); validate('recommend', e.target.checkValidity());}} id="rec-yes" checked={ recommend === null ? false : recommend } required/>Yes</label>
          <label htmlFor="rec-no"><input type="radio" name="recommended" value={false} onChange={(e) => {setRecommend(false); validate('recommend', e.target.checkValidity());}} id="rec-no" checked={ recommend === null ? false : !recommend }required/>No</label>
        </div>

        <div className="rr-write-question">
          <div className="rr-wq-header">Characteristics {required}</div>
          <div>
            {factors.map((factor) => {
              var radios = [];
              for (var i = 1; i < 6; i++) {
                if (factorRating[factor] === i) {
                  radios.push(<input type="radio" name={factor} value={i} key={i} onChange={rateFactor} checked={true} required/>)
                } else {
                  radios.push(<input type="radio" name={factor} value={i} key={i} onChange={rateFactor} checked={false} required/>);
                }
              }
              return (<div key={factor} className="rr-wq-factor">
                <div><span className="rr-wq-factor-label">{factor}:</span><span> {factorPhrases[factor][factorRating[factor]]}</span></div>
                <div>{radios}</div>
                <div className="rr-wq-factor-phrases">
                  <span>{factorPhrases[factor][1]}</span>
                  <span>{factorPhrases[factor][5]}</span>
                </div>
              </div>)
            })}
          </div>
        </div>

        <div className="rr-write-question">
          <div className="rr-wq-header">Review summary</div>
          <DynamicTextInput state={textInputs.summary} setState={(response) => { setTextInput('summary', response);}} validate={(valid) => validate('summary', valid)} placeholder="Example: Best purchase ever!" min="0" max="60" required={false}/>
        </div>

        <div className="rr-write-question">
          <div className="rr-wq-header">Review body {required}</div>
          <DynamicTextInput state={textInputs.body} setState={(response, valid) => setTextInput('body', response)} validate={(valid) => validate('body', valid)} type="textarea" min="50" max="1000" placeholder="Why did you like the product or not?"/>
        </div>

        <div className="rr-write-question">
          <div className="rr-wq-header">Upload your photos</div>
          <button>Add a photo</button>
        </div>

        <div className="rr-write-question">
          <div className="rr-wq-header">What is your nickname {required}</div>
          <DynamicTextInput state={textInputs.nickname} setState={(response) => setTextInput('nickname', response)} validate={(valid) => validate('nickname', valid)} placeholder="Example: jackson11!" max="60"/>
          <span>For privacy reasons, do not use your full name or email address</span>
        </div>

        <div className="rr-write-question">
          <div className="rr-wq-header">Your email {required}</div>
          <DynamicTextInput state={textInputs.email} setState={(response) => setTextInput('email', response)} validate={(valid) => validate('email', valid)} type="email" placeholder="Example: jackson11@email.com" max="60"/>
          <span>For authentication reasons, you will not be emailed</span>
        </div>

        <div>
          <button onClick={submit}>Submit review</button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default ReviewForm;
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
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [factorRating, setFactorRating] = useState(() => {
    var result = {};
    for (var i = 0; i < Object.keys(factorPhrases).length; i++) {
      result[Object.keys(factorPhrases)[i]] = 0;
    }
    return result;
  });

  const submit = (e) => {
    e.preventDefault();
  };

  const clickStars = (e) => {
    var star = e.target.tagName === 'path' ? e.target.viewportElement : e.target;
    for (var i = 0; i < star.parentElement.children.length; i++) {
      if (star.parentElement.children[i] === star) {
        setRating(i + 1);
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
          <label htmlFor="rec-yes"><input type="radio" name="recommended" value={true} id="rec-yes"/>Yes</label>
          <label htmlFor="rec-no"><input type="radio" name="recommended" value={false} id="rec-no"/>No</label>
        </div>

        <div className="rr-write-question">
          <div className="rr-wq-header">Characteristics {required}</div>
          <div>
            {factors.map((factor) => {
              var radios = [];
              for (var i = 1; i < 6; i++) {
                if (factorRating[factor] === i) {
                  radios.push(<input type="radio" name={factor} value={i} key={i} onChange={rateFactor} checked={true}/>)
                } else {
                  radios.push(<input type="radio" name={factor} value={i} key={i} onChange={rateFactor} checked={false}/>);
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
          <DynamicTextInput state={summary} placeholder="Example: Best purchase ever!" min="0" max="60"/>
          {/* <input type="text" value={summary} onChange={(e) => { setSummary(e.target.value); }} maxLength="60" placeholder="Example: Best purchase ever!"/> */}
        </div>

        <div className="rr-write-question">
          <div className="rr-wq-header">Review body {required}</div>
          <DynamicTextInput state={body} type="textarea" min="50" max="1000" placeholder="Why did you like the product or not?"/>
          {/* <textarea value={body} onChange={(e) => { setBody(e.target.value); }} minLength="50" maxLength="1000" placeholder="Why did you like the product or not?"/> */}
        </div>
      </form>
    </ModalWrapper>
  );
};

export default ReviewForm;
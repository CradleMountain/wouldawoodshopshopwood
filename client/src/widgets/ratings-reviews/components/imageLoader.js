import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'regenerator-runtime/runtime';

const ImageLoader = ({state, setState, validate}) => {
  const [photos, setPhotos] = useState(state);
  const valid = true;

  const addPhoto = async function (e) {
    e.preventDefault();

    let proxy = window.open('/upload', 'upload', 'popup=1,width=350,height=150,top=200px,left=500px');
    await new Promise((resolve, reject) => {
      window.addEventListener('close', resolve);
    });

    var url = proxy.window.response;
    if (url.length > 0) {
      photos.push(url);
      setPhotos(photos.slice());
      setState(photos);
    }
  };

  const removePhoto = (i) => {
    validate('photo-' + (i + 1), true);
    //var newPhotos = photos.slice();
    for (var j = i; j < photos.length; j++) {
      photos[j] = photos[j + 1];
    }
    photos.pop();
    setPhotos(photos.slice());
    setState(photos);
  };

  const invalidUrl = (i) => {
    validate('photo-' + i, false);
  };

  return (
    <div className="rr-up-photos">
      {photos.length < 6 ? <button onClick={addPhoto}>Add photo</button> : null }
      <div className="rr-up-thumbs">
        {photos.map((url, i) => {
          return (<div key={i} className="rr-up-thumb">
            <img src={url} onError={() => invalidUrl(i + 1)}/>
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
  );
};

export default ImageLoader;
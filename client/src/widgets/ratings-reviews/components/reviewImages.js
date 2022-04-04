import React, { useState } from 'react';

import ModalWrapper from '../../../components/modal.js';

const ReviewImages = ({ images }) => {
  const [modalView, setModalView] = useState(null);

  const enlargeImage = (e) => {
    setModalView(
      <ModalWrapper backClick={shrinkImage}><img src={e.target.src} className="rr-ri-modal"/></ModalWrapper>
    );
  };

  const shrinkImage = (e) => {
    setModalView(null);
  };

  var gallery = images.map((img) => {
    return (
      <img key={img.id} src={img.url} onClick={enlargeImage} />
    );
  });

  return (
    <>
      {modalView}
      <div className="rr-review-images">
        {gallery}
      </div>
    </>
  );
};

export default ReviewImages;
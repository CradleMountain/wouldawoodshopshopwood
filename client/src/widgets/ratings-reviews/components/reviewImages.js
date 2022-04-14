import React, { useState } from 'react';

import ModalWrapper from '../../../components/modal.js';
import Image from '../../../components/image.js';

const ReviewImages = ({ images }) => {
  const [modalView, setModalView] = useState(null);

  const enlargeImage = (e) => {
    setModalView(
      <ModalWrapper backClick={shrinkImage} styles="rr-ri-modal">
        <img src={e.target.src} alt="Expanded image"/>
      </ModalWrapper>
    );
  };

  const shrinkImage = (e) => {
    setModalView(null);
  };

  var gallery = images.map((img) => {
    return (
      <Image key={img.id} url={img.url} onClick={enlargeImage} alt="Image uploaded by reviewer"/>
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
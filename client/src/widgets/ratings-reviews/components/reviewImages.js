import React from 'react';

const ReviewImages = ({images}) => {
  const enlargeImage = (e) => {
    var url = e.target.src;
    // open modal view
  };

  var gallery = images.map((img) => {
    return (
      <img key={img.id} src={img.url} onClick={enlargeImage}/>
    );
  });

  return (
    <div className="rr-review-images">
      {gallery}
    </div>
  );
};

export default ReviewImages;
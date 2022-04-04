import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faStarHalfStroke as faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

// const Star = ({ fill, fraction }) => {
//   return (<i className={`icon fa-star ${fill} ${fraction}`}></i>)
// };

// const LayeredStar = ({ fraction }) => {
//   console.log('fraction:', fraction);
//   return (
//     <span className="fa-layers fa-fw">
//       <Star fill="fa-solid" fraction={fraction} />
//       <Star fill="fa-regular" fraction="four-fourths"/>
//     </span>
//   );
// };

// const Star = () => (
//   <FontAwesomeIcon icon={faStarSolid} />
// );

// const HalfStar = () => (
//   <FontAwesomeIcon icon={faStarHalf} />
// );

const OneFourthStar = styled(FontAwesomeIcon)`
  clip-path: polygon(40% 0%, 40% 100%, 0% 100%, 0% 0%);
`;

const HalfStar = styled(FontAwesomeIcon)`
  clip-path: polygon(50% 0%, 50% 100%, 0% 100%, 0% 0%);
`;

const ThreeFourthStar = styled(FontAwesomeIcon)`
  clip-path: polygon(60% 0%, 60% 100%, 0% 100%, 0% 0%);
`;

const LayeredStar = ({ fraction }) => {
  if (fraction === 0) {
    return <span className="fa-fw"><FontAwesomeIcon icon={faStarRegular} /></span>;
  } else if (fraction === 4) {
    return <span className="fa-fw"><FontAwesomeIcon icon={faStarSolid} /></span>;
  } else {
    if (fraction === 1) {
      var top = <OneFourthStar icon={faStarSolid} />
    } else if (fraction === 2) {
      var top = <HalfStar icon={faStarSolid}/>
    } else if (fraction === 3) {
      var top = <ThreeFourthStar icon={faStarSolid} />
    }
    console.log(fraction, top);
    return (
      <span className="fa-layers fa-fw">{top}<FontAwesomeIcon icon={faStarRegular} /></span>
    );
  }
}

// const StarRating = (props) => {
//   const [rating, setRating] = useState(props.rating);
//   console.log('Rating in comp: ', props.rating);
//   useEffect(() => {
//     if (rating !== props.rating) {
//       console.log("hey what gives?")
//       setRating(props.rating);
//     }
//   });

//   const composeStars = () => {
//     var stars = [];
//     for (var i = 1; i < 6; i++) {
//       if (props.rating >= i) {
//         stars.push(<span key={i}><i className="icon fa-solid fa-star"></i></span>);
//       } else if (props.rating < i && Math.floor(props.rating) === i - 1) {
//         var remainder = props.rating - i + 1;
//         var quarter = Math.round(remainder * 4);
//         console.log('Quarter: ', quarter);
//         if (quarter === 0) {
//           stars.push(<span key={i}><i className="icon fa-regular fa-star"></i></span>);
//         }
//         else if (quarter === 1) {
//           stars.push(<span className="fa-layers fa-fw" key={i}>
//             <Star fraction="three-fourths"/>
//             <i className="icon fa-regular fa-star"></i>
//           </span>);
//         } else if (quarter === 2) {
//           stars.push(<span key={i}><i className="icon fa-solid fa-star-half-stroke"></i></span>);
//         } else if (quarter === 3) {
//           stars.push(<span className="fa-layers fa-fw" key={i}>
//             <Star fraction="three-fourths"/>
//             <i className="icon fa-regular fa-star"></i>
//           </span>);
//         } else {
//           stars.push(<span key={i}><i className="icon fa-solid fa-star"></i></span>);
//         }
//       } else {
//         stars.push(<span key={i}><i className="icon fa-regular fa-star"></i></span>);
//       }
//     }
//     console.log('Starsssss:', stars);
//     return stars;
//   }
//   var stars = composeStars(rating);
//   console.log(stars);

//   return (<span className="star-rating">{stars}</span>);
// };

const StarRating = (props) => {
  const [rating, setRating] = useState(props.rating);
  console.log('Rating in comp: ', props.rating);
  // useEffect(() => {
  //   if (rating !== props.rating) {
  //     console.log("hey what gives?")
  //     setRating(props.rating);
  //   }
  // });

  const composeStars = () => {
    var stars = [];
    for (var i = 1; i < 6; i++) {
      if (props.rating >= i) {
        stars.push(<LayeredStar key={i} fraction={4} />);
      } else if (props.rating < i && Math.floor(props.rating) === i - 1) {
        var remainder = props.rating - i + 1;
        var quarter = Math.round(remainder * 4);
        console.log('Quarter: ', quarter);
        if (quarter === 0) {
          // stars.push(<Star key={i} icon={faStarRegular} />);
          stars.push(<LayeredStar key={i} fraction={0} />);
        }
        else if (quarter === 1) {
          stars.push(<LayeredStar key={i} fraction={1} />);
        } else if (quarter === 2) {
          stars.push(<LayeredStar key={i} fraction={2} />);
        } else if (quarter === 3) {
          stars.push(<LayeredStar key={i} fraction={3} />);
        } else {
          stars.push(<LayeredStar key={i} fraction={4} />);
        }
      } else {
        stars.push(<LayeredStar key={i} fraction={0} />);
      }
    }
    console.log('Starsssss:', stars);
    return stars;
  }

  // var composeStars = () => {
  //   var stars = [];
  //   for (var i = 1; i < 6; i++) {
  //     if (props.rating >= i) {
  //       stars[i - 1] = "four-fourths";
  //     } else if (props.rating < i && Math.floor(props.rating) === i - 1) {
  //       var remainder = props.rating - i + 1;
  //       var quarter = Math.round(remainder * 4);
  //       console.log('Quarter: ', quarter);
  //       if (quarter === 0) {
  //         stars[i - 1] = "zero-fourths";
  //       } else if (quarter === 1) {
  //         stars[i - 1] = "one-fourth";
  //       } else if (quarter === 2) {
  //         stars[i - 1] = "two-fourths";
  //       } else if (quarter === 3) {
  //         stars[i - 1] = "three-fourths";
  //       } else {
  //         stars[i - 1] = "four-fourths";
  //       }
  //     } else {
  //       stars[i - 1] = "zero-fourths";
  //     }
  //   }
  //   console.log('Starsssss:', stars);
  //   return stars;
  // };
  var stars = composeStars(rating);
  console.log(stars);

  return (<span className="star-rating">{stars}</span>);

  // return (
  //   <span className="star-rating">
  //     <LayeredStar key="1" fraction={stars[0]} />
  //     <LayeredStar key="2" fraction={stars[1]} />
  //     <LayeredStar key="3" fraction={stars[2]} />
  //     <LayeredStar key="4" fraction={stars[3]} />
  //     <LayeredStar key="5" fraction={stars[4]} />
  //   </span>
  // );

};

export default StarRating;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ModalWrapper from '../../../components/modal.js';

const Comparison = ({ close, product, related }) => {
  const features = {};
  for (var i = 0; i < product.features.length; i++) {
    var item = product.features[i];
    features[item.feature] = {
      product: item.value || true,
      related: null
    };
  }
  for (var i = 0; i < related.features.length; i++) {
    var item = related.features[i];
    if (features[item.feature] === undefined) {
      features[item.feature] = {
        product: null,
        related: item.value || true
      };
    } else {
      features[item.feature].related = item.value;
    }
  }

  var lines = [
    <div key="LH"></div>,<div key="MH" className="rp-compare-title">Comparison</div>,<div key="RH"></div>,
    <div key="LP" className="rp-compare-name">{product.name}</div>,
    <div key="MP"></div>,
    <div key="RP" className="rp-compare-name">{related.name}</div>
  ];
  for (var key in features) {
    var left = typeof features[key].product === 'boolean'
      ? <FontAwesomeIcon icon="fa-solid fa-check" />
      : features[key].product;
    var right = typeof features[key].related === 'boolean'
      ? <FontAwesomeIcon icon="fa-solid fa-check" />
      : features[key].related;
    lines.push(
      <div key={"L"+key}>{left}</div>,
      <div key={"M"+key} className="rp-compare-feat">{key}</div>,
      <div key={"R"+key}>{right}</div>
    );
  }

  return (
    <ModalWrapper backClick={() => { close(); }} styles="rp-compare-modal">
      <div className="rp-compare-table">{lines}</div>
    </ModalWrapper >
  );
};

export default Comparison;
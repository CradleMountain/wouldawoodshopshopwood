import React from 'react';

import ModalWrapper from '../../../components/modal.js';

const Comparison = ({close, product, related}) => {
  return (
    <ModalWrapper backClick={() => { close(); }} styles="rp-compare-modal">
      <div>

      </div>
    </ModalWrapper>
  );
};

export default Comparison;
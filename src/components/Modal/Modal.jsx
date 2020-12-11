import React from 'react';

import PropTypes from 'prop-types';

import './Modal.scss';

export function Modal({ active, handleModal, children }) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => handleModal(false)}>
      <div className={active ? 'modal__content active' : 'modal'} onClick={(e) => e.stopPropagation()} >
        {children}
      </div>
    </div>    
  );
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
}

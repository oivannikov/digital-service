import React from 'react';

// import PropTypes from 'prop-types';

import './Modal.scss';

export function Modal({ children }) {
  return (
    <div className="modal active">
      <div className="modal__content active">
        {children}
      </div>
    </div>
  );
}

// Modal.propTypes = {
//   active: PropTypes.bool.isRequired,
//   handleModal: PropTypes.func.isRequired,
// }

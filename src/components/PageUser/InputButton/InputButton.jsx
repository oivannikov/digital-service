import React, { useState } from 'react';

import './InputButton.scss';

export function InputButton() {
  const [value, setValue ] = useState('');
  const [clikedValue, setClikedValue] = useState('');

  function handleDisplayValue() {
    setClikedValue(value);
  }

  return (
    <div className="input-button">
        <button className="btn button" onClick={handleDisplayValue}>Display</button>

        <div>
          <input className="form__input" type="text" value={value} onChange={({ target }) => setValue(target.value)} />
          <input className="form__input" type="text" value={clikedValue} readOnly />       
        </div>
    </div>
  );
}
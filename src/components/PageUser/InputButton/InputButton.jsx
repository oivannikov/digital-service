import React, { useState } from 'react';

export function InputButton() {
  const [value, setValue ] = useState('');
  const [clikedValue, setClikedValue] = useState('');

  function handleDisplayValue() {
    setClikedValue(value);
    setValue('');
  }

  return (
    <>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <input type="text" value={clikedValue} />
      <button className="btn" onClick={handleDisplayValue}>Display</button>
    </>
  );
}
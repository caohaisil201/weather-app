import React, { useContext, useRef, useLayoutEffect } from 'react';
import { Context } from '../../store/context';
import './style.scss';

function Input() {
  const context = useContext(Context);
  const inputContext = context.input;
  const cityNameContext = context.cityName;
  const data = context.data;
  const inputRef = useRef();

  const handleChange = (e) => {
    inputContext[1](e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      cityNameContext[1](inputContext[0]);
      inputContext[1]('');
      inputRef.current.focus();
    }
  };

  useLayoutEffect(() => {
    if (data[0]?.error) {
      inputRef.current.placeholder = data[0]?.error;
    } else {
      inputRef.current.placeholder = 'Enter city...';
    }
  }, [data]);

  return (
    <div className="input">
      <input
        ref={inputRef}
        type="text"
        value={inputContext[0]}
        onChange={handleChange}
        onKeyDown={handleEnter}
        placeholder="Enter city..."
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default Input;

import React, { useState } from 'react';

const InputField = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Hello, {name}</h3>
    </div>
  );
};

export default InputField;
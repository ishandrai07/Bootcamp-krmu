import React, { useState } from 'react';

const PasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>Password Toggle</h2>
      <div className="password-row">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter Password"
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default PasswordToggle;
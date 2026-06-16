import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>{isOn ? 'Light ON 💡' : 'Light OFF 🌙'}</h2>

      <button onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
    </div>
  );
};

export default Toggle;
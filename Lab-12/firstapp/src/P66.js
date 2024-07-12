// EventHandlingComponent.js
import React from 'react';

function EventHandling() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default EventHandling;
import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    alert(`useEffect for ${counter}`);
    return () => {
      alert(`return for ${counter}`);
    };
  });
  // }, []);

  return (
    <div>
      <p>you clicked {counter} times</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Counter;

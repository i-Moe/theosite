import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = ({ onFinish }) => {
  useEffect(() => {
    if (onFinish) {
      setTimeout(() => {
        onFinish();
      }, 2000); // Adjust the delay as needed
    }
  }, [onFinish]);

  return <Confetti width={window.innerWidth} height={window.innerHeight} />;
};

export default ConfettiComponent;

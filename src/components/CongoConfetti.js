import React from 'react';
import Confetti from 'react-confetti';

const CongoConfetti = () => {
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      tweenDuration={5000}
    />
  )
}

export default CongoConfetti;
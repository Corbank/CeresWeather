import React from 'react';
import './AnimatedBackground.css';

function AnimatedBackground({ condition }) {
  // Simple animation based on condition (expand as needed)
  return (
    <div className={`animated-bg ${condition.toLowerCase().replace(/\s/g, '-')}`}></div>
  );
}

export default AnimatedBackground;

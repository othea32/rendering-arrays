import React from 'react';

const Score = ({ date, score }) => {
  return (
    <div className='score'>
      <p>Date: {date}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default Score;
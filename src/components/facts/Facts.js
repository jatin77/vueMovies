import React from 'react';

const Facts = () => {
  return (
    <div className='container facts'>
      <div className='facts-content'>
        <div className='content-facts-head'>
          <h1>Some Facts</h1>
        </div>
        <div className='content-facts-block'>
          <div className='facts-block'>
            <h1>Green Book</h1>
            <p>Top Picture</p>
          </div>
          <div className='facts-block'>
            <h1>Olivia Colman</h1>
            <p>Top Female Actor</p>
          </div>
          <div className='facts-block'>
            <h1>Rami Malek</h1>
            <p>Top Male Actor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;

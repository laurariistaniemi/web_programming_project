import React from 'react';
import backgroundimage from './pexels-lum3n-44775-351961.jpg'; 

//home page
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      { 
        <div className="flex-container">
          <div className="flex-child one">
            <div className="card border-secondary mb-3" >
              <div className="card-header">Welcome</div>
                  <div className="card-body">
                      <h4 className="card-title">A site for tracking your progress</h4>
                      <p className="card-text">This is primarily designed for tracking your thesis for example, you can surely use this for other projects too, but the features are made with a thesis in mind especially. Hopefully this is a useful tool for you!</p>
                      <img src={backgroundimage} alt="backgroundimage" height='600' width='600' />;
                      <p className='card-text'>Laura Riistaniemi, Web Programming 1 -2024</p>
                  </div>
              </div> 
          </div>
        </div>
      }
    </div>
  );
};

export default Home;
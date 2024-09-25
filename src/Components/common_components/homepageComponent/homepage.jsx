import React, { useState } from 'react';
import profile from '..//../..//assets/profile.svg'
import '../homepageComponent/homepage.css'


const HomePage = () => {
  return (
      <>
          <div class=" shadow-lg d-flex flex-row align-items-center">
              <div className='d-flex flex-row align-items-center container-fluid m-3'>
                  <div className=" flex-fill container-fluid ms-5">
                      <div className="navbar-brand" href="#">MindYourPrint</div>
                  </div>
                  <div className="flex-fill d-flex justify-content-end container-fluid me-1">
                      <div className="custom-border rounded-2 shadow-sm p-2"> <img className='icon p-.5' src={profile} alt='profile'/> Estimator</div>
                  </div>
              </div>
          </div>
      </>
  );
};

export default HomePage;

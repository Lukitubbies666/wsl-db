import React, { useState } from 'react';
import kofisvg from '../images/kofiicon.svg'


export const Footer = () => {
    return (
      <div className="bg-gray-900">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
            <p className="text-sm font-medium text-gray-500">
              All stats provided by :
              <br/>
              fbref, soccerway, uclabruins.com, and soccerpunter
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                target= "_blank"
                href="https://twitter.com/Belispoken"
                className="text-teal-accent-400 transition-colors duration-300 hover:text-gray-500"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 sm:h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              {/* <a
                target= "_blank"
                href="https://ko-fi.com/belispoken"
              >
                <img 
                  src={kofisvg}
                  className="h-2/5 w-2/5 ml-3 md:2/6 md:ml-1 sm:ml-1 sm:w-1/2 "                  
                />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Footer
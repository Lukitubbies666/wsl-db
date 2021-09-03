import React, { useState } from 'react';
import '../Home/Home.css';
import depan1 from '../../images/landing1.jpg'
import depan2 from '../../images/landing2.jpg'



export const Home = () => {
  const card="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:translate-y-1 hover:shadow-2xl"
  const imagecard="object-contain w-full xl:h-full w-full"

  return (
    <div 
    className=
    "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
{/* Setting Caption kanan       */}
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
{/* Tulisan Welcome*/}
        <h2 
        className=
        "max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none md:mb-6 group"
        >
          <span className="inline-block mb-1 sm:mb-4">
          Welcome to
            <br/>
          Women Super League Database
          </span>
{/* Garis ungu */}
          <div 
          className=
          "h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" 
          />
        </h2>
{/* Caption kanan         */}
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          Thanks for visiting my little project!
          I'm going to keep this page update!
        </p>
      </div>

{/* Content       */}
      <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2 sm:grid-cols-1">
        <a href="/clubs">
          <div className={card}>
            <img              
                className={imagecard}
                src={depan1}
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Player Stats
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Numbers collected and sorted by each player that perform in WSL this season.
              </p>
            </div>
          </div>
        </a>

        <a href="/clubs">
          <div className={card}>
            <img              
                className={imagecard}
                src={depan2}
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Create your Starting XI
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                {/* Do you have an idea for your WSL Team of The Season? Or maybe just
                want to messing around with your fantasy starting XI? Go ahead and do it! */}
                (Coming soon)
              </p>
            </div>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Home
import React, { useState } from 'react';
import Arsenal from '../images/logo/arsenal.png'
import Villa from '../images/logo/astonvilla.png'
import Birmingham from '../images/logo/birmingham.png'
import Brighton from '../images/logo/brighton.png'
import Chelsea from '../images/logo/chelsea.png'
import Everton from '../images/logo/everton.png'
import Leicester from '../images/logo/leicester.png'
import ManCity from '../images/logo/mancity.png'
import ManUtd from '../images/logo/manutd.png'
import Reading from '../images/logo/reading.png'
import Spurs from '../images/logo/tottenham.png'
import WestHam from '../images/logo/westham.png'
import Meadow from '../images/stadium/meadowpark.png'
import Bescot from '../images/stadium/bescot.jpg'
import StAndrews from '../images/stadium/StAndrews.jpg'
import Broadfield from '../images/stadium/pplpension.jpg'
import Farley from '../images/stadium/farley way.webp'
import Kingsmeadow from '../images/stadium/kingsmeadow.jpg'
import Walton from '../images/stadium/walton.jpg'
import Academy from '../images/stadium/academycity.jfif'
import LSV from '../images/stadium/lsv.jpg'
import Madejski from '../images/stadium/madejski.jfif'
import Hive from '../images/stadium/thehive.jpg'
import Victoria from '../images/stadium/victoria.jpg'

const containerpage="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
const containerclubs="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3"
const placeholderarsenal="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-red-accent-700"
const placeholderastonvilla="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-red-maroon"
const placeholderbirmingham="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-blue-700"
const placeholderbrighton="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-blue-accent-700"
const placeholderchelsea="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-blue-900"
const placeholdereverton="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-indigo-800"
const placeholderleicester="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-indigo-700"
const placeholdermancity="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-light-blue-300"
const placeholdermanutd="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-red-700"
const placeholderreading="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-blue-800"
const placeholderspurs="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-gray-100"
const placeholderwestham="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2 bg-red-claret"



const stadiumobject="object-cover w-full h-48 object-center"
const stadiumplaceholder="flex flex-col h-full"
const crestclubplaceholder="rounded-full bg-white border-solid border-white border-2 -mt-8 h-28 w-28 object-contain"
const crestclubmiddle="flex justify-center -mt-9"

const spacetitle="p-2"
const texttitleputih="mb-2 font-semibold leading-5 text-xl text-center text-gray-50"
const textsubtitleputih="text-sm text-gray-50 text-center"
const texttitlepurple="mb-2 font-semibold leading-5 text-xl text-blue-gray-800 text-center"
const texttitlenavy="mb-2 font-semibold leading-5 text-xl text-center text-blue-gray-800"
const textsubtitlenavy="text-sm text-gray-50 text-center text-blue-gray-900"
const textsubtitlepurple="text-sm text-center text-blue-gray-700"
const texttitlelightblue="mb-2 font-semibold leading-5 text-xl text-cyan-200 text-center"
const textsubtitlelightblue="text-sm text-center text-cyan-300"

const posisitombol="text-center items-center"
const tombolhome="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"

export const Clubs = () => {
    return (
      <div className={containerpage}>
          <div className={containerclubs}>

{/* Arsenal*/}
            <a
            href="/clubs/arsenal"
            className={placeholderarsenal}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={Meadow}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={Arsenal}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitleputih}>
                      Arsenal
                    </h6>
                    <p className={textsubtitleputih}>
                      Meadow Park
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* Aston Villa */}
            <a
            href="/clubs/astonvilla"
            className={placeholderastonvilla}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={Bescot}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={Villa}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitleputih}>
                      Aston Villa
                    </h6>
                    <p className={textsubtitleputih}>
                      Bescot Stadium
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* Birmingham */}
            <a
            href="/clubs/birmingham"
            className={placeholderbirmingham}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={StAndrews}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={Birmingham}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitleputih}>
                      Birmingham City
                    </h6>
                    <p className={textsubtitleputih}>
                      St Andrew's
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* Brighton */}
            <a
            href="/clubs/brighton"
            className={placeholderbrighton}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={Broadfield}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={Brighton}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitleputih}>
                      Brighton & Hove Albion
                    </h6>
                    <p className={textsubtitleputih}>
                      Broadfield Stadium
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* Chelsea */}
            <a
            href="/clubs/chelsea"
            className={placeholderchelsea}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={Kingsmeadow}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={Chelsea}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitleputih}>
                      Chelsea
                    </h6>
                    <p className={textsubtitleputih}>
                      Kingsmeadow
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* Everton */}
            <a
            href="/clubs/everton"
            className={placeholdereverton}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={Walton}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={Everton}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitleputih}>
                      Everton
                    </h6>
                    <p className={textsubtitleputih}>
                      Walton Hall Park
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* Leicester */}
            <a
            href="/clubs/leicester"
            className={placeholderleicester}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={Farley}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={Leicester}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitleputih}>
                      Leicester City
                    </h6>
                    <p className={textsubtitleputih}>
                      Farley Way Stadium
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* Manchester City */}
            <a
            href="/clubs/mancity"
            className={placeholdermancity}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={Academy}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={ManCity}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitlepurple}>
                      Manchester City
                    </h6>
                    <p className={textsubtitlepurple}>
                      Academy Stadium
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* Manchester United */}
            <a
            href="/clubs/manutd"
            className={placeholdermanutd}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={LSV}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={ManUtd}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitleputih}>
                      Manchester United
                    </h6>
                    <p className={textsubtitleputih}>
                      Leigh Sports Village
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* Reading */}
            <a
            href="/clubs/reading"
            className={placeholderreading}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={Madejski}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={Reading}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitleputih}>
                      Reading
                    </h6>
                    <p className={textsubtitleputih}>
                      Madejski Stadium
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* Spurs */}
            <a
            href="/clubs/tottenham"
            className={placeholderspurs}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={Hive}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={Spurs}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitlenavy}>
                      Tottenham Hotspur
                    </h6>
                    <p className={textsubtitlenavy}>
                      The Hive Stadium
                    </p>
                  </div>
                </div>
              </div>
            </a>
{/* West Ham */}
            <a
            href="/clubs/westham"
            className={placeholderwestham}
            >
              <div className={stadiumplaceholder}>
                <img
                  src={Victoria}
                  className={stadiumobject}
                  alt=""
                />
                    <div className={crestclubmiddle}>
                      <img 
                      className={crestclubplaceholder}
                      src={WestHam}
                      alt=""
                      />
                    </div>
                <div>
                  <div className={spacetitle}>
                    <h6 className={texttitlelightblue}>
                      West Ham United
                    </h6>
                    <p className={textsubtitlelightblue}>
                      Victoria Road
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

{/* Tombol Home */}
          <div className={posisitombol}>
            <a
              href="/"
              className={tombolhome}
            >
              Home
            </a>
          </div>
        </div>
      );
    };

export default Clubs
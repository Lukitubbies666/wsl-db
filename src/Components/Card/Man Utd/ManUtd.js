import React, { useState } from "react";
import { FlagIcon } from "react-flag-kit";

export default function ManUtd ({ player }) {

  const [showModal, setShowModal] = useState(false);

    const num1 = player.caps
    const num2 = player.starts
    const bench = num1 - num2

    const containercard = "relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
    const card="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:translate-y-1 hover:shadow-2xl"
    const cardselectednotvalid="focus:outline-none"
    const imagecard="object-contain w-full xl:h-full w-full"

    // BEDA TIAP KLUB
    const placeholder="flex items-center justify-between px-2 py-2 bg-red-700"
    const playernumber="text-gray-200 font-medium text-tiny text-gray-50 sm:text-sm"
    const playername="text-gray-200 font-bold text-tiny text-gray-50 md:text-base sm:text-sm"
  
    // MODALS
    const layoutcontent="flex flex-col justify-between p-8  border rounded shadow-sm sm:pr-8"
    const tombolclose="text-lg font-bold focus:outline-none"
  
    const positionpopupmodal="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    const popupmodal="grid max-w-md bg-white gap-10 row-gap-5 sm:row-gap-10 lg:grid-cols-1 sm:mx-auto"
    const kolombagianatas="flex flex-wrap-reverse items-center justify-between md:justify-evenly md:justify-start border-b mb-2 px-8"
    const textfirstname="text-base font-bold tracking-wider sm:text-xl md:text-2xl "
    const textlastname=" font-extrabold uppercase lg:text-3xl sm:text-xl md:text-2xl" 
    const lingkaranfoto="flex items-center justify-center w-20 h-20 rounded-full bg-white sm:pb-4 lg:pb-4 md:pb-4"
    const gambar="rounded-full border-solid border-white object-contain"
  
    const kolomstatsgede="grid grid-cols-4 row-gap-8"
    const textcenter="text-center"
    const angkastatsgede="text-1xl font-bold text-deep-purple-accent-400"
    const kategoristatsgede="font-bold sm:text-sm lg:text-tiny md:text-tiny"
  
    const kolomstatskecil="grid grid-cols-2 rounded lg:col-span-3"
    const kolomstatskecilkirikanan="flex flex-col p-2"
    const textkategoristatskecil="text-base font-semibold text-gray-800 lg:text-tiny md:text-tiny sm:text-xs"
    const textstatskecil="text-base font-medium text-gray-600 lg:text-tiny md:text-tiny sm:text-xs"
    const fbrefbutton="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
     
  return (
    <div>
      <button 
      className={cardselectednotvalid}
      onClick={() => setShowModal(true)}
      >
        <div className={card}>
          <img              
              alt={player.firstname}
              className={imagecard}
              src={
                "/assets/player/man utd" +
                "/" +
                player.image
              }
          />
          <div className={placeholder}>
            <h1 className={playernumber}>{player.number}</h1>
            <h1 className={playername}>{player.firstname} {player.lastname}</h1>
            <FlagIcon code={player.country} size={16} />
          </div>
        </div>
      </button>

      {showModal ? (
          <>
            <div className={positionpopupmodal}>
              <div className={popupmodal}>
                {/*close button*/}
                <div className={layoutcontent}>
                  <div className="text-right">
                    <button 
                      className={tombolclose}
                      onClick={() => setShowModal(false)}
                      >
                    X
                    </button>
                  </div>
                {/*header*/}
                  <div className="mb-6">
                    <div className={kolombagianatas}>

                      <div>
                        <p className={textfirstname}>
                          {player.firstname}
                        </p>
                        <p className={textlastname}>
                          {player.lastname}
                        </p>
                      </div>

                      <div className={lingkaranfoto}>
                        <img
                          className={gambar}             
                          src={
                            "/assets/player/man utd" +
                            "/" +
                            player.image
                          }
                        />
                      </div>
                    </div>
              {/*big stats column*/}
              <div className={kolomstatsgede}>
                    <div className={textcenter}>
                      <h6 className={angkastatsgede}>
                        {player.goals}
                      </h6>
                      <p className={kategoristatsgede}>Goals</p>
                    </div>

                    <div className={textcenter}>
                      <h6 className={angkastatsgede}>
                        {player.assists}
                      </h6>
                      <p className={kategoristatsgede}>Assists</p>
                    </div>

                    <div className={textcenter}>
                      <h6 className={angkastatsgede}>
                        {player.starts} ({bench})
                      </h6>
                      <p className={kategoristatsgede}>Appearances</p>
                    </div>

                    <div className={textcenter}>
                      <h6 className={angkastatsgede}>
                        {player.minutes}
                      </h6>
                      <p className={kategoristatsgede}>Minutes Played</p>
                    </div>
                  </div>
                            
              {/*small stats column*/}
                  <div className={kolomstatskecil}>
                    <div className={kolomstatskecilkirikanan}>
                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Penalty Scored:
                        </p>
                        <p className={textstatskecil}>
                            {player.pkgoal}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Shots:
                        </p>
                        <p className={textstatskecil}>
                            {player.shots}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Shots on Target:
                        </p>
                        <p className={textstatskecil}>
                            {player.shotsontgt}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            xG:
                        </p>
                        <p className={textstatskecil}>
                            {player.xG}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Passes Completed:
                        </p>
                        <p className={textstatskecil}>
                            {player.passcomp}%
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Key Passes:
                        </p>
                        <p className={textstatskecil}>
                            {player.keypass}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            xA:
                        </p>
                        <p className={textstatskecil}>
                            {player.xA}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Dribble Success:
                        </p>
                        <p className={textstatskecil}>
                            {player.dribble}%
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Shot-Creating / 90:
                        </p>
                        <p className={textstatskecil}>
                            {player.SCA} / {player.SCA90}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Goal-Creating / 90:
                        </p>
                        <p className={textstatskecil}>
                            {player.GCA} / {player.GCA90}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Tackles:
                        </p>
                        <p className={textstatskecil}>
                            {player.tackles}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Tackles on Dribbling:
                        </p>
                        <p className={textstatskecil}>
                            {player.dribbletkl}
                        </p>
                      </div>
                    </div>

                    <div className={kolomstatskecilkirikanan}>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Success Pressure:
                        </p>
                        <p className={textstatskecil}>
                            {player.successpress}%
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Blocks:
                        </p>
                        <p className={textstatskecil}>
                            {player.blocks}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Intercepts:
                        </p>
                        <p className={textstatskecil}>
                            {player.intercepts}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Clearances:
                        </p>
                        <p className={textstatskecil}>
                            {player.clearances}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Aerials Duel Won:
                        </p>
                        <p className={textstatskecil}>
                            {player.aerial}%
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Own Goals:
                        </p>
                        <p className={textstatskecil}>
                            {player.owngoals}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Offsides:
                        </p>
                        <p className={textstatskecil}>
                            {player.offside}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Fouls:
                        </p>
                        <p className={textstatskecil}>
                            {player.fouls}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Yellow Cards:
                        </p>
                        <p className={textstatskecil}>
                            {player.yellowcard}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Red Cards:
                        </p>
                        <p className={textstatskecil}>
                            {player.redcard}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Dribbled Past:
                        </p>
                        <p className={textstatskecil}>
                            {player.dribblepast}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <p className={textkategoristatskecil}>
                            Errors:
                        </p>
                        <p className={textstatskecil}>
                            {player.errors}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              {/*footer*/}
                  <div>
                    <a
                      href={player.link}
                      target= "_blank"
                      className={fbrefbutton}
                    >
                      More stats
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"/>
          </>
        ) : null}      
    </div>
  );
};
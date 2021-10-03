import React, { Component } from 'react';
import { API_URL } from '../../utils/constant'
import axios from 'axios'
import PlayersManUtd from '../../Components/Card/Man Utd/ManUtd'
import PlayersManUtdGK from '../../Components/Card/Man Utd/ManUtdGK'


export default class ManUtd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playersGK: [],
      playersDF: [],
      playersMF: [],
      playersFW: []
    }
  }

  Styling = {
		containerpage: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
		title: "font-sans text-4xl font-bold leading-tight text-gray-900 sm:text-4xl sm:text-center",
    containertitle:"max-w-xl mb-2 pb-8 sm:mx-auto",
		subTitle: "max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none md:mb-6 group",
    containersubtitle: "flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8",
    playershown: "grid gap-7 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-4 sm:grid-cols-2"
	};

  componentDidMount() {
      // GOALKEEPER
      axios.get(API_URL+"ManUtd?position.id=1&&_sort=number&_order=asc")
      .then(res => {
      const playersGK = res.data;
      this.setState({ playersGK });
    })
      .catch(error =>{
        console.log("no data", error);
      })

      // DEFENDER
      axios.get(API_URL+"ManUtd?position.id=2&&_sort=number&_order=asc")
      .then(res => {
      const playersDF = res.data;
      this.setState({ playersDF });
    })
      .catch(error =>{
        console.log("no data", error);
      })

      // MIDFIELDER
      axios.get(API_URL+"ManUtd?position.id=3&&_sort=number&_order=asc")
      .then(res => {
      const playersMF = res.data;
      this.setState({ playersMF });
    })
      .catch(error =>{
        console.log("no data", error);
      })

      // FORWARD
      axios.get(API_URL+"ManUtd?position.id=4&&_sort=number&_order=asc")
      .then(res => {
      const playersFW = res.data;
      this.setState({ playersFW });
    })
      .catch(error =>{
        console.log("no data", error);
      })
  }


  render() {
    const { playersGK, playersDF, playersMF, playersFW } = this.state
    return (
      <div className={this.Styling.containerpage}>
        <div className={this.Styling.containertitle}>        
          <h2 className={this.Styling.title}>
            Manchester United
          </h2>
        </div>
        
        <div className={this.Styling.containersubtitle}>
          <h4 className={this.Styling.subTitle}>
              Goalkeepers
          </h4>
        </div>

        <div className={this.Styling.playershown}>
            {playersGK && playersGK.map((player) => (
              <PlayersManUtdGK
                key={player.id}
                player={player}
              />
            ))}
        </div>

        <div className={this.Styling.containersubtitle}>
          <h4 className={this.Styling.subTitle}>
              Defenders
          </h4>
        </div>

        <div className={this.Styling.playershown}>
            {playersDF && playersDF.map((player) => (
              <PlayersManUtd
                key={player.id}
                player={player}
              />
            ))}
        </div>

        <div className={this.Styling.containersubtitle}>
          <h4 className={this.Styling.subTitle}>
              Midfielders
          </h4>
        </div>
        
        <div className={this.Styling.playershown}>
            {playersMF && playersMF.map((player) => (
              <PlayersManUtd
                key={player.id}
                player={player}
              />
            ))}
        </div>

        <div className={this.Styling.containersubtitle}>
          <h4 className={this.Styling.subTitle}>
              Forwards
          </h4>
        </div>
        
        <div className={this.Styling.playershown}>
            {playersFW && playersFW.map((player) => (
              <PlayersManUtd
                key={player.id}
                player={player}
              />
            ))}    
        </div>
      </div>
    )
  }
}
import Routes from './Routes'
import './App.css'


function App() {
  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;


// import './App.css';
// import { BrowserRouter, Switch, Route} from 'react-router-dom'
// import Home from './Components/Home/Home';
// import Clubs from './Pages/Clubs'; 

// import Arsenal from './Pages/Team/Arsenal';
// import ManCity from './Pages/Team/ManCity';
// import Chelsea from './Pages/Team/Chelsea';
// import AstonVilla from './Pages/Team/AstonVilla';
// import Spurs from './Pages/Team/Spurs';
// import Brighton from './Pages/Team/Brighton';
// import ManUtd from './Pages/Team/ManUtd';
// import Birmingham from './Pages/Team/Birmingham';
// import Everton from './Pages/Team/Everton';
// import WestHam from './Pages/Team/WestHam';
// import Reading from './Pages/Team/Reading';
// import Leicester from './Pages/Team/Leicester';

// import Footer from './Components/Footer'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" exact component={Home}/>
//         <Route path="/clubs" exact component={Clubs} />
//         <Route path="/clubs/arsenal" exact component={Arsenal} /> 
//         <Route path="/clubs/mancity" exact component={ManCity} />
//         <Route path="/clubs/chelsea" exact component={Chelsea} />
//         <Route path="/clubs/astonvilla" exact component={AstonVilla} />
//         <Route path="/clubs/tottenham" exact component={Spurs} />
//         <Route path="/clubs/brighton" exact component={Brighton} />
//         <Route path="/clubs/manutd" exact component={ManUtd} />
//         <Route path="/clubs/birmingham" exact component={Birmingham} />
//         <Route path="/clubs/everton" exact component={Everton} />
//         <Route path="/clubs/leicester" exact component={Leicester} />
//         <Route path="/clubs/westham" exact component={WestHam} />
//         <Route path="/clubs/reading" exact component={Reading} />
//       </Switch>
//         <Footer/>
//     </BrowserRouter>
//   );
// }

// export default App;

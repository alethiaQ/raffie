import raffle from './raffletickets.png';
import './App.css';
import LandingPage from './containers/LandingPage';

function App() {
  return (
    <div className="App">
      {/* <div className="App-body">
        <header id="enter-header" className='main-header'> <h1>Enter in?</h1> </header>
        <img src={raffle} className="App-logo" alt="logo" />
        
      </div> */}
      <LandingPage />
    </div>
  );
}

export default App;

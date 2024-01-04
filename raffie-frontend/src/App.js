import raffie from './raffie36pt.jpeg';
import funWayTo from './funWayToText.png'
import './App.css';
import LandingPage from './containers/LandingPage';

function App() {
  return (
    <div className="App">
      <img src={funWayTo} className='fun-text'/>
      <img src={raffie} className='raffie-logo' />
      <LandingPage />
    </div>
  );
}

export default App;

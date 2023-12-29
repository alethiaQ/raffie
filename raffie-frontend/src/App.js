import raffie from './raffie36pt.jpeg';
import './App.css';
import LandingPage from './containers/LandingPage';

function App() {
  return (
    <div className="App">
      <img src={raffie} className='raffie-logo'/>
      <LandingPage />
    </div>
  );
}

export default App;

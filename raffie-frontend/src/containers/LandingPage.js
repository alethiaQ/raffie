import raffle from '../raffletickets.png';
import { useState } from 'react';
import MainPage from './MainPage';
function LandingPage() {
    const [showTicket, setTicket] = useState(true);
    function handleClick() {
        setTicket(false);
    }
    return (
        <div className="App-body">
            {showTicket === true ? (
                <header id="enter-header" className='main-header'> <h1>Enter in?</h1>
                      <img src={raffle} className="App-logo" alt="logo" onClick={handleClick} />
                </header>
                ) : (
                <MainPage />
            )}
      </div>
    )
}
export default LandingPage;
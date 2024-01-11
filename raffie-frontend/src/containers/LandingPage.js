import raffle from '../raffletickets.png';
import { useState } from 'react';
import MainPage from './MainPage';
import enterinTransparent from '../test.jpeg'
function LandingPage() {
    const [showTicket, setTicket] = useState(true);
    function handleClick() {
        setTicket(false);
    }
    return (
        <div className="App-body">
            
            {showTicket === true ? (
                <header id="enter-header" className='main-header'> 
                    {/* <img src={enterinTransparent} className='enter-text'/> */}
                    <img src={raffle} className="App-logo" alt="logo" onClick={handleClick} />
                </header>
                ) : (
                <MainPage />
            )}
      </div>
    )
}
export default LandingPage;
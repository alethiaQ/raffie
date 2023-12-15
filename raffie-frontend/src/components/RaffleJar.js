import raffle from "../raffletickets.png";
import IconButton from '@mui/material/IconButton';
import { Refresh } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {resetJar} from '../store/raffleJarSlice'
function RaffleJar() {
    const dispatch = useDispatch();
    function handleReset() {
        dispatch(resetJar());
    }
    return (
        <div>
            <IconButton size="small" onClick={event => handleReset()}>
                    <Refresh/>
                </IconButton> 
            <img src={raffle} className="small-raffle-ticket" />
        </div>
    )
}

export default RaffleJar
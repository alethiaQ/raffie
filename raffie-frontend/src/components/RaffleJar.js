import raffle from "../raffletickets.png";
import IconButton from '@mui/material/IconButton';
import { Refresh, CheckBox } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { pickEntry, resetJar } from '../store/raffleJarSlice'
import { useSelector} from 'react-redux'
function RaffleJar() {
    const dispatch = useDispatch();
    const chosenEntry = useSelector(state => state.raffle.chosenEntry)
    function handleReset() {
        dispatch(resetJar());
    }
    function handleEntrySelection() {
        dispatch(pickEntry())
    }
    return (
        <div>
            <IconButton size="small" onClick={event => handleReset()}>
                    <Refresh/>
            </IconButton> 
            <IconButton size="small" onClick={event => handleEntrySelection()}>
                <CheckBox />
            </IconButton>
            <img src={raffle} className="small-raffle-ticket" />
            <p>
            {chosenEntry}
            </p> 
        </div>
    )
}

export default RaffleJar
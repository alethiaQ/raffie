import raffle from "../raffletickets.png"
import EntryForm from "../components/EntryForm"
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Refresh} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux'
function MainPage() {
    const entries = useSelector(state => state.raffle.entries)
    return (
        <Grid container spacing={4} direction="row" >
        <Grid item xs={6}>
            <EntryForm />
                {entries.map(entry => {
                    return <ul>{entry}</ul>
            })}
        </Grid>
            <Grid item xs={6}>  
                <IconButton size="small">
                    <Refresh/>
                </IconButton> 
            <img src={raffle} className="small-raffle-ticket" />
        </Grid>
    </Grid>
    ) 
       
    
}
export default MainPage;
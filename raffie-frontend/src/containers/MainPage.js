import EntryForm from "../components/EntryForm"
import Grid from '@mui/material/Grid';
import { useSelector} from 'react-redux'
import RaffleJar from "../components/RaffleJar";
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
            <RaffleJar />
        </Grid>
    </Grid>
    ) 
       
    
}
export default MainPage;
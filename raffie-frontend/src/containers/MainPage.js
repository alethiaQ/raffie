import EntryForm from "../components/EntryForm";
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux';
import RaffleJar from "../components/RaffleJar";
import SettingsPanel from '../components/SettingsPanel';
function MainPage() {
   
    const entries = useSelector(state => state.raffle.entries)
   
    return ( 
        <Grid container spacing={4} direction="row" className="no-background">
            <Grid item xs={6}>
                <SettingsPanel />
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
export default MainPage
import raffle from "../raffletickets.png"
import EntryForm from "../components/EntryForm"
import Grid from '@mui/material/Grid';
function MainPage() {

    return (
        <Grid container spacing={4} direction="row" >
        <Grid item xs={6}>
            <EntryForm />
        </Grid>
        <Grid item xs={6}>
            <img src={raffle} className="small-raffle-ticket" />
        </Grid>
    </Grid>
    ) 
       
    
}
export default MainPage;
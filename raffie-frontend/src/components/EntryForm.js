import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addEntry } from '../store/raffleJarSlice';
function EntryForm() {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    function handleFirstName(name, value) {
        console.log(value)
        setFirstName(value)
        console.log(firstName)
    }
    function handleLastName(name, value) {
        setLastName(value)
        console.log(lastName)
    }
    function handleSubmit() {
        console.log(firstName + lastName)
        dispatch(addEntry(`${firstName + ' ' + lastName}`))
    }
    return (
        <div>
            <TextField
                required
                id="filled-multiline-flexible"
                label="First Name"
                multiline
                maxRows={2}
                variant="filled"
                name="firstName"
                onChange={event => handleFirstName(event.target.name, event.target.value)}
            />
            <TextField
                required
                id="filled-multiline-flexible"
                label="Last Name"
                multiline
                maxRows={2}
                variant="filled"
                onChange={event => handleLastName(event.target.name, event.target.value)}
            />

            <Button size="medium" onClick={event => handleSubmit()} type='button' variant="contained" color="secondary"    style={{justifyContent: "center"}}>
                submit
            </Button>
        </div>
    )
}

export default EntryForm;
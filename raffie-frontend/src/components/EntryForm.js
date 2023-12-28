import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addEntry } from '../store/raffleJarSlice';

function EntryForm() {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    
    function handleFirstName(name, value) {
        setFirstName(value)
    }
    function handleLastName(name, value) {
        setLastName(value)
    }
    function handleSubmit() {
        dispatch(addEntry(`${firstName + ' ' + lastName}`))
    }
    return (
        <div>
            <header>
                <h2>Add Contestants</h2>
            </header>
            <TextField
                required
                color="secondary"
                label="First Name"
                variant="outlined"
                name="firstName"
                onChange={event => handleFirstName(event.target.name, event.target.value)}
            />
            <TextField
                color="secondary"
                required
                label="Last Name"
                variant="outlined"
                onChange={event => handleLastName(event.target.name, event.target.value)}
            />
            <IconButton onClick={event => handleSubmit()} type='button' color="secondary" aria-label='submit entry'>
                <AddCircle className='input-buttons' />
            </IconButton>
        </div>
    )
}

export default EntryForm;
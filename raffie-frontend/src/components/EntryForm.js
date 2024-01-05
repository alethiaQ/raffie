
import { IconButton, TextField} from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addEntry } from '../store/raffleJarSlice';
import { useSelector } from 'react-redux';

function EntryForm() {
    const dispatch = useDispatch();
    const formSettings = useSelector(state => state.raffle.entryType);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    
    function handleFirstName(value) {
        setFirstName(value)
    }
    function handleLastName(value) {
        setLastName(value)
    }
    function handleEmail(value) {
        setEmail(value)
    }
    function handleSubmit() {
        if (formSettings === "Names") {
            dispatch(addEntry(`${firstName + ' ' + lastName}`))
        } else {
            dispatch(addEntry(email))
        }
        
    }
    return (
        <div>
            <header>
                <h1>Add Contestants</h1>
            </header>
            {formSettings === "Names" ? ( <span>
                <TextField
                required
                color="secondary"
                label="First Name"
                variant="outlined"
                name="firstName"
                onChange={event => handleFirstName(event.target.value)}
            />
            <TextField
                color="secondary"
                required
                label="Last Name"
                variant="outlined"
                onChange={event => handleLastName(event.target.value)}
            />
            </span>
            ) : (
                    <span>
                        <TextField
                            color="secondary"
                            required
                            label="Email"
                            variant="outlined"
                            onChange={event => handleEmail(event.target.value)}
                        />
                    </span>
                )}
            
            <IconButton onClick={event => handleSubmit()} type='button' color="secondary" aria-label='submit entry'>
                <AddCircle className='input-buttons' />
            </IconButton>
        </div>
    )
}

export default EntryForm;
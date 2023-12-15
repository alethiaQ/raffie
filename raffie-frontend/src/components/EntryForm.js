import TextField from '@mui/material/TextField';
function EntryForm() {
    function handleChange(name, value) {
        console.log(value)
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
                onChange={event => handleChange(event.target.name, event.target.value)}
            />
            <TextField
                required
                id="filled-multiline-flexible"
                label="Last Name"
                multiline
                maxRows={2}
                variant="filled"
            />
            <TextField
                required
                id="filled-multiline-flexible"
                label="Email"
                multiline
                maxRows={2}
                variant="filled"
            />
        </div>
    )
}

export default EntryForm;
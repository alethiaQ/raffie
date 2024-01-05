import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Settings } from "@mui/icons-material";
import { changeEntryType } from "../store/raffleJarSlice";
import { IconButton, Menu, MenuItem } from "@mui/material";
function SettingsPanel() {
    const dispatch = useDispatch();
    const [setting, setSetting] = useState("Names")
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClose = (event) => {
        if (event === 'Names' || event === 'Emails') {
            setSetting(event)
            changeSetting(event)
        }
        setAnchorEl(null);
    };
    const changeSetting = (event) => {
        dispatch(changeEntryType(event))
    }
    const openSettingsPanel = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const options = ["Names", "Emails"];
    return (
        <span>
             <IconButton type='button' color="secondary" aria-label='submit entry' className="settings-button"
                    onClick={openSettingsPanel}  aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true" >
                <Settings color="secondary"/>
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
        
                >
                {options.map((option) => (
                    <MenuItem key={option} selected={setting === option} onClick={event => handleClose(event.target.innerText)} name={option}>
                        {option}
                        </MenuItem>
                    ))}
            </Menu>
        </span>
    )
}
export default SettingsPanel;
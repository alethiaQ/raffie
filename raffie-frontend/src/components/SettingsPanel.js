import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Settings } from "@mui/icons-material";
import { changeEntryType } from "../store/raffleJarSlice";
import { IconButton, Menu, MenuItem } from "@mui/material";
function SettingsPanel() {
    const dispatch = useDispatch();
    const [setting, setSetting] = useState("String")
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClose = (event) => {
        if (event === 'String' || event === 'Number') {
            setSetting(event)
            dispatch(changeEntryType(setting))
        }
        console.log(setting);
        
        setAnchorEl(null);
    };
    const openSettingsPanel = (event) => {
        setAnchorEl(event.currentTarget);
    }
 
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
                    <MenuItem key="string" selected={ setting === "String"} onClick={event => handleClose(event.target.innerText)} name="string">
                        String
                    </MenuItem>
                    <MenuItem key="number" selected={ setting === "Number"} onClick={event => handleClose(event.target.innerText)} name="number">
                        Number
                    </MenuItem>
            </Menu>
        </span>
    )
}
export default SettingsPanel;
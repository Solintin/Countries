import React from 'react'
import '../App.css'
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { IconButton } from '@material-ui/core';



function Header({ darkMode, handleDark }) {

    return (
        <div className='Header'>
            <div style={{ fontSize: 43, fontWeight: 700, flex: 1 }}>Where in the World?</div>
            <IconButton className='icon' onClick={handleDark}>{darkMode ? <Brightness5Icon style={{color : 'yellow'}}/> : <Brightness3Icon style={{color : '#000'}} />}
            </IconButton>

        </div>

    )
}

export default Header

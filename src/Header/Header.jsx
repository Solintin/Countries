import React from 'react'
import './Header.css'
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';






function Header({ darkMode, handleDark }) {

    return (
        <div>
            
                <AppBar color='transparent' position='static' className="Header">
                    <Toolbar>
                   
                        <div style={{ fontSize: 43, fontWeight: 700, flex : 1}}>Where in the World?</div>
                        <div className='icon'>
                           <Brightness5Icon style={{color : darkMode ? 'yellow' : '' }}  /> <Switch checked={darkMode} onChange={handleDark} />  <Brightness2Icon /></div>
                   
                    </Toolbar>
                </AppBar>
            
        </div>

    )
}

export default Header

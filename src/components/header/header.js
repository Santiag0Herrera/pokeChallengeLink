import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import './header.css'

const navItems = [
    {linkName: 'Home', path: '/'}, 
    {linkName: 'Pokemones', path: '/pokemones'}, 
    {linkName: 'Contactos', path: '/contacto'}
];

function DrawerAppBar(props) {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                {navItems.map((item) => (
                    <Link to={item.path} className='nav-button'>
                    {item.linkName}
                    </Link>
                ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default DrawerAppBar;
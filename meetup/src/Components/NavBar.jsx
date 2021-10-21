import Box from '@mui/material/Box';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export function NavBar(){

    return(
        <Box
      sx={{
        width: "100vw",
        height: 80,
        backgroundColor: 'primary.dark',
        
      }}
    >
        <Box sx={{
        width: 100,
        height: 80,
        backgroundColor: 'none',}}>
        <Link>Login</Link>
        <Link>SignUp</Link>
        </Box>
        
        </Box>
    )
}
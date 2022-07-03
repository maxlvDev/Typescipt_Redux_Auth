import React, { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'

const Navbar:FC = () => {
  return (
    <AppBar position="static" color = "primary">
        <Toolbar disableGutters>
          <Grid container marginRight={'50px'} justifyContent={"end"}>
          </Grid>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
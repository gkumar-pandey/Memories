import React from 'react'
import { AppBar, Typography } from '@mui/material'
import useStyles from "./NavbarStyle"

const Navbar = () => {
    const classes = useStyles();
  return (
    <>
        <AppBar className={classes.appBar}  position='static'  >
            <Typography className={classes.heading} align='center' variant='h3'>
                 DevWarriors
            </Typography>
        </AppBar>
    </>
  )
}

export default Navbar
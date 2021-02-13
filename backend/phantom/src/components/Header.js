import { AppBar, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core'
import React from 'react'

export default function Header() {
    return (
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container>
                        <Grid item>
                            <IconButton></IconButton>
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item>
                            
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
    )
}

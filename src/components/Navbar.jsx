import React from "react";
import {AppBar, Avatar, Box, Button, Link, Toolbar, Typography} from "@mui/material";


function Navbar() {
    return (
        <AppBar position="static" sx={{backgroundColor: "rgba(31, 99, 135, 0.369)"}}>
            <Toolbar>
                <Typography variant="h6" >
                    Welcome to my shitt ass corner space - this is a temporary navbar
                </Typography>

            </Toolbar>
        </AppBar>
    )
}
export default Navbar;
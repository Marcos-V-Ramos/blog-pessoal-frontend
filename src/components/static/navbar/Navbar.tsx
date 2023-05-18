import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";

import "./Navbar.css"

const Navbar = () => {
    return(
        <>
            <AppBar 
                position="static"
                style={{backgroundColor: '#4B0069'}}
            >
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography 
                            variant="h5" 
                            style={{color: '#B5A212', fontWeight: '400'}}
                        >
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        {/* <Link to="/home" className="text-decorator-none"> */}
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                        {/* </Link> */}
                        <Box mx={1} style={{ cursor: "pointer"}}>
                            <Typography variant="h6" color="inherit">
                                Criar postagem
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        {/* <Link to="/logout"> */}
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        {/* </Link> */}
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
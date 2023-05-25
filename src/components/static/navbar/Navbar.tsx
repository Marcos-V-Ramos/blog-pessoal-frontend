import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";

import "./Navbar.css"
import useLocalStorage from "react-use-localstorage";

function Navbar () {
    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    const goLogout = () => {
        setToken('')
        alert('Usuário deslogado')
        navigate('/login')
    }

    return(
        <>
            <AppBar 
                position="static"
                style={{backgroundColor: '#4B0069'}}
            >
                <Toolbar variant="dense">
                    <Box className="cursor" >
                        <Typography 
                            variant="h5" 
                            className="tituloPrincipal"
                        >
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/criarPostagem' className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Criar postagem
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/posts' className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/temas' className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioTema' className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>
                    
                        <Box 
                            mx={1} 
                            className="cursor" 
                            onClick={() => goLogout()}
                        >
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
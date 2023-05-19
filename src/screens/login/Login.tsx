import React from "react";

import { Grid, Box, Typography, TextField, Button } from "@material-ui/core"; 

import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {

    return(
        <>
            <Grid 
                container
                className="agrupamentoPrincipal"
                direction="row"
            >
                <Grid 
                    xs={6}
                    alignItems="center"
                >
                    <Box
                        paddingX={20}
                    >
                        <form>
                            <Typography 
                                variant="h3" 
                                gutterBottom 
                                color="textPrimary" 
                                component="h3"
                                align="center"
                                className="textoFormulario"
                            > 
                                Entrar 
                            </Typography>
                            <TextField 
                                id="usuario"
                                label="usuario"
                                variant="outlined"
                                name="usuario"
                                margin="normal"
                                fullWidth
                                type="text"
                            />
                            <TextField 
                                id="senha"
                                label="senha"
                                variant="outlined"
                                name="senha"
                                margin="normal"
                                fullWidth
                                type="password"
                            />

                            <Box
                                marginTop={2}
                                textAlign="center"
                            >
                                <Link 
                                    to="/home"
                                    className="text-decorator-none"
                                    
                                >
                                    <Button 
                                        type="submit" 
                                        variant="contained" 
                                        color="primary"
                                        className="text-decorator-none"
                                    >
                                        Logar
                                    </Button>
                                </Link>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography 
                                    variant='subtitle1' 
                                    gutterBottom
                                    align="center"
                                    className="textoFormulario"
                                >
                                    Não tem uma conta?
                                </Typography>
                            </Box>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom
                                    align="center"         
                                >
                                    <mark>Cadastre-se</mark>
                                </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid 
                    xs={6}
                    className="fundoImagem"
                >

                </Grid>
            </Grid>
        </>
    );
}

export default Login;
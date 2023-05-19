import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid, Box } from '@material-ui/core';

import "./Footer.css"

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='agrupamentoSuperior'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="texto"> Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box className="agrupamentoIcones" display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/" target="_blank">
                                <FacebookIcon className="icones" />
                            </a>
                            <a href="https://www.instagram.com/m.viniciusramos/" target="_blank">
                                <InstagramIcon className="icones" />
                            </a>
                            <a href="https://www.linkedin.com/in/marcos-v-ramos-caldas/" target="_blank">
                                <LinkedInIcon className="icones" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="agrupamentoInferior">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="texto"> 
                                © 2023 Copyright: &nbsp;
                                <a target="_blank" href="https://www.linkedin.com/in/marcos-v-ramos-caldas/" className="texto">
                                    <mark>Marcos Vinicius Ramos de Caldas</mark>
                                </a>
                            </Typography>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;
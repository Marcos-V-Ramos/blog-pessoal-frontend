import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import Carrossel  from '../../components/carrossel/Carrossel';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function Home(props: any) {

    let navigate = useNavigate()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    useEffect( ()=>{
        if (token ==='') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" className='destaque'>
                            Seja bem vindo(a)!
                        </Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center" className='titulo'>
                            expresse aqui os seus pensamentos e opiniões!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Button variant="outlined" className="botao">
                            Ver Postagens
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/1sgrdpO.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>

            {/* <Grid container style={{ marginTop: "8px" }}>
                <Grid item xs={12}>
                    <Carrossel
                        
                    />
                </Grid>
            </Grid> */}
        </>
    );
};

export default Home;

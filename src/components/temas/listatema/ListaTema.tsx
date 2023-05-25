import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Box } from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([]);
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    useEffect(()=>{
        if(token === '') {
            alert('você deve estar logado.')
            navigate('/login')
        }
    }, [token])

    const getTema = async () => {
        try {
            await busca('/temas', setTemas, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
        } catch (err) {
            alert('Houve um erro\n\n' + err)
        }
    }

    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
            {
                temas.map(temaCorrente => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Tema ID {temaCorrente.id}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {temaCorrente.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioTema/${temaCorrente.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${temaCorrente.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default ListaTema;
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Box } from '@material-ui/core';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import Postagem from '../../../models/Postagem';

function ListaPostagem() {

    const [token, setToken] = useLocalStorage('token')
    const [postagens, setPostagens] = useState<Postagem[]>([])
    let navigate = useNavigate()

    const getPostagens = async () => {
        try {
            await busca('/postagens', setPostagens, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
        } catch (error : any) {
            alert('Houve um erro ao tentar buscar\n\n' + error)
        }
    }

    useEffect(()=>{
        if (token === '') {
            alert('Você deve estar logado!')
            navigate('/login')
        }
    }, [token])

    useEffect(()=> {
        getPostagens()
    }, [postagens.length])

    return (
        <>
            {   
                postagens.map(postagemCorrente => ( 
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {postagemCorrente.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {postagemCorrente.texto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {postagemCorrente.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${postagemCorrente.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${postagemCorrente.id}`} className="text-decorator-none">
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

export default ListaPostagem;
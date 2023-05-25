import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import './DeletarTema.css';
import { buscarPorId, post, put } from '../../../services/Service';
import { removerPorId } from '../../../services/Service';

function DeletarTema() {

    let navigate = useNavigate()
    const { id } = useParams<{id: string}>() // useParams pega os parâmetros da URL
    const [token, setToken] = useLocalStorage('token')
    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
        if (token === '') {
            alert("VocÊ precisa estar logado!")
            navigate('/login')
        }
    }, [token])

    useEffect(()=> {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    // Se estou pegando o ID por URL, pq estou fazendo a requisição?
    const findById = async (id: string ) => {
        try {
            let statusCode = await buscarPorId(`temas/${id}`, setTema, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })

            alert('status da requisição' + statusCode)
        } catch (error) {
            alert('Houve um erro:\n\n' + error)
        }
    }

    async function sim() {
        try {
            navigate('/temas')
            let statusCode = await removerPorId(`/temas/${id}`, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
            alert('Tema removido com sucesso!n\n\n' + statusCode[0])
        } catch(error) {
            alert('Houve um erro\n\n' + error)
        }
    }

    function nao() {
        navigate('/temas')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Tema de ID {tema?.id}:
                            </Typography>
                            <Typography color="textSecondary">
                               {tema?.descricao}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box onClick={sim} mx={2}>
                                <Button variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box onClick={nao} mx={2}>
                                <Button variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarTema;
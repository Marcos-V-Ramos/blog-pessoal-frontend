import React, { useEffect, useState } from 'react'
import { Box, Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscarPorId, removerPorId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function DeletarPostagem() {


    let navigate = useNavigate()
    const { id } = useParams<{id: string}>() // useParams pega os parâmetros da URL
    const [token, setToken] = useLocalStorage('token')
    const [post, setPost] = useState<Postagem>()

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
            let statusCode = await buscarPorId(`/postagens/${id}`, setPost, {
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
            navigate('/posts')
            let statusCode = await removerPorId(`/postagens/${id}`, {
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
        navigate('/posts')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a Postagem:
                            </Typography>
                            <Typography color="textSecondary" >
                                {post?.titulo}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
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
export default DeletarPostagem;
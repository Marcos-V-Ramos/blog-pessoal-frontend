import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscarPorId, post, put } from '../../../services/Service';

function CadastroTema() {

    let navigate = useNavigate()
    const { id } = useParams<{id: string}>() // useParams pega os parâmetros da URL
    const [token, setToken] = useLocalStorage('token')
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

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

    const updatedTema = (e: ChangeEvent<HTMLInputElement>) => {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('tema', JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            let statusCode = await put('/temas', setTema, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            }, tema)
            statusCode === 200 ? alert('tema atualizado com sucesso!') : alert('não foi possível')
            goBack()
            return;
        }
        
        let statusCode = await post('/temas', setTema, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        }, tema)

        statusCode === 200 ? alert('tema cadastrado com sucesso!') : alert('não foi possível cadastrar o tema')
        goBack()
    }

    const goBack = () => {
        navigate('/temas')
    };

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField 
                    id="descricao" 
                    label="descricao" 
                    variant="outlined" 
                    name="descricao" 
                    margin="normal" 
                    fullWidth
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} 
                />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;
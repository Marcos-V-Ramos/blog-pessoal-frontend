import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import './CadastroPost.css';
import { busca, buscarPorId, post, put } from '../../../services/Service';

function CadastroPost() {
 
    let navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [temas, setTemas] = useState<Tema[]>([]) // Guardará todos os temas;
    const [token, setToken] = useLocalStorage('token')

    useEffect(()=> {
        if (token === '') {
            alert('Você deve estar logado.')
            navigate('/login')
        }
    }, [token])

    const [tema, setTema] = useState<Tema>({
        id: 0, 
        descricao: ''
    }) // Guardará un dos Temas.

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(()=>{
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema]) // Monitorará o State Tema, e preencherá o State Postagem caso o <Select></Select> de temas sofra uma mudança.

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id]) // Monitorará o ID da URL

    const getTemas = async() => {
        await busca('/temas', setTemas, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    }

    const findByIdPostagem = async (id: string) => {
        await buscarPorId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    }

    const updatedPostagem = (e: ChangeEvent<HTMLInputElement>) => {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            if (id !== undefined) {
                put(`/postagens`, setPostagem, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                }, postagem)
                alert("Postagem atualizada com sucesso")
            } else {
                post(`/postagens`, setPostagem, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                }, postagem)
                alert('Postagem cadastrada com sucesso.')
            }
            back()
        } catch (error) {
            alert('houve um erro\n' + error)
        }
    }

    const back = () => {
        navigate('/posts')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField 
                    value={postagem.titulo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="titulo" 
                    label="titulo" 
                    variant="outlined" 
                    name="titulo" 
                    margin="normal" 
                    fullWidth 
                />
                
                <TextField
                    value={postagem.texto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} 
                    id="texto" 
                    label="texto" 
                    name="texto" 
                    variant="outlined" 
                    margin="normal" 
                    fullWidth 
                />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={ (e) => buscarPorId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token,
                                'Content-Type': 'application/json'
                            }
                        })}
                    >
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;
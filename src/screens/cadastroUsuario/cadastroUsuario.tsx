import React, { ChangeEvent, useEffect, useState } from "react";
import "./cadastroUsuario.css"
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario as cadUser } from "../../services/Service";

function CadastroUsuario() {

    let navigate = useNavigate()
    
    const[confirmarSenha, setConfirmarSenha] = useState<string>("")
    const[linkFoto, setLinkFoto] = useState<string>("")
    
    const[user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })

    useEffect(()=>{
        if (userResult.id !== 0) {
            navigate('/login')
            console.log(userResult)
        }
    }, [userResult])

    const confirmarSenhaHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmarSenha(e.target.value)
    }

    const updatedModel = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (confirmarSenha === user.senha) {
            cadUser(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuário cadastrado com sucesso.')
        } else {
            alert('Dados inconsistentes. Favor arrumar.')
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="fundoImagem"></Grid>
            <Grid item xs={6}>
                <form onSubmit={onSubmit}>
                    <Box className="camposForm">
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            className="tituloForm"
                            align="center"
                        >
                            Cadastrar
                        </Typography>

                        <TextField
                            id="nome"
                            label="Nome"
                            placeholder="Insira o nome:"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            fullWidth
                            type="text"
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />

                        <TextField
                            id="usuario"
                            label="Usuário"
                            placeholder="Insira o nome de usuário:"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                            type="text"
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />
                        <TextField
                            id="linkFoto"
                            label="Insira o Link da sua foto"
                            placeholder="Insira o nome de usuário:"
                            variant="outlined"
                            name="foto"
                            margin="normal"
                            fullWidth
                            type="text"
                            value={user.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />
                        <div 
                            className="imagemUsuario"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            style={{backgroundImage: user.foto !== '' ? `url(${user.foto})` : 'url(https://i.imgur.com/qDUPJ43_d.webp?maxwidth=760&fidelity=grand)'}}
                        >
                        </div>

                        <Box className="boxSenha">
                            <TextField
                                id="senha"
                                label="Senha"
                                placeholder="Digite a sua senha:"
                                variant="outlined"
                                name="senha"
                                margin="normal"
                                fullWidth
                                type="password"
                                value={user.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            />
                            <TextField
                                id="confirmarSenha"
                                label="Confirme a senha"
                                placeholder="Digite novamente a sua senha:"
                                variant="outlined"
                                name="confirmarSenha"
                                margin="normal"
                                fullWidth
                                type="password"
                                value={confirmarSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            />
                        </Box>

                        <Box
                            marginTop={2}
                            textAlign="center"
                        >
                            <Link
                                to="/login"
                                className="text-decorator-none"

                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className="text-decorator-none"
                                >
                                    Cancelar
                                </Button>
                            </Link>

                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="btnCancelar"
                            >
                                Cadastrar
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario; 
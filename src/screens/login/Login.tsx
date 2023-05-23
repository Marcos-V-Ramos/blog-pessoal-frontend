import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core"; 
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import UserLogin from "../../models/UserLogin";
import useLocalStorage  from "react-use-localstorage";
import { login } from './../../services/Service'

const Login = () => {

    let navigate = useNavigate()
    const [token, setToken] = useLocalStorage('token')

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    const updatedModel = (e: ChangeEvent<HTMLInputElement>) => {
        /**
         * O estado inicial do userLogin é um objeto UserLogin com seus valores vazios;
         * Cada campo do formulário chamará a função setUserLogin();
         * A função setUserLogin() atualiza o state userLogin, campo a campo;
         * A função setUserLogin() pega o objeto atual, e muda a propriedade do campo em questão.
         */
        setUserLogin({
            ...userLogin, //Spread Operator -> "espalha"
            [e.target.name]: e.target.value // nomePropriedade (atributo HTML name do input): valorImput 
        })
    }

    useEffect(()=> {
        if (token !== '') {
            alert('entrou')
            navigate('/home')
            // TODO: entender como funciona o navigate()
        }
    }, [token])

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            //TODO: verificar o status do response.
            //TODO: como visualizar este JSON?
            
            alert("Usuário logado com sucesso!")
        } catch (err) {
            alert(`Houve um erro ao tentar logar:\n ${err}`)

            //TODO: tratar de outra forma as excessões.
        } finally {
        }
    }

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
                        <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => onSubmit(e)}>
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
                                value={userLogin.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            />
                            <TextField 
                                id="senha"
                                label="senha"
                                variant="outlined"
                                name="senha"
                                margin="normal"
                                fullWidth
                                type="password"
                                value={userLogin.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            />

                            <Box
                                marginTop={2}
                                textAlign="center"
                            >
                            
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    color="primary"
                                    className="text-decorator-none"
                                >
                                    Logar
                                </Button>
                                
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
                                <Link to="/cadastroUsuario">
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        align="center"
                                    >
                                        <mark>Cadastre-se</mark>
                                    </Typography>
                                </Link>
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
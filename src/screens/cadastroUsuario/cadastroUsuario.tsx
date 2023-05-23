import React from "react";
import "./cadastroUsuario.css"
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function cadastroUsuario() {

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="fundoImagem"></Grid>
            <Grid item xs={6}>
                <form>
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
                        />

                        <TextField
                            id="senha"
                            label="Senha"
                            placeholder="Digite a sua senha:"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            fullWidth
                            type="password"
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
                        />

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

export default cadastroUsuario;
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../App";

export default function LoginContent(props) {
    const { loginData, setLoginData } = props;
    const navigate = useNavigate();
    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");


    function saveDataInLocalStorage(dados) {
        const dadosSerializados = JSON.stringify(dados);
        localStorage.setItem("dadosUsuario", dadosSerializados);
    }

    function login(e) {
        e.preventDefault();

        const dadosLogin = {
            email: emailLogin,
            password: senhaLogin
        };

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post(URL, dadosLogin);
        promise.then((res) => {
            saveDataInLocalStorage(res.data);
            setLoginData(res.data);
            navigate("/habitos");
        });
        promise.catch((err) => {
            console.log(err.response.data);
        });
    }

    return (
        <LoginPage>
            <img src="assets/logo.svg" alt="" />
            <form onSubmit={login}>
                <input data-test="email-input" onChange={(e) => setEmailLogin(e.target.value)} type="email" placeholder="email" required />
                <input data-test="password-input" onChange={(e) => setSenhaLogin(e.target.value)} type="password" placeholder="senha" required />
                <button data-test="login-btn" type="submit">Entrar</button>
            </form>
            <Link data-test="signup-link" to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </LoginPage>
    )
}

const LoginPage = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    background-color: #ffffff;
    width: 100%;
    img {
        margin-top: 115px;
        width: 180px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    input {
        border: 1px solid #D4D4D4;
        height: 45px;
        width: 303px;
        border-radius: 5px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        padding-left: 11px;
    }
    input::placeholder {
        color: #DBDBDB;
;
    }
    button {
        background: #52B6FF;
        border: none;
        border-radius: 5px;
        height: 45px;
        width: 303px;
        font-family: Lexend Deca;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;
    }
    p {
        font-family: Lexend Deca;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        color: #52B6FF;
    }
`
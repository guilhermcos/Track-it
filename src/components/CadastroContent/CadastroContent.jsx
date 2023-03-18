import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxcTLwEGJR-3ps1O11tPzhUKHRPKPIYDPtxBDnTEqd9jqzT5lXSINhrR_bG6FL1iHx5U&usqp=CAU

export default function CadastroContent() {
    const [nomeCadastro, setNomeCadastro] = useState("");
    const [emailCadastro, setEmailCadastro] = useState("");
    const [senhaCadastro, setSenhaCadastro] = useState("");
    const [fotoCadastro, setFotoCadastro] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function cadastrar(e) {
        e.preventDefault();
        setIsLoading(true);
        const dadosCadastro = {
            email: emailCadastro,
            name: nomeCadastro,
            image: fotoCadastro,
            password: senhaCadastro
        };

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(URL, dadosCadastro);
        promise.then((res) => {
            setIsLoading(false);
            navigate("/");
        });
        promise.catch((err) => {
            setIsLoading(false);
            console.log(err.response.data);
            alert(err.response.data.message);
        });
    }

    return (
        <CadastroPage isLoading={isLoading}>
            <img src="assets/logo.svg" alt="" />
            <form onSubmit={cadastrar}>
                <input data-test="email-input" onChange={(e) => setEmailCadastro(e.target.value)} type="email" placeholder="email" disabled={isLoading} required />
                <input data-test="password-input" onChange={(e) => setSenhaCadastro(e.target.value)} type="password" placeholder="senha" disabled={isLoading} required />
                <input data-test="user-name-input" onChange={(e) => setNomeCadastro(e.target.value)} type="text" placeholder="nome" disabled={isLoading} required />
                <input data-test="user-image-input" onChange={(e) => setFotoCadastro(e.target.value)} type="url" placeholder="foto" disabled={isLoading} required />
                <button data-test="signup-btn" type="submit" disabled={isLoading}>
                    {isLoading ? <ThreeDots color="#ffffff" /> : "Cadastrar"}
                </button>
            </form>
            <Link data-test="login-link" to="/"><p>Já tem uma conta? Faça login!</p></Link>
        </CadastroPage>
    )
}

const CadastroPage = styled.div`
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
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        width: 303px;
        font-family: Lexend Deca;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;
        opacity: ${(props) => props.isLoading ? "70%" : "100%"};
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
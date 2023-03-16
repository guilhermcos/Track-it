import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function LoginContent() {
    const navigate = useNavigate();
    return (
        <LoginPage>
            <img src="assets/logo.svg" alt="" />
            <form action="">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <button onClick={() => navigate("/habitos")} type="submit">Entrar</button>
            </form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
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
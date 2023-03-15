import styled from "styled-components";
import { Link } from "react-router-dom";

export default function BottomBar() {
    return (
        <>
        <NavBar>
            <Link>Hábitos</Link>
            <Link>Histórico</Link>
        </NavBar>
        <BotaoHoje><p>Hoje</p></BotaoHoje>
        </>
    )
}

const BotaoHoje = styled.div`
    position: fixed;
    bottom: 0;
    left: calc(50% - 45px);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #52B6FF;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    p {
        color: #ffffff;
        font-family: Lexend Deca, sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;

    }
`

const NavBar = styled.nav`
    background-color: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    border-radius: 0px;
    a {
        color: #52B6FF;
        margin-left: 36px;
        margin-right: 31px;
        text-decoration: none;
        font-family: Lexend Deca, sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
    }
`
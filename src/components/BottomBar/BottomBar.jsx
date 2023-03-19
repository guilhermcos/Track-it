import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import { useContext } from "react";
import { Percentual } from "../../App";

export default function BottomBar() {
    const navigate = useNavigate();

    const percentage = useContext(Percentual).percentual;
    return (
        <div data-test="menu">
            <NavBar>
                <Link to={"/habitos"} data-test="habit-link" >Hábitos</Link>
                <Link data-test="history-link" >Histórico</Link>
            </NavBar>
            <BotaoHoje onClick={() => navigate("/hoje")} data-test="today-link" >
                <CircularProgressbar
                    strokeWidth={10}
                    styles={{
                        root: {
                            width: '90%',
                        },
                        path: {
                            stroke: `rgba(255, 255, 255, ${percentage / 100})`,
                            stroke: '#ffffff',
                            
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transformOrigin: 'center center',
                        },
                        trail: {
                            stroke: '#52B6FF',
                            strokeLinecap: 'butt',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        text: {
                            fontFamily: 'Lexend Deca',
                            fill: '#ffffff',
                            fontSize: '24px',
                        },
                        background: {
                            fill: '#3e98c7',
                        },
                    }}
                    value={percentage}
                    text={`Hoje`} />
            </BotaoHoje>
        </div>
    )
}

const BotaoHoje = styled.div`
    z-index: 3;
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
    z-index: 2;
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
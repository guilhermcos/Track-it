import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../App";
import styled from "styled-components";
import HojeCards from "./HojeCards";
import axios from "axios";

export default function HojeContent() {
    const loginData = useContext(LoginContext);
    const [habitosHoje, setHabitosHoje] = useState([]);

    useEffect(() => {

        const config = {
            headers: {
                "Authorization": `Bearer ${loginData.token}`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL, config);
        promise.then((res) => {
            console.log(res.data);
            setHabitosHoje(res.data);
        });
        promise.catch((err) => {
            console.log(err.response.data);
        });


    }, []);

    function gerarDataHoje() {
        const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getDay()];
        const date = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const dataFormatada = `${dayOfWeek}, ${date < 10 ? "0" + date : date}/${month < 10 ? "0" + month : month}`;
        return dataFormatada;
    }

    return (
        <HojeContainer>
            <HojeHeader>
                <h2>{gerarDataHoje()}</h2>
                <h3>Nenhum hábito concluído ainda</h3>
            </HojeHeader>
            <HojeCards habitosHoje={habitosHoje} />
        </HojeContainer>
    )
}



const HojeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HojeHeader = styled.div`
    margin-top: 100px;
    width: 90%;
    h2 {
        color: #126BA5;
        font-family: Lexend Deca;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }
    h3 {
        color: #BABABA;
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }
`
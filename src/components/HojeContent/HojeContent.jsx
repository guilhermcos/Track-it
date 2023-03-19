import { useContext, useEffect, useState } from "react";
import { LoginContext, Percentual } from "../../App";
import styled from "styled-components";
import HojeCards from "./HojeCards";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HojeContent() {
    const loginData = useContext(LoginContext);
    const { percentual , setPercentual } = useContext(Percentual);
    const [habitosHoje, setHabitosHoje] = useState([]);
    const [totalHabitos, setTotalHabitos] = useState(0);
    const [habitosConcluidos, setHabitosConcluidos] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setPercentual(() => (habitosConcluidos/totalHabitos*100).toFixed(0));
    }, [totalHabitos, habitosConcluidos])

    function contaConcluidos(habits) {
        const concluidos = habits.filter((habit) => habit.done );
        setHabitosConcluidos(concluidos.length);
    }

    useEffect(() => {
        if (loginData !== undefined) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${loginData.token}`
                }
            }
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
            const promise = axios.get(URL, config);
            promise.then((res) => {
                setHabitosHoje(res.data);
                setTotalHabitos(res.data.length);
                contaConcluidos(res.data);
            });
            promise.catch((err) => {
                console.log(err.response.data);
            });
        } else {
            navigate("/");
            return
        }
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
            <HojeHeader
            isColored={(percentual > 0)}>
                <h2>{gerarDataHoje()}</h2>
                <h3>{(percentual > 0) ? `${percentual}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</h3>
            </HojeHeader>
            <HojeCards setHabitosConcluidos={setHabitosConcluidos} habitosHoje={habitosHoje} />
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
        color: ${(props) => (props.isColored) ? "#8FC549" : "#BABABA"};
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }
`
import styled from "styled-components"
import Calendar from "react-calendar"
import { useContext, useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { LoginContext } from "../../App";
import DiaHistorico from "./DiaHistorico";
import { useNavigate } from "react-router-dom";

export default function HistoricoContent() {
    const navigate = useNavigate();
    const loginData = useContext(LoginContext);
    const [value, onChange] = useState(new Date());
    const [datasCompletas, setDatasCompletas] = useState([]);
    const [datasIncompletas, setDatasIncompletas] = useState([]);
    const [dadosDatas, setDadosDatas] = useState();
    const [dataClicada, setDataClicada] = useState(false);

    useEffect(() => {
        if (loginData !== undefined) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${loginData.token}`
                }
            }
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
            const promise = axios.get(URL, config);
            promise.then((res) => {
                separarDatas(res.data);
                setDadosDatas(res.data);
            });
            promise.catch((err) => {
                console.log(err.response.data);
            });
        } else {
            navigate("/");
            return
        }
    }, []);

    function separarDatas(data) {
        const completedDates = [];
        const incompleteDates = [];

        data.forEach((day) => {
            let allCompleted = true;
            let atLeastOneIncomplete = false;

            day.habits.forEach((habit) => {
                if (!habit.done) {
                    allCompleted = false;
                    atLeastOneIncomplete = true;
                }
            });

            const today = new Date();
            const [dia, mes, ano] = day.day.split('/');
            const dayDate = new Date(ano, mes - 1, dia);

            if (allCompleted && dayDate.toDateString() !== today.toDateString()) {
                completedDates.push(day.day);
            } else if (atLeastOneIncomplete && dayDate.toDateString() !== today.toDateString()) {
                incompleteDates.push(day.day);
            }
        });


        setDatasCompletas(completedDates);
        setDatasIncompletas(incompleteDates);
    }

    function tileClassName({ date, view }) {
        const formattedDate = date.toLocaleDateString();
        let className = '';

        if (view === 'month') {
            if (datasCompletas.includes(formattedDate)) {
                className = 'completed';
            } else if (datasIncompletas.includes(formattedDate)) {
                className = 'incomplete';
            }
        }

        return className;
    };

    function cliqueDia(value, event) {
        const dia = value.getDate().toString().padStart(2, '0');
        const mes = (value.getMonth() + 1).toString().padStart(2, '0');
        const ano = value.getFullYear().toString();
        const dataFormatada = `${dia}/${mes}/${ano}`;

        if (datasCompletas.includes(dataFormatada) || datasIncompletas.includes(dataFormatada)) {
            dadosDatas.map((data) => {
                if (data.day === dataFormatada) {
                    setDataClicada(data);
                }
            })
        } else {
            setDataClicada(false);
        }
    };

    return (
        <HistoricoContainer data-test="calendar">
            <h1>Histórico</h1>
            <Calendar onClickDay={cliqueDia} tileClassName={tileClassName} onChange={onChange} value={value} />
            {(!dataClicada) ? <h3>Clique em um dia colorido para ver os dados deste dia...</h3> : <DiaHistorico dadosDia={dataClicada} />}
        </HistoricoContainer>
    )
}

const TiledDiv = styled.div`
    ${(props) => {
        if (props.iscomplete === "incomplete") {
            return "background-color: #ea5766;"
        } else if (props.iscomplete === "completed") {
            return "background-color: #8cc654;"
        }
    }}
    width: 100%;
    height: 100%;
`

const HistoricoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 10px;
    h3 {
        font-family: Lexend Deca;
        color: #666666;
        width: 80%;
        text-align: center;
    }
    h1 {
        color: #126BA5;
        margin-top: 100px;
        font-family: Lexend Deca;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        width: 90%;
    }
    .react-calendar {
        border: none;
        margin-top: 11px;
        border-radius: 10px;
    }
    .react-calendar__navigation span{
        font-family: Lexend Deca;
        font-size: 15px;
    }
    .react-calendar__month-view__days abbr{
        font-family: Lexend Deca;
    }
    .react-calendar .incomplete {
        border: 4px solid #ffffff;
        background-color: #ea5766;
        border-radius: 50%;
    }
    .react-calendar .completed {
        border: 4px solid #ffffff;
        background-color: #8cc654;
        border-radius: 50%;
    }
`
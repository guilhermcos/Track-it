import styled from "styled-components";
import { useContext, useState } from "react";
import { LoginContext } from "../../App";
import axios from "axios";

export default function HojeCard(props) {
    const { habito, setHabitosConcluidos } = props;
    const loginData = useContext(LoginContext);
    const [isDone, setIsDone] = useState(habito.done);
    const [current, setCurrent] = useState(habito.currentSequence);
    const [record, setRecord] = useState(habito.highestSequence);
    const [isLoading, setIsLoading] = useState(false);

    function checkHabit() {
        const config = {
            headers: {
                Authorization : `Bearer ${loginData.token}`
            }
        };

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`;
        const promise = axios.post(URL,{},config);
        promise.then(() => {
            if(record < (current+1)){
                setRecord((record) => record+1);
            }
            setCurrent((current) => current+1);
            setIsLoading(false);
        });
        promise.catch((err) => {
            setHabitosConcluidos((habitosConcluidos) => habitosConcluidos-1);
            setIsDone(false);
            setIsLoading(false);
            alert(err.response.data.message);
        });
    }

    function unCheckHabit() {
        const config = {
            headers: {
                "Authorization": `Bearer ${loginData.token}`
            }
        };

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck`;
        const promise = axios.post(URL,{},config);
        promise.then(() => {
            if (current === record){
                setRecord((record) => record-1);
            }
            setCurrent((current) => current-1);
            setIsLoading(false);
        });
        promise.catch((err) => {
            setIsDone(true);
            setIsLoading(false);
            setHabitosConcluidos((habitosConcluidos) => habitosConcluidos+1);
            alert(err.response.data.message);
        });
    }

    function checkClick() {
        if (isDone) {
            setHabitosConcluidos((habitosConcluidos) => habitosConcluidos-1);
            setIsDone(false);
            setIsLoading(true);
            unCheckHabit();
        } else {
            setHabitosConcluidos((habitosConcluidos) => habitosConcluidos+1);
            setIsDone(true);
            setIsLoading(true);
            checkHabit();
        }
    }

    return (
        <StyledHojeCard data-test="today-habit-container" current={current} record={record} isDone={isDone}>
            <h1 data-test="today-habit-name">{habito.name}</h1>
            <h2 data-test="today-habit-sequence">
                Sequência atual: <span className="current">{current} dias</span>
            </h2>
            <h2 data-test="today-habit-record">
                Seu recorde: <span className="record">{record} dias</span>
            </h2>
            <button data-test="today-habit-check-btn" onClick={checkClick} disabled={isLoading} >
                <img src="assets/check.svg" alt="" />
            </button>
        </StyledHojeCard>
    )
}

const StyledHojeCard = styled.div`
    position: relative;
    background-color: #ffffff;
    padding-left: 10px;
    height: 94px;
    width: 90vw;
    border-radius: 5px;
    h1 {
        margin-top: 10px;
        color: #666666;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 7px;
    }
    h2 {
        color: #666666;
        font-family: Lexend Deca;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
    }
    button {
        border: none;
        position: absolute;
        top: 13px;
        right: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.isDone ? "#8FC549" : "#EBEBEB"};
        height: 69px;
        width: 69px;
        border-radius: 5px;
    }
    .current {
        color: ${(props) => props.isDone ? "#8FC549" : "#666666"};
    }
    .record {
        color: ${(props) => (props.current === props.record && props.current !== 0) ? "#8FC549" : "#666666"}
    }
`
import styled from "styled-components";
import { useState, useRef, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../App";

export default function HabitosCreationCard(props) {
    const { setHabitosUsuario, diasSelecionados, setDiasSelecionados, daysCheckBox, setIsInCreation } = props;
    const [novoHabito, setNovoHabito] = useState("");
    const loginData = useContext(LoginContext);



    function cliqueBotaoDia(day) {
        if (diasSelecionados.some((diaSelecionado) => diaSelecionado === day.id)) {
            setDiasSelecionados((diasSelecionados) => diasSelecionados.filter((diaSelecionado) => diaSelecionado !== day.id))
        } else {
            setDiasSelecionados((diasSelecionados) => [...diasSelecionados, day.id]);
        }
    }

    function criarHabito() {
        const body = {
            name: novoHabito,
            days: diasSelecionados
        };
        const config = {
            headers: {
                "Authorization": `Bearer ${loginData.token}`
            }
        };
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            setDiasSelecionados([]);
            setIsInCreation((isInCreation) => !isInCreation);
            setHabitosUsuario((habitosUsuario) => [...habitosUsuario, res.data])
        });
        promise.catch((err) => {
            console.log(err.response.data)
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (novoHabito === "") {
            alert("Insira um nome para o hábito");
        } else {
            criarHabito();
        }
    }

    return (
        <CreationCard data-test="habit-create-container">
            <input
                onChange={(e) => setNovoHabito(e.target.value)}
                data-test="habit-name-input" type="text"
                placeholder="nome do hábito"
                required />
            <DaysCreationCard>
                {daysCheckBox.map((day) => {
                    return (
                        <DayButton
                            key={day.dayName}
                            data-test="habit-day"
                            selecionado={diasSelecionados.includes(day.id)}
                            onClick={() => cliqueBotaoDia(day)}
                        >
                            {day.dayChar}
                        </DayButton>
                    )
                })}
            </DaysCreationCard>
            <ButtonsCreationCard>
                <a onClick={() => { setDiasSelecionados([]); setIsInCreation((isInCreation) => !isInCreation) }} data-test="habit-create-cancel-btn" >Cancelar</a>
                <button onClick={handleSubmit} type="submit" data-test="habit-create-save-btn" >Salvar</button>
            </ButtonsCreationCard>
        </CreationCard>
    )

};

const ButtonsCreationCard = styled.div`
    display: flex;
    align-items: center;
    gap: 23px;
    position: absolute;
    right: 16px;
    bottom: 15px;
    a {
        color: #52B6FF;
        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 2px;
        background-color: #52B6FF;
        color: #FFFFFF;
        height: 35px;
        width: 84px;
        border-radius: 5px;
        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        border: none;
    }
`

const DayButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.selecionado ? '#ffffff' : '#DBDBDB'};
    background-color: ${props => props.selecionado ? '#CFCFCF' : '#ffffff'};
    min-height: 30px;
    min-width: 30px;
    max-width: 30px;
    max-height: 30px;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
`

const DaysCreationCard = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    gap: 4px;
`

const CreationCard = styled.div`
    position: relative;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    height: 180px;
    width: 90%;
    border-radius: 5px;
    input {
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #666666;
        margin-top: 18px;
        padding-left: 11px;
        border: 1px solid #D4D4D4;
        height: 45px;
        width: 90%;
        border-radius: 5px;
        ::placeholder {
            color: #DBDBDB;
            font-family: Lexend Deca;
            font-size: 20px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: left;
        }
    }
`
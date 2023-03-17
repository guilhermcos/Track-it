import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import HabitosCreationCard from "./HabitosCreationCard";
import HabitoCard from "./HabitoCard";
import { LoginContext } from "../../App";


export default function HabitosContent() {
    const {loginData} = useContext(LoginContext)
    const [diasSelecionados, setDiasSelecionados] = useState(["Domingo"]);
    const [isInCreation, setIsInCreation] = useState(false)

    const daysCheckBox = [
        { dayChar: "D", dayName: "Domingo" },
        { dayChar: "S", dayName: "Segunda" },
        { dayChar: "T", dayName: "Terça" },
        { dayChar: "Q", dayName: "Quarta" },
        { dayChar: "Q", dayName: "Quinta" },
        { dayChar: "S", dayName: "Sexta" },
        { dayChar: "S", dayName: "Sábado" }
    ];

    return (
        <HabitosContainer>
            <MyHabitsHeader>
                <h2>Meus hábitos</h2>
                <button onClick={() => setIsInCreation(!isInCreation)} data-test="habit-create-btn" >+</button>
            </MyHabitsHeader>
            <HabitosCards>
                {(!isInCreation) ? <HabitosCreationCard diasSelecionados={diasSelecionados} setDiasSelecionados={setDiasSelecionados} daysCheckBox={daysCheckBox} /> : null}
                <HabitoCard daysCheckBox={daysCheckBox} />
                <HabitoCard daysCheckBox={daysCheckBox} />
                <HabitoCard daysCheckBox={daysCheckBox} />
            </HabitosCards>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </HabitosContainer>
    )
}


const HabitosCards = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    align-items: center;
    gap: 10px;
`

const MyHabitsHeader = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 90px;
        align-items: center;
        h2 {
            margin-left: 18px;
            color: #126BA5;
            font-family: Lexend Deca, sans-serif;
            font-size: 23px;
            font-weight: 400;
            line-height: 29px;
            letter-spacing: 0em;
            text-align: left;
        }
        button {
            padding-bottom: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Lexend Deca, sans-serif;
            font-size: 27px;
            font-weight: 400;
            line-height: 34px;
            letter-spacing: 0em;
            text-align: center;
            border: none;
            margin-right: 18px;
            height: 35px;
            width: 40px;
            border-radius: 5px;
            color: #ffffff;
            background-color: #52B6FF;
        }
`

const HabitosContainer = styled.main`
    margin-bottom: 120px;
    p {
            font-family: Lexend Deca;
            color: #666666;
            margin-left: 17px;
            margin-top: 30px;
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0em;
            text-align: left;
            width: 90%;
        }
`
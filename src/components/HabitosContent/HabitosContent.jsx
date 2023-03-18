import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import HabitosCreationCard from "./HabitosCreationCard";
import HabitoCard from "./HabitoCard";
import { LoginContext } from "../../App";
import UserHabitos from "./UserHabitos";


export default function HabitosContent() {
    const {loginData} = useContext(LoginContext)
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [isInCreation, setIsInCreation] = useState(true);
    const [habitosUsuario, setHabitosUsuario] = useState(undefined);

    const daysCheckBox = [
        { id: 7, dayChar: "D", dayName: "Domingo" },
        { id: 1, dayChar: "S", dayName: "Segunda" },
        { id: 2, dayChar: "T", dayName: "Terça" },
        { id: 3, dayChar: "Q", dayName: "Quarta" },
        { id: 4, dayChar: "Q", dayName: "Quinta" },
        { id: 5, dayChar: "S", dayName: "Sexta" },
        { id: 6, dayChar: "S", dayName: "Sábado" }
    ];

    return (
        <HabitosContainer>
            <MyHabitsHeader>
                <h2>Meus hábitos</h2>
                <button onClick={() => {setDiasSelecionados([]); setIsInCreation(!isInCreation)}} data-test="habit-create-btn" >+</button>
            </MyHabitsHeader>
            <HabitosCards>
                {(!isInCreation) ? <HabitosCreationCard setHabitosUsuario={setHabitosUsuario} setIsInCreation={setIsInCreation} diasSelecionados={diasSelecionados} setDiasSelecionados={setDiasSelecionados} daysCheckBox={daysCheckBox} /> : null}
                <UserHabitos habitosUsuario={habitosUsuario} setHabitosUsuario={setHabitosUsuario} daysCheckBox={daysCheckBox} />
            </HabitosCards>
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
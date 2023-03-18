import { useContext } from "react";
import styled from "styled-components"
import { LoginContext } from "../../App";
import axios from "axios";

export default function HabitoCard(props) {
    const loginData = useContext(LoginContext);
    const { daysCheckBox, habito, setHabitosUsuario } = props;

    function deletarHabito(id) {
        if (window.confirm("Tem certeza que quer apagar este hábito?")) {

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
            const promise = axios.delete(URL, {
                headers: {
                    "Authorization": `Bearer ${loginData.token}`
                }
            });
            promise.then((res) => {
                setHabitosUsuario((habitosUsuario) => {
                    return habitosUsuario.filter((habito) => {
                        if (habito.id === id) {
                            return false
                        } else {
                            return true
                        }
                    })
                })
            });
            promise.catch((err) => {
                console.log(err.response.data)
            });
        }
    }

    return (
        <StyledHabitoCard data-test="habit-container" >
            <h3 data-test="habit-name" >{habito.name}</h3>
            <DaysCreationCard>
                {daysCheckBox.map((day) => {
                    return (
                        <DayButton
                            key={day.dayName}
                            selecionado={habito.days.includes(day.id) ? true : false}
                            data-test="habit-day">
                            {day.dayChar}
                        </DayButton>
                    )
                })}
            </DaysCreationCard>
            <img onClick={() => deletarHabito(habito.id)} data-test="habit-delete-btn" src="assets/trash-outline.svg" alt="" />
        </StyledHabitoCard>
    )
}

const StyledHabitoCard = styled.div`
    background-color: #ffffff;
    height: 91px;
    width: 90%;
    border-radius: 5px;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    h3 {
        margin-top: 13px;
        width: 90%;
        color: #666666;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
    }
    img {
        width: 20px;
        position: absolute;
        top: 11px;
        right: 11px;
    }

`

const DaysCreationCard = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    gap: 4px;
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
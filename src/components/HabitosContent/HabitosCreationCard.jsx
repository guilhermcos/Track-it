import styled from "styled-components";

export default function HabitosCreationCard(props) {
    const {diasSelecionados, setDiasSelecionados, daysCheckBox} = props;
    

    function cliqueBotaoDia(day) {
        if (diasSelecionados.some((diaSelecionado) => diaSelecionado === day.dayName)) {
            setDiasSelecionados((diasSelecionados) => diasSelecionados.filter((diaSelecionado) => diaSelecionado !== day.dayName))
        } else {
            setDiasSelecionados((diasSelecionados) => [...diasSelecionados, day.dayName]);
        }
    }

    return (
        <CreationCard>
            <input type="text" placeholder="nome do hábito" />
            <DaysCreationCard>
                {daysCheckBox.map((day) => {
                    return (
                        <DayButton
                            key={day.dayName}
                            selecionado={diasSelecionados.includes(day.dayName)}
                            onClick={() => cliqueBotaoDia(day)}
                        >
                            {day.dayChar}
                        </DayButton>
                    )
                })}
            </DaysCreationCard>
            <ButtonsCreationCard>
                <a>Cancelar</a>
                <button>Salvar</button>
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
    margin-top: 20px;
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
import styled from "styled-components"

export default function HabitoCard(props) {
    const { daysCheckBox } = props;

    return (
        <StyledHabitoCard>
            <h3>Ler um capítulo do livro</h3>
            <DaysCreationCard>
                {daysCheckBox.map((day) => {
                    return (
                        <DayButton
                            key={day.dayName}>
                            {day.dayChar}
                        </DayButton>
                    )
                })}
            </DaysCreationCard>
            <img src="assets/trash-outline.svg" alt="" />
        </StyledHabitoCard>
    )
}

const StyledHabitoCard = styled.div`
    background-color: #ffffff;
    height: 91px;
    width: 340px;
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
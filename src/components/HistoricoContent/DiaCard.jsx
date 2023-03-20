import styled from "styled-components"

export default function DiaCard(props) {
    const { dadosHabito } = props

    return (
        <StyledDiaCard isDone={dadosHabito.done}>
            <h3 data-test="today-habit-name">{dadosHabito.name}</h3>
            
            <button data-test="today-habit-check-btn" disabled={true} >
                <img src="assets/check.svg" alt="" />
            </button>
        </StyledDiaCard>
    )
}

const StyledDiaCard = styled.div`
    position: relative;
    background-color: #ffffff;
    padding-left: 10px;
    height: 94px;
    width: 90vw;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h3 {
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
        background-color: ${(props) => props.isDone ? "#8FC549" : "#ea5766"};
        height: 69px;
        width: 69px;
        border-radius: 5px;
    }
`
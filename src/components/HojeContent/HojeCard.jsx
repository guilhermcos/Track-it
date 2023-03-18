import styled from "styled-components";

export default function HojeCard(props) {
    const { habito } = props;

    return (
        <StyledHojeCard>
            <h1>{habito.name}</h1>
            <h2>
                Sequência atual: {habito.currentSequence} dias
                <br></br>
                Seu recorde: {habito.highestSequence} dias
            </h2>
            <button>
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

    }
    h2 {
        margin-top: 7px;
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
        background-color: #8FC549;
        height: 69px;
        width: 69px;
        border-radius: 5px;
    }
`
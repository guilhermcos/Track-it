import styled from "styled-components";

export default function HabitosContent() {
    return (
        <HabitosContainer>
            <div>
                <h2>Meus hábitos</h2>
                <button>+</button>
            </div>
        </HabitosContainer>
    )
}

const HabitosContainer = styled.main`
    div:first-of-type{
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
    }
`
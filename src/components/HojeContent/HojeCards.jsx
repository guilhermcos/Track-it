import styled from "styled-components";
import HojeCard from "./HojeCard";

export default function HojeCards(props) {
    const { habitosHoje } = props

    return (
        <StyledHojeCards>
            {habitosHoje.map((habito) => {
                return (
                    <HojeCard 
                    key={habito.id}
                    habito={habito} />    
                )
            })}
        </StyledHojeCards>
    )
}

const StyledHojeCards = styled.div`
    align-items: center;
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`


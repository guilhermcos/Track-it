import styled from "styled-components";
import DiaCard from "./DiaCard";

export default function DiaHistorico(props) {
    const { dadosDia } = props;
    return (
        <DadosDoDia>
            <h4>Histórico dia {dadosDia.day}:</h4>
            <CheckBoxesDia>
                {dadosDia.habits.map((dia) => {
                    return (
                        <DiaCard
                            key={dia.name}
                            dadosHabito={dia} />
                    )
                })
                }
            </CheckBoxesDia>
        </DadosDoDia>
    )

}

const CheckBoxesDia = styled.div`
    align-items: center;
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 120px;
`

const DadosDoDia = styled.div`
    margin-top: 15px;
    width: 90%;
    h4{
        color: #126BA5;
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        width: 90%;
    }
`
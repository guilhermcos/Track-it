import HabitoCard from "./HabitoCard";
import axios from "axios";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../App";

export default function UserHabitos(props) {
    const loginData = useContext(LoginContext);
    const { daysCheckBox, setHabitosUsuario, habitosUsuario } = props;

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${loginData.token}`
            }
        };
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.get(URL, config);
        promise.then((res) => {
            setHabitosUsuario(res.data);
        });
        promise.catch((err) => {
            console.log(err.data);
        });
    }, []);

    if (habitosUsuario === undefined || habitosUsuario.length === 0) {
        return (
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        )
    }

    return (
        habitosUsuario.map((habito) => {
            return (
                <HabitoCard
                setHabitosUsuario={setHabitosUsuario}
                key={habito.id}
                habito={habito}
                daysCheckBox={daysCheckBox} />
            )
        })
    )
}
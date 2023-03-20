import HabitoCard from "./HabitoCard";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../App";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function UserHabitos(props) {
    const loginData = useContext(LoginContext);
    const { daysCheckBox, setHabitosUsuario, habitosUsuario } = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (loginData !== undefined) {
            setIsLoading(true);
            const config = {
                headers: {
                    "Authorization": `Bearer ${loginData.token}`
                }
            };
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
            const promise = axios.get(URL, config);
            promise.then((res) => {
                setHabitosUsuario(res.data);
                setIsLoading(false);
            });
            promise.catch((err) => {
                console.log(err.data);
                setIsLoading(false);
            });
        } else {
            return
        }
    }, []);

    if (isLoading === true) {
        return <ThreeDots />
    }

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
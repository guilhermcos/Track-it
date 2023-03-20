import styled from "styled-components"
import Calendar from "react-calendar"
import { useContext, useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { LoginContext } from "../../App";

export default function HistoricoContent() {
    const loginData = useContext(LoginContext);
    const [value, onChange] = useState(new Date());
    const [datasCompletas, setDatasCompletas] = useState([]);
    const [datasIncompletas, setDatasIncompletas] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${loginData.token}`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
        const promise = axios.get(URL, config);
        promise.then((res) => {
            separarDatas(res.data);
            console.log(res.data);
        });
        promise.catch((err) => {
            console.log(err.response.data);
        });
    }, []);

    function separarDatas(data) {
        const completedDates = [];
        const incompleteDates = [];

        data.forEach((day) => {
            let allCompleted = true;
            let atLeastOneIncomplete = false;

            day.habits.forEach((habit) => {
                if (!habit.done) {
                    allCompleted = false;
                    atLeastOneIncomplete = true;
                }
            });

            if (allCompleted) {
                completedDates.push(day.day);
            } else if (atLeastOneIncomplete) {
                incompleteDates.push(day.day);
            }
        });


        setDatasCompletas(completedDates);
        setDatasIncompletas(incompleteDates);
    }

    // function tileContent({ date, view }) {
    //     const formattedDate = date.toLocaleDateString();
    //     let className = '';

    //     if (view === 'month') {
    //         if (datasCompletas.includes(formattedDate)) {
    //             className = 'completed';
    //         } else if (datasIncompletas.includes(formattedDate)) {
    //             className = 'incomplete';
    //         }
    //     }

    //     return <TiledDiv iscomplete={className} className={`tile ${className}`}></TiledDiv>;
    // };

    function tileClassName({ date, view }) {
        const formattedDate = date.toLocaleDateString();
        let className = '';

        if (view === 'month') {
            if (datasCompletas.includes(formattedDate)) {
                className = 'completed';
            } else if (datasIncompletas.includes(formattedDate)) {
                className = 'incomplete';
            }
        }

        return className;
    };

    return (
        <HistoricoContainer>
            <h1>Histórico</h1>
            <Calendar tileClassName={tileClassName} onChange={onChange} value={value} />
        </HistoricoContainer>
    )

}

const TiledDiv = styled.div`
    ${(props) => {
        if (props.iscomplete === "incomplete") {
            return "background-color: #ea5766;"
        } else if (props.iscomplete === "completed") {
            return "background-color: #8cc654;"
        }
    }}
    width: 100%;
    height: 100%;
`

const HistoricoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: #126BA5;
        margin-top: 100px;
        font-family: Lexend Deca;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        width: 90%;
    }
    .react-calendar {
        border: none;
        margin-top: 11px;
        border-radius: 10px;
    }
    .react-calendar__navigation span{
        font-family: Lexend Deca;
        font-size: 15px;
    }
    .react-calendar__month-view__days abbr{
        font-family: Lexend Deca;
    }
    .react-calendar .incomplete {
        border: 4px solid #ffffff;
        background-color: #ea5766;
        border-radius: 50%;
    }
    .react-calendar .completed {
        border: 4px solid #ffffff;
        background-color: #8cc654;
        border-radius: 50%;
    }
`
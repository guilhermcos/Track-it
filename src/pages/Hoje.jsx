import TopBar from "../components/TopBar/TopBar"
import BottomBar from "../components/BottomBar/BottomBar"
import HojeContent from "../components/HojeContent/HojeContent"
import { useContext, useEffect } from "react"
import { LoginContext } from "../App"
import { useNavigate } from "react-router-dom"


export default function Hoje() {
    const navigate = useNavigate();

    const loginData = useContext(LoginContext);


    return (
        <>
            <TopBar />
            <HojeContent />
            <BottomBar />
        </>
    )
}
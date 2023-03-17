import { Link } from "react-router-dom"
import styled from "styled-components"
import LoginContent from "../components/LoginContent/LoginContent"

export default function Login(props){
    const {loginData, setLoginData } = props

    return (
        <LoginContent loginData={loginData} setLoginData={setLoginData} />
    )
}
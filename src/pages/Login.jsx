import LoginContent from "../components/LoginContent/LoginContent"

export default function Login(props) {
    const { loginData, setLoginData } = props

    return (
        <LoginContent loginData={loginData} setLoginData={setLoginData} />
    )
}
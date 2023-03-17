import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import GlobalStyle from "./globalStyles";
import { useState, createContext } from "react";
export const LoginContext = createContext();

export default function App() {
  const [loginData, setLoginData] = useState();
  console.log(loginData);

  return (
    <>
      <LoginContext.Provider value={loginData}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login loginData={loginData} setLoginData={setLoginData} />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos />} />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  );
} 
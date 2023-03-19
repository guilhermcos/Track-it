import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Hoje from "./pages/Hoje";
import GlobalStyle from "./globalStyles";
import { useState, createContext, useEffect } from "react";
export const LoginContext = createContext();
export const Percentual = createContext();

export default function App() {
  const [loginData, setLoginData] = useState();
  const [percentual, setPercentual] = useState(0);

  return (
    <>
      <Percentual.Provider value={{ percentual: percentual, setPercentual: setPercentual}}>
        <LoginContext.Provider value={loginData}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login loginData={loginData} setLoginData={setLoginData} />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/habitos" element={<Habitos />} />
              <Route path="/hoje" element={<Hoje />} />
            </Routes>
          </BrowserRouter>
        </LoginContext.Provider>
      </Percentual.Provider>
    </>
  );
} 
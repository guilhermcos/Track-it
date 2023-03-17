import styled from "styled-components";
import { useContext } from "react";
import { LoginContext } from "../../App";

export default function TopBar() {
    const userData = useContext(LoginContext);
    console.log(userData);
    return (
        <Topo data-test="header">
            <h1>TrackIt</h1>
            <img src={userData.image} alt="" />
        </Topo>
    )
}

const Topo = styled.header`
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    background-color: #126BA5;
    box-shadow: 0px 8px 8px 0px #00000026;
    height: 70px;
    width: 100%;
    h1 {
        margin-left: 18px;
        color: #ffffff;
        font-family: Playball, sans-serif;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: left;
    }
    img {
        margin-right: 18px;
        border-radius: 50%;
        width: 51px;
        height: 51px;
        object-fit: cover;
    }
`


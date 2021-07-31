import { FC } from "react";
import styled from "styled-components";
import bg from "../../static/header.png"

const XHeader:FC = ({children}) => {

    return <Content>
        <Title>
            <span>{children}</span>
        </Title>
    </Content>
}

export default XHeader

const Content = styled.div`
    height: 0.99rem;
    background-color: #000105;
    background-image: url(${bg});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    background-color: #000517;
    width: 7rem;
    height: 100%;
    color: #8abee4;
    font-size: 0.5rem;
    text-align: center;
    padding-top: 0.05rem;
    box-sizing: border-box;
    span {
        background: linear-gradient(to top, #243b71, #8abee4);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        color: transparent;
    }
`
import { FC } from "react"
import styled from "styled-components"

const XContent:FC = ({children}) => {

    return <Content>
        <div className="inner" >{children}</div>
    </Content>
}

export default XContent

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
        background-color: red;
        width: 24.2rem;
        height: 13.6125rem;
    }
`

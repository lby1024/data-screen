import { FC, useEffect } from "react"
import styled from "styled-components"

const XContent:FC = ({children}) => {

    useEffect(() => {
        window.onresize = () => rem()
        rem()
    }, [])

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
        width: 100rem;
        height: ${100*9/16}rem;
    }
`

function rem() {
    const w = document.documentElement.clientWidth || document.body.clientWidth
    const h = document.documentElement.clientHeight || document.body.clientHeight
    const htmlDom = document.getElementsByTagName('html')[0];
    if(w/h <= 16/9) {
        htmlDom.style.fontSize = `${w/100}px`
    }
    else{
        const width = 16*h/9
        htmlDom.style.fontSize = `${width/100}px`
    }
}
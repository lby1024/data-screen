import { FC, useEffect, useState } from "react"
import styled from "styled-components"

const XContent:FC = ({children}) => {

    const [wh, setWh] = useState({
        width: 160,
        height: 90,
    })

    useEffect(() => {
        window.onresize = () => rem()
        rem()
    }, [])

    function rem() {
        const [ width, height ] = getWH()
        setWh({ width, height })
    }

    return <Content>
        <div style={{background: "red", ...wh}}>{children}</div>
    </Content>
}

export default XContent

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

function getWH() {
    const w = document.documentElement.clientWidth || document.body.clientWidth
    const h = document.documentElement.clientHeight || document.body.clientHeight
    if(w/h <= 16/9) {
        return [w, w*9/16]
    }
    else{
        return [16*h/9, h]
    }
}
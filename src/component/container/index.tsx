import { FC } from "react";
import styled from "styled-components";
import { useScale } from "./use-scale";

const designWidth = 1600
const designHeight = 900

interface IXContainer {
    header: any
    part02: any
}

const XContainer:FC<IXContainer> = (props) => {

    const [scale] = useScale()    

    return <Content scale={scale} width={designWidth} height={designHeight} >
        <div className="part01">{props.header}</div>
        <div className="part02">{props.part02}</div>
        <div className="part03"></div>
        <div className="part04"></div>
        <div className="part05"></div>
        <div className="part06"></div>
        <div className="part07"></div>
        <div className="part08"></div>
    </Content>
}

export default XContainer

const Content = styled.div<{
    scale: number,
    width: number,
    height: number,
}>`
    width: ${p=>p.width}px;
    height: ${p=>p.height}px;
    transform: translate(-50%, -50%) scale(${p=>p.scale});
    background-color: #010310;
    position: fixed;
    left: 50%;
    top: 50%;
    display: grid;
    grid-template-rows: 65.45px 497.84px 240px 1fr;
    grid-template-columns: 247px 244px 571.39px 1fr;
    grid-gap: 18px;
    grid-template-areas: 
        "part01 part01 part01 part01"
        "part02 part03 part04 part05"
        "part06 part06 part07 part05"
        "part08 part08 part08 part08";
    .part01{
        grid-area: part01;
        /* background-color: #142342; */
    }
    .part02{
        grid-area: part02;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* background-color: #142342; */
    }
    .part03{
        grid-area: part03;
        /* background-color: #142342; */
    }
    .part04{
        grid-area: part04;
        /* background-color: #142342; */
    }
    .part05{
        grid-area: part05;
        /* background-color: #142342; */
    }
    .part06{
        grid-area: part06;
        /* background-color: #142342; */
    }
    .part07{
        grid-area: part07;
        /* background-color: #142342; */
    }
    .part08{
        grid-area: part08;
        /* background-color: #142342; */
    }

`
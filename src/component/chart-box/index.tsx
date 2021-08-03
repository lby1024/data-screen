import FlyBox from "component/fly-box";
import { FC } from "react";
import styled from "styled-components";

interface IXChartBox {
    title: string
}

const XChartBox:FC<IXChartBox> = ({title, children}) => {
    return <FlyBox>
        <Content>
            <div className="title" >{title}</div>
            <div className="pan">{children}</div>
        </Content>
    </FlyBox>
}

export default XChartBox

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0f113a;
    .title{
        color: #fff;
        border: 1px solid #0a5299;
        border-top: 0;
        border-radius: 0 0 3px 3px;
        height: 30.22px;
        line-height: 30.22px;
        box-sizing: border-box;
        padding: 0 18.5px;
        font-size: 14px;
    }
    .pan {
        min-height: 100px;
    }
`
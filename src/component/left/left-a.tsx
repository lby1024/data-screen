import { FC } from "react";
import styled from "styled-components";
import XFlyBox from "component/fly-box"

const XLeftA:FC = () => {
    return <XFlyBox>
        <Content> 
            <div className='title' >案发派出所管辖统计</div>
            <div className='chart'></div>
        </Content>
    </XFlyBox>
}

export default XLeftA

const Content = styled.div`
    height: 3.15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        flex: 0;
        font-size: 0.22rem;
        text-align: center;
        padding: 0.1rem 0.28rem;
        border: 1px solid #0a5299;
        border-radius: 0 0 .08rem .08rem;
    }
    .chart {
        width: 100%;
        flex: 1;
        background-color: sienna;
    }

`

import { FC } from "react";
import styled from "styled-components";

const XFooter:FC = () => {
    return <Content>
        <span>以上数据均随机生成 @boyang</span>
    </Content>
}

export default XFooter

const Content = styled.div`
    border: 1px solid #0e2d59;
    border-radius: 3px;
    background-color: #0c0d2b;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 12px;
    height: 100%;
`
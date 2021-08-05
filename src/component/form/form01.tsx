import { FC } from "react";
import styled from "styled-components";
import XChartBox from "component/chart-box";

const XForm01:FC = () => {

    return (
        <XChartBox title="往年战果数对比">
            <Content>
                
            </Content>
        </XChartBox>
    )
}

export default XForm01

const Content = styled.div`
    width: 480px;
    height: 210px;
`
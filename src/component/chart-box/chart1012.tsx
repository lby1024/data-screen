import { FC } from "react";
import styled from "styled-components";
import XChartBox from ".";
import { useChart10 } from "./use-chart10";
import { useChart11 } from "./use-chart11";
import { useChart12 } from "./use-chart12";

const XChart1012:FC = () => {

    const [chart10] = useChart10()
    const [chart11] = useChart11()
    const [chart12] = useChart12()

    return (
        <XChartBox title="犯罪人员年龄段分布">
            <Content>
                <div className="left" ref={chart10} ></div>
                <div className="center" ref={chart11} ></div>
                <div className="right" ref={chart12} ></div>
            </Content>
        </XChartBox>
    )
}

export default XChart1012

const Content = styled.div`
    width: 570px;
    height: 210px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;
    .left {
        flex: 1;
    }
    .center {
        flex: 1;
    }
    .right {
        flex: 1;
        border: 1px solid #08397d;
    }
`
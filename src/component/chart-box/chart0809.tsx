import { FC } from "react";
import styled from "styled-components";
import XChartBox from ".";
import { useChart06 } from "./use-chart06";
import { useChart07 } from "./use-chart07";

const XChart0809:FC = () => {

    const [chart06] = useChart06()
    const [chart07] = useChart07()

    return (
        <XChartBox title="案发街道统计">
            <Content>
                <div className="left" ref={chart06} ></div>
                <div className="right" ref={chart07} ></div>
            </Content>
        </XChartBox>
    )
}

export default XChart0809

const Content = styled.div`
    width: 480px;
    height: 177px;
    display: flex;
    justify-content: space-between;
    .left {
        flex: 1;
    }
    .right {
        flex: 1;
    }
`
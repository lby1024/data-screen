import { FC } from "react";
import styled from "styled-components";
import XChartBox from ".";
import { useChart08 } from "./use-chart08";
import { useChart09 } from "./use-chart09";

const XChart0809:FC = () => {

    const [chart08] = useChart08()
    const [chart09] = useChart09()

    return (
        <XChartBox title="案发街道统计">
            <Content>
                <div className="left" ref={chart08} ></div>
                <div className="right" ref={chart09} ></div>
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
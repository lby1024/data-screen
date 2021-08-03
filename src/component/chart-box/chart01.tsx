import { FC } from "react";
import styled from "styled-components";
import XChartBox from ".";
import { useChart01 } from "./use-chart01";

const XChart01:FC = () => {

    const [chart] = useChart01()

    return (
        <XChartBox title="案发派出所管辖统计">
            <Chart ref={chart} />
        </XChartBox>
    )
}

export default XChart01

const Chart = styled.div`
    height: 176px;
    width: 245px;
`
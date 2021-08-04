import { FC } from "react";
import styled from "styled-components";
import XChartBox from ".";
import { useChart04 } from "./use-chart04";

const XChart04:FC = () => {

    const [chart] = useChart04()

    return (
        <XChartBox title="案发时段分析">
            <Chart ref={chart} />
        </XChartBox>
    )
}

export default XChart04

const Chart = styled.div`
    width: 242px;
    height: 208px;
`
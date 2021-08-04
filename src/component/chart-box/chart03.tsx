import { FC } from "react";
import styled from "styled-components";
import XChartBox from ".";
import { useChart03 } from "./use-chart03";

const XChart03:FC = () => {

    const [chart] = useChart03()

    return (
        <XChartBox title="案件趋势分析">
            <Chart ref={chart} />
        </XChartBox>
    )
}

export default XChart03

const Chart = styled.div`
    height: 208px;
    width: 242px;
`
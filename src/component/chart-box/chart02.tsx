import { FC } from "react";
import styled from "styled-components";
import XChartBox from ".";
import { useChart02 } from "./use-chart02";

const XChart02:FC = () => {

    const [chart] = useChart02()

    return (
        <XChartBox title="案件破获排名">
            <Box>
                <Chart ref={chart} />
            </Box>
        </XChartBox>
    )
}

export default XChart02

const Chart = styled.div`
    height: 238px;
    width: 245px;
`

const Box = styled.div`
    padding-bottom: 10px;
`
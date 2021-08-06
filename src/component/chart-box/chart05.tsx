import { FC } from "react";
import styled from "styled-components";
import XChartBox from ".";
import { useChart05 } from "./use-chart05";

const XChart05:FC = () => {

    const [chart] = useChart05()

    return (
        <Content>
            <XChartBox title="全市犯罪人员籍贯分布地" className="box" fly={true} >
                <div className="pan" ref={chart} >

                </div>
            </XChartBox>
        </Content>
    )
}

export default XChart05

const Content = styled.div`
    .box {
        background-color: #010310;
    }
    .pan{
        height: 466px;
        width: 569.39px;
    }
`
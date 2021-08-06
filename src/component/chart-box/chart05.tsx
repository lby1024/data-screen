import { FC } from "react";
import styled from "styled-components";
import XChartBox from ".";
import { useChart01 } from "./use-chart01";

const XChart05:FC = () => {

    // const [chart] = useChart01()

    return (
        <Content>
            <XChartBox title="全市犯罪人员籍贯分布地" className="box" fly={true} >
                <div className="pan">

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
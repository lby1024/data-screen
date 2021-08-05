import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "hooks/use-data";
import { dataChart01, IData } from "utils/api";

const option: any = {
    textStyle: {
        // fontSize: 240,
        color: '#79839E'
    },
    xAxis: {
        type: 'category',
        data: ['金牛', '青羊', '锦江', '成华', '龙泉', '郫都', '新都', '双流', '大丰'],
        axisTick: {show: false},
        axisLabel: {
            formatter: (v: string) => v.split("").join("\n")
        },
        axisLine: {
            lineStyle: {color: '#083B70'}
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {show: false},
        axisLine: {
            show: true,
            lineStyle: {color: '#083B70'}
        },
    },
    grid: {
        x: 40,
        y: 40,
        x2: 40,
        y2: 40,
    },
    series: [{
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
        type: 'bar',
        
    }]
};

export function useChart01() {
    const myChart = useRef<echarts.ECharts>()
    const chart = useRef<any>()
    const [data] = useData<IData>(dataChart01)

    useEffect(() => {
        if(!data) return
        let o = {...option}
        o.xAxis.data = data.x
        o.series[0].data = data.series
        myChart.current?.setOption(o)        
    }, [data])
    

    useEffect(() => { 
        myChart.current = echarts.init(chart.current)
    }, [])

    return [chart]
}

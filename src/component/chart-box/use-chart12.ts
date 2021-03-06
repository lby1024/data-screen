import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "hooks/use-data";
import { dataChart04, dataChart12, IData03 } from "utils/api";

const option: any = {
    title: {
        text: "犯罪年龄趋势图",
        top: 5,
        left: "26%",
        textStyle:{
            color: "#7ab6db",
            fontSize:12,
            align:"center"
        }
    },
    xAxis: {
        type: 'category',
        data: [0, 18, 28, 38, 48, 58, 68, 78],
        splitLine: {show: true, lineStyle: {color: "#073e78"}},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {interval: 0, fontSize: 9},
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
        axisTick: {show: false},
        axisLine: {show: false},
        splitLine: {show: true, lineStyle: {color: "#073e78"}},
        axisLabel: {
            fontSize: 9,
            formatter: (v: number) => v*100+"%"
        },        
    },
    series: [{
        data: [0.3, 0.2,0.7,0.5,0.3, 0.2,0.7,0.5],
        type: 'line',
        symbol: "circle",
        symbolSize: 6,
        color: "#f7a110",
        lineStyle: {width: 1},
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0, color: 'rgba(247,161,16,0.8)'}, 
                {offset: 1, color: 'rgba(247,161,16,0.3)'}
            ])
        }
    }],
    grid: {
        left: 10,
        right: 10,
        top: 36,
        bottom: 10,
        containLabel: true
    },    
};

export function useChart12() {
    const myChart = useRef<echarts.ECharts>()
    const chart = useRef<any>()
    const [data] = useData<IData03>(dataChart12, 7000)

    useEffect(() => {
        if(!data) return
        let o = {...option}
        o.xAxis.data = data.x
        o.series[0].data = data.series[0]
        myChart.current?.setOption(o) 
    }, [data])
    
    useEffect(() => { 
        myChart.current = echarts.init(chart.current)
        myChart.current?.setOption(option) 
    }, [])

    return [chart]
}

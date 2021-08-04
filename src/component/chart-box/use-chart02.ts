import { useEffect, useRef, useState } from "react"
import * as echarts from "echarts";
import { useDataChart02 } from "./use-data-chart02";

const option: any = {
    textStyle: {
        fontSize: 12,
        color: '#79839E'
    },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     }
    // },
    legend: {
        data: ['破案排名1', '破案排名2'],
        orient: 'vertical', // horizontal
        right: 10,
        bottom: "bottom",
        itemWidth: 12,
        itemHeight: 8,
        textStyle: {color: "#fff", fontSize: 11}
    },
    grid: {
        left: 10,
        right: 10,
        bottom: 40,
        top: 20,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {show: false},
        splitLine: {show: false},
    },
    yAxis: {
        type: 'category',
        data: ['金牛', '青羊', '锦江', '成华', '龙泉', '郫都', '新都', '双流', '大丰'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#79839E",
                width: 3
            }
        },
        axisTick: {show: false},
    },
    series: [
        {
            name: '破案排名1',
            type: 'bar',
            data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,[
                    {offset: 0, color: '#1e3bf9'},
                    {offset: 1, color: '#039dff'}
                ])
            },
        },
        {
            name: '破案排名2',
            type: 'bar',
            data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,[
                    {offset: 0, color: '#b72be8'},
                    {offset: 1, color: '#6a70e7'}
                ])
            },
        }
    ]
};

export function useChart02() {
    const myChart = useRef<echarts.ECharts>()
    const chart = useRef<any>()
    const [data] = useDataChart02()

    useEffect(() => {
        if(!data) return
        let o = {...option}
        o.xAxis.data = data.x
        o.series[0].data = data.series
        o.series[1].data = data.series02
        myChart.current?.setOption(o) 
    }, [data])

    useEffect(() => { 
        myChart.current = echarts.init(chart.current)
    }, [])

    return [chart]
}

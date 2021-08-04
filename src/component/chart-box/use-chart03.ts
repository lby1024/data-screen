import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "hooks/use-data";
import { dataChart03, IData03 } from "utils/api";

const option: any = {
    textStyle: {
        fontSize: 6,
        color: '#79839E'
    },
    legend: {
        data: ['抢劫', '醉驾', '盗窃', '故意杀人', '故意伤人'],
        bottom: 10,
        textStyle: {color: "#fff", fontSize: 9},
        itemWidth: 15,
        itemHeight: 8,
    },
    grid: {
        left: 10,
        right: 16,
        top: 10,
        bottom: 50,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['2013','2014','2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        boundaryGap: false,
        splitLine: {show: true, lineStyle: {color: "#073e78"}},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {interval: 0, fontSize: 9},
    },
    yAxis: {
        type: 'value',
        splitLine: {show: true, lineStyle: {color: "#073e78"}},
        axisLabel: {
            fontSize: 9,
            formatter: (v: number) => v*100+"%"
        },
    },
    series: [
        {
            name: '抢劫',
            data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09],
        },
        {
            name: '醉驾',
            data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09],
        },
        {
            name: '盗窃',
            data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09],
        },
        {
            name: '故意杀人',
            data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09],
        },
        {
            name: '故意伤人',
            data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09],
        }
    ].map(o => ({
        ...o,
        type: 'line',
        symbol: "circle",
        symbolSize: 6,
        lineStyle: {width: 1}        
    }))
};

export function useChart03() {
    const myChart = useRef<echarts.ECharts>()
    const chart = useRef<any>()
    const [data] = useData<IData03>(dataChart03)

    useEffect(() => {
        if(!data) return
        let o = {...option}
        o.xAxis.data = data.x
        data.series.map((item, index) => {
            o.series[index].data = item
        })
        myChart.current?.setOption(o) 
    }, [data])

    useEffect(() => { 
        myChart.current = echarts.init(chart.current)
    }, [])

    return [chart]
}

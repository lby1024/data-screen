import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "hooks/use-data";
import { dataChart05, IPositon } from "utils/api";
import china from "static/china.json"

const option: any = {
    title: {
        text: "此地图仅显示了中国的部分区域",
        bottom: 10,
        right: 10,
        textStyle: {fontSize: 12}
    },
    geo: {
        map: "CN",
        zoom: 1.5,
        top: 100,
        itemStyle: {
            areaColor: "#010d3e",
            borderColor: "#0086cf"
        }
    },
    series: [
        {
            name: '案件数量', // series名称
            // type: 'scatter', // series图表类型
            type: 'effectScatter', // series图表类型
            coordinateSystem: 'geo', // series坐标系类型
            symbolSize: (val: number[]) => val[2] / 10, // 半径
            rippleEffect: {brushType: 'stroke'},
            zlevel: 1,
            itemStyle: {
                color: 'rgba(247, 161, 16, .7)',
                shadowBlur: 10,
                shadowColor: '#333'
            },
            data: [
                { name: "四川省", value: [104.065735, 30.659462, 300] },
                { name: "北京", value: [116.46,39.92, 190] },
                { name: "上海", value: [121.48,31.22, 220] },
                { name: "重庆", value: [106.54,29.59, 342] },
                { name: "广州", value: [113.23,23.16, 223] }
            ],
        },{
            name: '案件数量', // series名称
            type: 'scatter', // series图表类型
            coordinateSystem: 'geo', // series坐标系类型
            symbolSize: (val: number[]) => val[2] / 10, // 半径
            data: [],
        },
    ]
};

export function useChart05() {
    const myChart = useRef<echarts.ECharts>()
    const chart = useRef<any>()
    const [data] = useData<IPositon[][]>(dataChart05)

    useEffect(() => {
        if(!data) return
        const o = {...option}
        o.series[0].data = data[0]
        o.series[1].data = data[1]
        myChart.current?.setOption(o)
    }, [data])

    useEffect(() => { 
        myChart.current = echarts.init(chart.current)
        echarts.registerMap('CN', china);
    }, [])

    return [chart]
}

import { useEffect, useRef } from "react"
import * as echarts from "echarts";

const option: any = {
    legend: {
        orient: 'vertical',
        left: 5,
        bottom: 10,
        textStyle: {color: "#fff", fontSize: 10},
        itemWidth: 11,
        itemHeight: 6,
        height: 210,
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '77%',
            center: ['65%', '44%'],
            labelLine: {
                show: false
            },
            label: {
                show: false,
            },
            data: [
                {value: 30, name: '二仙桥 30%'},
                {value: 10, name: '九眼桥 10%'},
                {value: 20, name: '升仙湖 20%'},
                {value: 5, name: '玉林路 5%'},
                {value: 15, name: '盐道街 15%'},
                {value: 12, name: '抚琴路 12%'},
                {value: 11, name: '三瓦窑 11%'},
                {value: 7, name: '东坡路 7%'},
            ],
        }
    ]
};

export function useChart08() {
    const myChart = useRef<echarts.ECharts>()
    const chart = useRef<any>()
    
    useEffect(() => { 
        myChart.current = echarts.init(chart.current)
        myChart.current?.setOption(option) 
    }, [])

    return [chart]
}

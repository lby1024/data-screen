import { useEffect, useRef } from "react"
import * as echarts from "echarts";

const option: any = {
    backgroundColor: "#0f113a",
    textStyle: { fontSize: 10 },
    legend: {
        bottom: 10,
        textStyle: {color: "#fff", fontSize: 10},
        itemWidth: 15,
        itemHeight: 8,        
    },
    series: [
        {
            startAngle:-10, //起始角度
            type: 'pie',
            radius: [15, 50],
            center: ['50%', '44%'],
            roseType: 'area',
            itemStyle: { borderRadius: 2 },
            data: [
                {value: 36, name: '刑事'},
                {value: 20, name: '民事'},
                {value: 18, name: '经济'},
                {value: 24, name: '其他'},
            ]
        }
    ]
};

export function useChart07() {
    const myChart = useRef<echarts.ECharts>()
    const chart = useRef<any>()
    
    useEffect(() => { 
        myChart.current = echarts.init(chart.current)
        myChart.current?.setOption(option) 
    }, [])

    return [chart]
}

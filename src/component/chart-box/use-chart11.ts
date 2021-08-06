import { useEffect, useRef } from "react"
import * as echarts from "echarts";

const option = {
    title:{
        text:"性别",
        left:"center",
        top:"32%",
        textStyle:{
            color:"#32a4fa",
            fontSize:24,
            align:"center"
        }
    },
    color: ["#856bec", "#f46064", "#f28e1b", "#1bdb7c", "#32a4fa"],
    legend: {
        bottom: 0,
        left: 'center',
        textStyle: {color: "#fff", fontSize: 10},
        itemWidth: 15,
        itemHeight: 8,  
    },
    series: [
        {
            name: '性别',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ["50%", '40%'],
            label: {
                show: true,
                fontSize: 12,
                position: "inside",
                color: "#fff",
                formatter(v: any) {
                    return v.value+"%"
                }
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                borderRadius: 1,
                borderColor: '#0f113a',
                borderWidth: 2
            },
            data: [
                {value: 10, name: '10-20'},
                {value: 20, name: '20-30'},
                {value: 30, name: '30-40'},
                {value: 28, name: '40-50'},
                {value: 12, name: '50-60'},
            ]
        }
    ]
};

export function useChart11() {
    const myChart = useRef<echarts.ECharts>()
    const chart = useRef<any>()
    
    useEffect(() => { 
        myChart.current = echarts.init(chart.current)
        myChart.current?.setOption(option) 
    }, [])

    return [chart]
}

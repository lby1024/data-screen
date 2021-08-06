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
    color: ["#8d70f8", "#32a4fa"],
    legend: {
        bottom: '5%',
        left: 'center',
        textStyle: {color: "#fff", fontSize: 12},
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
                {value: 34, name: '女'},
                {value: 66, name: '男'},
            ]
        }
    ]
};

export function useChart10() {
    const myChart = useRef<echarts.ECharts>()
    const chart = useRef<any>()
    
    useEffect(() => { 
        myChart.current = echarts.init(chart.current)
        myChart.current?.setOption(option) 
    }, [])

    return [chart]
}

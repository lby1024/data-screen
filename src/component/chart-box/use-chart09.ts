import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "hooks/use-data";
import { dataChart04, dataChart06, dataChart08, IData03 } from "utils/api";

const option: any = {
    textStyle: {
        color: '#79839E'
    },
    grid: {
        left: 10,
        right: 10,
        bottom: 10,
        top: 20,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick: {show: false},
        axisLine: {
            show: true,
            lineStyle: {color: '#083B70'}
        },
        axisLabel: {
            interval: 0, 
            fontSize: 9,
            formatter: (v: string) => {
                let arr = v.split("");
                arr.splice(2, 0, "\n");
              return arr.join("");
            }
        },
        data: ['二仙桥','九眼桥','升仙湖','玉林路','盐道街','抚琴路','三瓦窑','东坡路']
    },
    yAxis: {
        type: 'value',
        splitLine: {show: false},
        axisLine: {
            show: true,
            lineStyle: {color: '#083B70'}
        },
    },
    series: [{
        data: [120, 200, 150, 80, 70, 70, 70, 70],
        type: 'bar',
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[
                {offset: 0, color: '#039dff'},
                {offset: 1, color: '#1e3bf9'},
            ])
        },
    }]
};

export function useChart09() {
    const myChart = useRef<echarts.ECharts>()
    const chart = useRef<any>()
    const [data] = useData<IData03>(dataChart08, 11000)

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

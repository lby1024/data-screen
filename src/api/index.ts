export interface IData {
    x: string[]
    series: number[]
}

function num(max: number, min=10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

export function dataChart01(): Promise<IData> {
    return new Promise(resolve => {
        const Timer = setTimeout(() => {
            resolve({
                x: ['金牛', '青羊', '锦江', '成华', '龙泉', '郫都', '新都', '双流', '大丰'],
                series: [num(50), num(50), num(50), num(50), num(50), num(50), num(50), num(50), num(50)]
            })
        }, 500)
    })
}
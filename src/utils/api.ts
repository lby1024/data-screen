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

export interface IData02 extends IData {
    series02: number[]
}

export function dataChart02(): Promise<IData02> {
    return new Promise(resolve => {
        const Timer = setTimeout(() => {
            resolve({
                x: ['金牛', '青羊', '锦江', '成华', '龙泉', '郫都', '新都', '双流', '大丰'],
                series: [num(50), num(50), num(50), num(50), num(50), num(50), num(50), num(50), num(50)],
                series02: [num(50), num(50), num(50), num(50), num(50), num(50), num(50), num(50), num(50)]
            })
        }, 500)
    })
}

type TSeriesItem = number[]

export interface IData03 {
    x: (string|number)[],
    series: TSeriesItem[]
}


export function dataChart03(): Promise<IData03> {
    return new Promise(resolve => {
        const Timer = setTimeout(() => {
            resolve({
                x: ['2013','2014','2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                series: [
                    [num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100],
                    [num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100],
                    [num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100],
                    [num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100],
                    [num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100],
                ],
            })
        }, 500)
    })
}

export function dataChart04(): Promise<IData03> {
    const start = num(90)/100
    return new Promise(resolve => {
        const Timer = setTimeout(() => {
            resolve({
                x: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                series: [
                    [start, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, start],
                ],
            })
        }, 500)
    })
}

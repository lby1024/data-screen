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
        setTimeout(() => {
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
        setTimeout(() => {
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
        setTimeout(() => {
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
        setTimeout(() => {
            resolve({
                x: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                series: [
                    [start, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, start],
                ],
            })
        }, 500)
    })
}

export function dataChart06(): Promise<IData03> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                x: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
                series: [
                    [num(200), num(200), num(200), num(200), num(200)],
                ],
            })
        }, 500)
    })
}

export function dataChart08(): Promise<IData03> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                x: ['二仙桥','九眼桥','升仙湖','玉林路','盐道街','抚琴路','三瓦窑','东坡路'],
                series: [
                    [num(200), num(200), num(200), num(200), num(200), num(200), num(200), num(200)],
                ],
            })
        }, 500)
    })
}

export function dataChart12(): Promise<IData03> {
    const start = num(90)/100
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                x: [0, 18, 28, 38, 48, 58, 68, 78],
                series: [
                    [start, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, num(90)/100, start],
                ],
            })
        }, 500)
    })
}

type TPieItem = {
    name: string,
    value: number
}
export interface IDataPie {
    series: TPieItem[]
}


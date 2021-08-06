import { dataChart03, IData03 } from "utils/api";
import { useEffect, useState } from "react";

type TFn = () => Promise<any>

export function useData<T>(fn: TFn, time=3000) {
    const [data, setData] = useState<T|null>(null)

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const data: T = await fn()
        setData(data)
        const timer = setTimeout(() => {
            getData()
            clearTimeout(timer)
        }, time)
    }

    return [data]
}
import { dataChart01, IData } from "api";
import { useEffect, useState } from "react";

export function useDataChart01() {
    const [data, setData] = useState<IData|null>(null)

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const data = await dataChart01()
        setData(data)
        const timer = setTimeout(() => {
            getData()
            clearTimeout(timer)
        }, 3000)
    }

    return [data]
}
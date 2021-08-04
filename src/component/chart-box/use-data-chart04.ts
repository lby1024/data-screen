import { dataChart03, IData03 } from "utils/api";
import { useEffect, useState } from "react";

export function useDataChart03() {
    const [data, setData] = useState<IData03|null>(null)

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const data = await dataChart03()
        setData(data)
        const timer = setTimeout(() => {
            getData()
            clearTimeout(timer)
        }, 3000)
    }


    return [data]
}
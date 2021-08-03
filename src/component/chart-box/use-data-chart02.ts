import { dataChart02, IData02 } from "api";
import { useEffect, useState } from "react";

export function useDataChart02() {
    const [data, setData] = useState<IData02|null>(null)

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const data = await dataChart02()
        setData(data)
        const timer = setTimeout(() => {
            getData()
            clearTimeout(timer)
        }, 3000)
    }

    return [data]
}
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getData } from "../../service/getData";

function CategoryPage() {

    const { cat } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const apiData = await getData(`category/${cat}`)
            setData(apiData)
        })()
    }, [cat])


    return (
        <div>
            <ul>

                {data && data?.map((item:any) => {
                    return (
                    <li>{item.id}</li>
                    )
                })}
            </ul>
            menim categoriyalarim
        </div>
    )
}

export default CategoryPage
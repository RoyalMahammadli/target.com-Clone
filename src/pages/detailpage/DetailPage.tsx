import { useEffect, useState } from 'react'
import './DetailPage.css'
import { getData } from '../../service/getData'
import { useParams } from 'react-router-dom'
function DetailPage() {
    const [data, setData] = useState<any>({})
    const { id } = useParams()
    useEffect(() => {
        (async () => {
            const apiData = await getData(`${id}`)
            setData(apiData)
            console.log(apiData);

        })()
    }, [id])
    return (
        <div>
            <ul>
                <li>{data?.title}</li>
                <li>{data?.description}</li>
                <li>{data?.price}</li>
                <li>{data?.description}</li>
            </ul>

        </div>
    )
}

export default DetailPage
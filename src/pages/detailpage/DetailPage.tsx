import { Rate } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getData } from '../../service/getData'
import { addToBasket } from '../../store/slices/basketSlice'
import './DetailPage.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillHeartPulseFill } from 'react-icons/bs'
function DetailPage() {
    const [clicked,setClicked]=useState<boolean>(false)
    const [data, setData] = useState<any>({})
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            const apiData = await getData(`${id}`)
            setData(apiData)
            // console.log(apiData);
            // console.log(Object.entries(data));
        })()
    }, [id])

    const handleClick = () => {
        dispatch(addToBasket(data))
        // console.log(data);
    }
    return (
        <div className='detail-page'>
            <div className="leftSide">
                <figure>
                    <img src={data?.image} alt="" />
                    <div className='heart' onClick={()=>setClicked(!clicked)}>
                        {!clicked ? < AiOutlineHeart role='button' /> : <BsFillHeartPulseFill />}

                    </div>
                </figure>

            </div>
            <div className="rightSide">
                <p><b>{data?.title}</b></p>
                <Rate allowHalf value={data?.rating?.rate} />
                <p className="description"><b>About:</b>{data.description}</p>
                <p> <span> ${data?.price}</span></p>
                <p><b>İn Stock:</b> {data?.rating?.count}</p>
                <button onClick={handleClick}>Add to cart</button>
            </div>
        </div>
    )
}

export default DetailPage
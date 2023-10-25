import { useState, useEffect } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import { getData } from '../../../service/getData'


function MyDropdown() {
    const [open, setOpen] = useState<boolean>(false)
    const [data, setData] = useState<string[] | null>([])
    const { cat } = useParams()
    const handleDropdown = () => {
        setOpen(!open)
    }

    useEffect(() => {
        (async () => {
            const apiData = await getData(`categories`)
            setData(apiData)
            console.log(cat);

        })()
    }, [])


    return (
        <div onClick={handleDropdown} className='item'>
            <p>Categories</p>
            <span className={!open ? 'down' : 'up'}><AiOutlineDown /> </span>
            <ul className={!open ? 'none' : 'dropdown'}>
                {data && data?.map(item => {
                    return (
                        <li><Link to={`/category/${item}`}>{item}</Link></li>
                    )
                })}

            </ul>
        </div>
    )
}

export default MyDropdown


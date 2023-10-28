import { nanoid } from 'nanoid'
import { useContext, useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Context } from '../../../context/Context'
import { getData } from '../../../service/getData'
import './MyDropdown.css'

function MyDropdown() {
    const [data, setData] = useState<string[] | null>([])
    const { open, setOpen } = useContext(Context)
    const handleDropdown = () => {
        setOpen(!open)
        !open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }
    useEffect(() => {
        (async () => {
            const apiData = await getData(`categories`)
            setData(apiData)
        })()
    }, [])

    return (
        <div onClick={handleDropdown} className='item'>
            <p>Categories</p>
            <span className={!open ? 'down' : 'up'}><AiOutlineDown /> </span>
            <ul className={!open ? 'none' : 'dropdown'}>
                <h3>all categories</h3>
                {data && data?.map(item => {
                    return (
                        <li key={nanoid()}><Link to={`/category/${item}`}>{item}</Link></li>
                    )
                })}
            </ul>
            <div className={open ? 'overlay' : ''}></div>

        </div>
    )
}
export default MyDropdown


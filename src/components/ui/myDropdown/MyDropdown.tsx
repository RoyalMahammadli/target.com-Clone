import { useState, useEffect, useContext } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import { getData } from '../../../service/getData'
import './MyDropdown.css'
import DropdownContext from '../../../context/Context'


function MyDropdown() {
    const [data, setData] = useState<string[] | null>([])
    const { cat } = useParams()
    const { open, setOpen } = useContext(DropdownContext)
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
                <h3>all categories</h3>
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


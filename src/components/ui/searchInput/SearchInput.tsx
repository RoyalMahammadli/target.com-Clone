import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsFillMicFill } from 'react-icons/bs'
import { getData } from '../../../service/getData'
import './SearchInput.css'
function SearchInput() {
    const [open, setOpen] = useState<boolean>(false)
    const [data, setData] = useState([])
    const [search, setSearch] = useState<string>('')
    useEffect(() => {
        (async () => {
            const apiData = await getData(`categories`)
            setData(apiData)
            console.log(apiData);
        })()
    }, [])

    const handleInput = () => {
        setOpen(!open)
        !open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }
    const filtermap = data.filter((item: any) => item.toLowerCase().startsWith(search.trim().toLowerCase()))
    return (
        <div className='search'>
            <input
                onChange={(e) => setSearch(e.target.value)}
                onClick={handleInput}
                type="search"
                placeholder='What can we help you find?' />
            <span>
                <BsFillMicFill />
            </span>
            <span>
                <BiSearch />
            </span>
            <ul className={open ? 'input-dropdown ' : 'input-hidden'}>
                {filtermap.map((item: any) => {
                    return (
                        <li key={nanoid()}>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <div className={open ? 'overlay' : ''}></div>

        </div>
    )
}

export default SearchInput
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsFillMicFill } from 'react-icons/bs'
import './SearchInput.css'
function SearchInput() {
    const [open, setOpen] = useState<boolean>(false)

    const handleInput = () => {
        setOpen(!open)
        !open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }
    return (
        <div className='search'>
            <input
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
                <li></li>
            </ul>
            <div className={open ? 'overlay' : ''}></div>

        </div>
    )
}

export default SearchInput
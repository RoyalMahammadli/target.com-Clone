import './SearchInput.css'
import { BsFillMicFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { useContext } from 'react'
import Context from '../../../context/Context'
function SearchInput() {
    const { open, stopScroll } = useContext(Context)
    return (
        <div onClick={() => stopScroll()} className='search'>
            <input type="search" placeholder='What can we help you find?' />
            <span>
                <BsFillMicFill />
            </span>
            <span>
                <BiSearch />
            </span>
        </div>
    )
}

export default SearchInput
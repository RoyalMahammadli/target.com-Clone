import './SearchInput.css'
import { BsFillMicFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
function SearchInput() {
    return (
        <div className='search'>
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
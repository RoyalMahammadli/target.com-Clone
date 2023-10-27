import { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { BsCart } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../store'
import MyDropdown from '../../ui/myDropdown/MyDropdown'
import SearchInput from '../../ui/searchInput/SearchInput'
import './MainNav.css'

function MainNav() {
    const basketItem = useSelector((store: RootState) => store.basket.basket)
    const [sticked, setSticked] = useState<string>('')
    const handleSticky = () => {
        const scrollTop = window.scrollY
        const sticky = scrollTop >= 50 ? 'stick' : ''
        setSticked(sticky)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleSticky);
        return () => {
            window.removeEventListener('scroll', handleSticky)
        }
    }, [])
    return (
        <header className={sticked} >
            <div className="container">
                <nav>
                    <Link to='/'><figure>
                        <img src="../src/assets/img/target_icon.png" alt="icon" />
                    </figure>
                    </Link>
                    <div className="items">
                        <MyDropdown />
                        <p className='item'>Deals</p>
                        <p className='item'>What's New</p>
                        <p className='item'>Pickup & Delivery</p>
                    </div>
                    <SearchInput />
                    <div className="sign">
                        <VscAccount />
                        <span>Sign in</span>
                        <span className='sign-span'><AiOutlineDown /></span>
                    </div>
                    <Link to='/basket'>
                        <div className="basket">
                            <span><BsCart /> <sub className='quantity'>{basketItem.length}</sub></span>
                        </div>
                    </Link>
                </nav>
            </div>
        </header >
    )
}

export default MainNav
import './MainNav.css'
import { Link } from 'react-router-dom'
import { AiOutlineDown } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import { BsCart } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import SearchInput from '../../ui/searchInput/SearchInput'
function MainNav() {
    const [open, setOpen] = useState<boolean>(false)
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

    const handleDropdown = () => {
        setOpen(!open)

    }

    interface myShopItems {
        id: number;
        name: string;
        items?: string[]
    }

    const shopItems: myShopItems[] = [
        {
            id: 1,
            name: 'Categories',
            items: ['yea']

        },
        {
            id: 2,
            name: 'Deals',
            items: ['woman', 'man', 'children']

        },
        {
            id: 3,
            name: "What's New",
            items: ['woman', 'man', 'children']

        },
        {
            id: 4,
            name: 'Pickup & Delivery',
            items: ['woman', 'man', 'children']

        },
    ]

    return (
        <header className={sticked} >
            <div className="container">
                <nav>
                    <Link to='/'><figure>
                        <img src="../src/assets/img/target_icon.png" alt="icon" />
                    </figure>
                    </Link>
                    <div className="items">
                        {shopItems.map(item => {
                            return (
                                <div onClick={handleDropdown} className='item' key={item.id}>
                                    <p >{item.name}</p>
                                    <span className={!open ? 'down' : 'up'}><AiOutlineDown /> </span>
                                    <ul className={!open ? 'none' : 'dropdown'}>
                                        <li>{item.items}</li>
                                        <li>{item.items}</li>
                                        <li>{item.items}</li>
                                    </ul>
                                </div>)
                        })}
                    </div>
                    <SearchInput />
                    <div className="sign">
                        <VscAccount />
                        <span>Sign in</span>
                        <span className='sign-span'><AiOutlineDown /></span>
                    </div>
                    <div className="basket">
                        <span><BsCart /> <sub className='quantity'>3</sub></span>
                    </div>

                </nav>
            </div>

        </header >
    )
}

export default MainNav
import { RootState } from '../../store'
import './Basket.css'
import { useDispatch, useSelector } from 'react-redux'
import { CloseOutlined } from '@ant-design/icons';
import { removeFromBasket } from '../../store/slices/basketSlice';


function Basket() {
    const basketItem = useSelector((store: RootState) => store.basket.basket)
    const dispatch = useDispatch()
    return (
        <div className='myBasket'>
            <div className="container">
                {!basketItem.length ?
                    <section className='basket-1'>
                        <div className='default-empty'>
                            <h1>Your cart is empty</h1>
                            <p>Have an account? Sign in to see your cart</p>
                            <button>Sign in</button>
                            <button className='help-btn'>Help</button>
                            <figure>
                                <img src="../src/assets/img/empty-dog.svg" alt="empty-dog-picture" />
                            </figure>
                        </div>

                    </section>
                    : <div>
                        <h1>Basket</h1>
                        {/* <p>{basketItem.map(item=>{
                            return()
                        })}</p> */}
                        <section className='basket-added-container'>
                            <p>$</p>
                            <div className="basket-added-box">
                                <div className='basket-header'>
                                    <figure>
                                        <img src="../src/assets/img/order-pickup.svg" alt="" />
                                    </figure>
                                    <h3>Order Pickup</h3>
                                </div>
                                <main>
                                    <ul>
                                        {basketItem.map((item: any) => {
                                            return (
                                                <li key={item.id}>
                                                    <figure>
                                                        <img src={item.image} alt="" />
                                                    </figure>
                                                    <span> The price:${item.price}</span>
                                                    <p>The Category:{item.category}</p>
                                                    <p>{item.title}</p>
                                                    <CloseOutlined role='button' onClick={() => dispatch(removeFromBasket(item.id))} />


                                                </li>
                                            )
                                        })}
                                    </ul>
                                </main>
                            </div>
                        </section>
                    </div>
                }
            </div>

        </div>
    )
}

export default Basket
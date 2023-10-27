import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { removeFromBasket } from '../../store/slices/basketSlice';
import './Basket.css';
import ItemRate from '../../components/itemRate';

function Basket() {
    const { basket, totalAmount, totalQuantity } = useSelector((store: RootState) => store.basket)
    const dispatch = useDispatch()
    return (
        <div className='myBasket'>
            <div className="container">
                {!basket.length ?
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
                        <section className='basket-added-container'>
                            <p>Total Quantity:{totalQuantity > 1 ? totalQuantity + ' items' : totalQuantity + ' item'}</p>
                            <p>Total Amount:{totalAmount.toFixed(2)} $</p>
                            <div className="basket-added-box">
                                <div className='basket-header'>
                                    <figure>
                                        <img src="../src/assets/img/order-pickup.svg" alt="" />
                                    </figure>
                                    <h3>Order Pickup</h3>
                                </div>
                                <main>
                                    <ul>
                                        {basket.map((item: any) => {
                                            return (
                                                <li key={item.id}>
                                                    <figure>
                                                        <img src={item.image} alt="" />
                                                    </figure>
                                                    <div className="basket-details1">
                                                        <p>The Category:{item.category}</p>
                                                        <ItemRate {...item} />
                                                        <p>Qty:{item.quantity}</p>
                                                    </div>
                                                    <div className="basket-details2">
                                                        <p className='title'>{item.title}</p>
                                                        <p>Stock:{item.rating?.count}</p>
                                                        <span> The price:${item.price}</span>
                                                    </div>
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
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToBasket } from '../../../store/slices/basketSlice';
import { Drawer } from 'antd';
import './Card.css'
function Card({ title, image, price, category, description, id }: any) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (

        <div className='card'>
            <div className='top'>
                <figure>
                    <img src={image} alt="image" />
                </figure>
                <span>${price}</span>
                <p>{category}</p>
                <p>{title} </p>
            </div>
            <button onClick={showDrawer}>Add to cart</button>
            <Drawer title="Choose option" placement="right" onClose={onClose} open={open}>
                <div className="drawer-top">
                    <figure>
                        <img src={image} alt="cart image" />
                    </figure>
                    <div className="card-details">
                        <p>{title}</p>
                        <p>{category}</p>
                        <p>$ {price}</p>
                    </div>
                </div>
                <div className="drawer-bot">
                    <h5>Get it Thu,Oct 26</h5>
                    <span>Free shipping with Red Card or <u>${price}</u>  orders</span>
                    <button onClick={() => dispatch(addToBasket({ id, image, title, price, category, description }))}>Add to cart</button>
                </div>
            </Drawer>
        </div>
    )
}

export default Card




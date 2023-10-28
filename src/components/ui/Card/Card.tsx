import { CheckOutlined } from '@ant-design/icons';
import { Drawer, Rate } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store';
import { addToBasket } from '../../../store/slices/basketSlice';
import './Card.css';
function Card({ title, image, price, category, id, rating }: any) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(false);
    const { products } = useSelector((store: RootState) => store.data)
    const handleClick = () => {
        const findElement: any = products.find((item: any) => item.id === id)
        dispatch(addToBasket(findElement))
        setClicked(true)
    }
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='card'>
            <Link to={`/${id}`}>
                <div className='top'>
                    <figure>
                        <img src={image} alt="image" />
                    </figure>
                    <span className='price'>${price}</span>
                    <Rate disabled defaultValue={rating?.rate} />
                    <p>{category}</p>
                    <p>{title} </p>
                </div> </Link>
            <button onClick={showDrawer}>Add to cart</button>
            <Drawer title={!clicked ? ' Choose option' : [<CheckOutlined style={{ color: 'green' }} />, 'Added to basket']} placement="right" onClose={onClose} open={open}>
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
                    <button onClick={handleClick}>Add to cart</button>
                </div>
            </Drawer>
        </div >
    )
}

export default Card




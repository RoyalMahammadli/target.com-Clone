import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../service/getData";
import { addToBasket } from "../../store/slices/basketSlice";
import './Category.css';

function CategoryPage() {
    const { catElement } = useParams()
    const [data, setData] = useState([])
    const dispatch = useDispatch()
   
        useEffect(() => {
            (async () => {
                const apiData = await getData(`category/${catElement}`)
                console.log(apiData);
                setData(apiData)
            })()
        }, [catElement])

    return (
        <div className="category">
            <ul>

                {data.length !== 0 && data?.map((item: any) => {
                    return (
                        <li key={nanoid()}>
                            <figure><img src={item.image} alt={item.description} /></figure>
                            <Link to={`/${item.id}`}>  <div className="item-info">
                                <h4>{item.title}</h4>
                                <span>{item.category}</span>
                                <p className="price">${item.price}</p>
                                <p className="sale ">Sale ends today at 5:00am PT</p>
                                <p className="free">free shipping</p>
                                <p>in stock at Cedar Rapids</p>
                            </div>
                            </Link>
                                <button onClick={() => dispatch(addToBasket(item))}>Add to cart</button>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}
export default CategoryPage
import { nanoid } from 'nanoid';
import { storeItems } from '../../const';
import './Findstores.css';
function Findstores() {

    return (
        <div>
            <div className="container">
                <div className="store-text">
                    <h1>Find a store</h1>
                    <p> near 52404</p>
                    <p>view story directory</p>
                    <div className="store-buttons">
                        <button>enter zip or city,state</button>
                        <button>filter by services</button>
                    </div>
                </div>
                <div className="info-box">
                    {storeItems.map(item => {
                        return (
                            <div className="box" key={nanoid()}>
                                <h3>{item.name}</h3>
                                <p>{item.location}</p>
                                <p className={item.open ? 'green' : 'red'} >{item.open ? item.openTime : 'Closed'}</p>
                                <p>{item.tel}</p>
                                <div className="buttons">
                                    <button>{item.button1}</button>
                                    <button>{item.button2}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Findstores
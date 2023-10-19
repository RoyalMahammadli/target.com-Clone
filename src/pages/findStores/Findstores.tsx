import { nanoid } from 'nanoid';
import './Findstores.css'
function Findstores() {
    interface myStoreItems {
        name: string;
        location: string;
        open: boolean;
        openTime: string;
        tel: string,
        button1: string,
        button2: string,
    }

    const storeItems: myStoreItems[] = [
        {
            name: 'Cedar Rapids Southstore details',
            location: '3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214',
            open: true,
            openTime: 'Open today: 7:00am - 10:00pm',
            tel: '319 3964444',
            button1: 'store info',
            button2: 'shop this store'
        },
        {
            name: 'Cedar Rapids Northstore details',
            location: '3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214',
            open: false,
            openTime: 'Open today: 7:00am - 10:00pm',
            tel: '319 3964444',
            button1: 'store info',
            button2: 'shop this store'
        },
        {
            name: 'Coralville',
            location: '3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214',
            open: true,
            openTime: 'Open today: 7:00am - 10:00pm',
            tel: '319 3964444',
            button1: 'store info',
            button2: 'shop this store'
        },
        {
            name: 'Iowa City Downtown',
            location: '3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214',
            open: true,
            openTime: 'Open today: 7:00am - 10:00pm',
            tel: '319 3964444',
            button1: 'store info',
            button2: 'shop this store'
        },
        {
            name: 'Cedar Fallss',
            location: '3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214',
            open: true,
            openTime: 'Open today: 7:00am - 10:00pm',
            tel: '319 3964444',
            button1: 'store info',
            button2: 'shop this store'
        },
        {
            name: 'Dubuque',
            location: '3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214',
            open: false,
            openTime: 'Open today: 7:00am - 10:00pm',
            tel: '319 3964444',
            button1: 'store info',
            button2: 'shop this store'
        },
        {
            name: 'Dubuque',
            location: '3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214',
            open: true,
            openTime: 'Open today: 7:00am - 10:00pm',
            tel: '319 3964444',
            button1: 'store info',
            button2: 'shop this store'
        },
        {
            name: 'Dubuque',
            location: '3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214',
            open: false,
            openTime: 'Open today: 7:00am - 10:00pm',
            tel: '319 3964444',
            button1: 'store info',
            button2: 'shop this store'
        },
        {
            name: 'Dubuque',
            location: '3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214',
            open: true,
            openTime: 'Open today: 7:00am - 10:00pm',
            tel: '319 3964444',
            button1: 'store info',
            button2: 'shop this store'
        }
    ]
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
                                <p className={item.open ? 'green' : 'red'} >{item.open ? item.openTime:'Closed'}</p>
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
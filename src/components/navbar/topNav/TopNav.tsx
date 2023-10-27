import { TextField } from '@mui/material';
import { Drawer } from 'antd';
import { useRef, useState } from 'react';
import { BsBuildingsFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { listItems } from '../../../const';
import './TopNav.css';

function TopNav() {
    const [open, setOpen] = useState<boolean>(false);
    const [open1, setOpen1] = useState<boolean>(false);
    const li = useRef<HTMLLIElement>(null)
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    }
    const showDrawer1 = () => {
        setOpen1(true);
    };
    const onClose1 = () => {
        setOpen1(false);
    }

    return (
        <div className="nav">
            <div className="container">
                <section>
                    <ul className="left">
                        <li ref={li} onClick={showDrawer}><GoLocation />  52404</li>
                        <Drawer title="Update Location " placement="left" onClose={onClose} open={open}>
                            <div className="drawer-div">
                                <p className='p1'>Inventory and delivery options will change based on location.</p>
                                <TextField label="Zip code" focused />
                                <div className='my-location'>
                                    <span> <MdLocationOn style={{ color: " #aa0000", fontSize: '1.6rem' }} /> Use my current location</span>
                                    <button className='update-btn'>Update</button>
                                </div>
                            </div>
                        </Drawer>
                        <li onClick={showDrawer1}><BsBuildingsFill /> Ankeny</li>
                        <Drawer title='Select your store' placement="left" onClose={onClose1} open={open1}>
                            <div className="drawer-div">
                                <p>Item and delivery options may vary by location.</p>
                                <div className="look">
                                    <TextField id="outlined-basic" label="zip or city,state" variant="outlined" />
                                    <button className='look-up'>Look Up</button>
                                </div>
                                <span className='span2'> <MdLocationOn style={{ color: " #aa0000", fontSize: '1.6rem' }} /> Use my current location</span>
                            </div>
                        </Drawer>
                    </ul>
                    <ul className="right">
                        {listItems.map(item => <li key={item.id}><Link style={{ color: 'white' }} to={item.to}> {item.name}</Link></li>)}
                    </ul>
                </section>
            </div>
        </div >
    )
}

export default TopNav









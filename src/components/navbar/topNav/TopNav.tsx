import './TopNav.css'
import { Modal } from 'antd';
import { useState } from 'react';
import { GoLocation } from 'react-icons/go'
import { BsBuildingsFill } from 'react-icons/bs'

function TopNav() {
    interface myListItems {
        name: string;
        id: number;
    }

    const listItems: myListItems[] = [
        {
            name: 'Registry',
            id: 1
        },
        {
            name: 'Weekly Ad',
            id: 2
        },
        {
            name: 'RedCard',
            id: 3
        },
        {
            name: 'Target Circle',
            id: 4
        },

        {
            name: 'Find Stores',
            id: 5
        }
    ]


    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="nav">
            <div className="container">
                <section>
                    <ul className="left">
                        <li onClick={() => setModalOpen(true)}><GoLocation />  52404</li>
                        <Modal
                            title="20px to Top"
                            style={{ position: 'absolute', top: '10px', left: '0px' }}
                            open={modalOpen}
                            onOk={() => setModalOpen(false)}
                            onCancel={() => setModalOpen(false)}
                            okButtonProps={{ disabled: true }}
                            width='15rem'
                        >
                            <p>some contents...</p>
                            <p>some contents...</p>
                            <p>some contents...</p>
                        </Modal>


                        <li><BsBuildingsFill /> Ankeny</li>
                    </ul>

                    <ul className="right">
                        {listItems.map(item => <li key={item.id}>{item.name}</li>)}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default TopNav








// import { useEffect, useState } from "react"
// import axios from "axios"
import './home.css'

function Index() {
    // const url: string = 'https://fakestoreapi.com/products'
    // interface myshopItems {
    //     [key: string]: string
    // }
    // const [data, setData] = useState<myshopItems[] | null>()
    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get(url)
    //         setData(response.data)

    //     } catch (err) {
    //         console.log("error");

    //     }
    // }
    // useEffect(() => { fetchData() }, [])





    return (
        <div>
            <div className="container">
                <section className="home-1">
                    <div className="home-txt">
                        <figure><img src="../src/assets/img/target_icon.png" alt="target_icon" /></figure>
                        <h1>deal of the day</h1>
                        <p><span>Join circle <sub>tm</sub> </span>for free & <br /> score new deals every day.</p>
                    </div>
                    <div className="home-img1">
                        <figure>
                            <img src='../src/assets/img/kidspctr.PNG' alt="kids picture" />
                        </figure>
                        <p>
                            <h1>40%</h1>
                            Halloween costumes & accessories with circle <br />
                            Today only
                        </p>
                    </div>
                    <div className="home-img2">
                        <figure>
                            <img src="../src/assets/img/screen1.webp" alt="screen1" />
                            <h1 style={{ fontSize: '3.5rem' }}>214 <sup>99</sup></h1>
                            <p>with circle,TCL 50" Smart TV.Reg.279.99</p>
                            <span>Today only</span>
                        </figure>
                        <figure>
                            <img src="../src/assets/img/screen2.webp" alt="screen2" />
                            <h1>Free $20 <br />GiftCard</h1>
                            <p>When you spend $100 on Happy Holidays gift cards with circle.</p>
                            <span>Today only</span>
                        </figure>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Index
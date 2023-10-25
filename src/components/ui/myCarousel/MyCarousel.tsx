import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MyCarousel.css'
import { useEffect, useState } from "react"
import Card from "../Card/Card"
import axios from 'axios';
// import { getData } from '../../../service/getData';


function MyCarousel() {
    const url: string = 'https://fakestoreapi.com/products'
    interface myshopItems {
        [key: string]: string
    }
    const [data, setData] = useState<myshopItems[] | null>([])
    const fetchData = async () => {
        try {
            const response = await axios.get(url)
            setData(response.data)

        } catch (err) {
            console.log("error");

        }
    }
    useEffect(() => { fetchData() }, [])
  

    // useEffect(() => {
    //     (async () => {
    //         const data = await getData()
    //         setData(data)
    //     })()
    // }, [])




    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (


        <Carousel responsive={responsive}>
            {data && data?.map(item => {
                return (
                    <Card   {...item} />
                )
            })}
        </Carousel>




    )
}

export default MyCarousel


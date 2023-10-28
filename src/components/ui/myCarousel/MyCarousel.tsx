import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import Card from "../Card/Card";
import './MyCarousel.css';


function MyCarousel() {
    const { products } = useSelector((store: RootState) => store.data)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
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
        <Carousel responsive={responsive} draggable >
            {products.length !== 0 && products?.map((item: any) => {
                return (
                    <Card key={item.id}  {...item} />
                )
            })}
        </Carousel>
    )
}

export default MyCarousel


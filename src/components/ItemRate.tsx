import { Rate } from 'antd';

function ItemRate({rate}:any) {
    return (
        <Rate allowHalf defaultValue={rate} />
    )
}

export default ItemRate



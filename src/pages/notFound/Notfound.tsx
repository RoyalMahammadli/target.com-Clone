import { Link } from 'react-router-dom'
import './Notfound.css'
function Notfound() {
    return (
        <div className="notfound">
            <h1>  Something went wrong
                Page is not found </h1>
                <p>back to    <Link to='/'> <b>Home</b></Link></p>
            
        </div>
    )
}

export default Notfound
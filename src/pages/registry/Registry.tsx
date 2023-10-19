import { Link } from 'react-router-dom'
import './Resgistry.css'
function Registry() {
    return (
        <div className='registry'>
            <div className="container">
                <section className='first'>
                    <div className="left">
                        <figure>
                            <img src="../src/assets/img/gift.png" alt="gift png" />
                        </figure>
                        <h1>Registry</h1>
                    </div>
                    <div className="right">
                        <Link className='sign-in'>Sign in</Link> &nbsp; to manage your registry
                    </div>
                </section>

            </div>
            <section className='second'>
                <figure>
                    <img src="../src/assets/img/smilegirl.webp" alt="smileGirl" />
                </figure>
            </section>
            <section className='third'>
                <h4>Give the perfect gift</h4>
                <button>Find a registry</button>
            </section>
        </div>
    )
}

export default Registry
import './Target.css'
function Target() {
    return (
        <div className='target'>
            <div className="container">
                <section className='target1'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <figure>
                            <img src="../src/assets/img/target_icon.png" alt="icon_img" />
                        </figure>
                        <span>circle<sub>tm</sub> </span>
                    </div>
                    <ul>
                        <li style={{
                            borderBottom: '3px solid #cc0000'
                        }}>About circle</li>
                        <li>Offers</li>
                        <li>Bonus</li>
                        <li>Partners</li>
                    </ul>
                </section>
                <section>
                    <div className="target2">
                        <div className="div1">
                            <h1> Bringing back a special tribute to military, veterans & families</h1>
                            <p>Get 10% off two qualifying storewide purchases with Target◎circleTM 1 Returning 10/29–11/11.</p>
                        </div>
                        <div className="div2">
                            <div className="txt">
                                <p>Meet Target’s rewards program</p>
                                <h1>Join Target Circle™ to get perks, deals & a whole lot more every time you shop</h1>
                                <button>Sign in</button>
                                <button>Create account</button>
                            </div>
                            <figure>
                                <img src="../src/assets/img/rabbit.svg" alt="rabbit" />
                            </figure>
                        </div>
                        <div className="div3">
                            <h1>Benefits you'll love</h1>
                            <p>Use them in store or online too. <span>See Target Circle program rules.</span></p>
                        </div>
                    </div>
                </section>
            </div>

        </div >
    )
}

export default Target











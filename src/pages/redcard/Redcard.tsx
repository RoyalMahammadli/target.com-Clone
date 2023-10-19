import './Redcard.css'
function Redcard() {
    return (
        <div className="redcard">

            <section className="red-first">
                <div className="first-left">
                    <span>Already have a RedCard?</span>
                    <p><b>Sign in</b> for a more personalized view</p>
                </div>
                <div className="first-right">
                    <span>Manage Your Credit or Debit <b>RedCard</b></span>
                    <p>Manage Your <b>Reloadable Accaunt</b></p>
                </div>

            </section>
            <section className='red-second'>
                <div className="second-left">
                    <span className='sp1'>Save 5%</span>
                    <span className='sp2'>today &</span>
                    <span className='sp3'>every day.</span>
                    <h2>Target RedCard<sup>TM</sup> saves you more,in store & online</h2>
                    <p><sup><u>1</u></sup>Some restrictions apply.<span>See below</span> for RedCard benefits & program rules </p>
                    <div className="second-buttons">
                        <button className='look-up'>Apply for Credit</button>
                        <button className='look-up'>Apply for Debit</button>
                        <button className='look-up'> Open a Reloadable</button>
                    </div>
                </div>


                <div className="second-right">
                    <figure>
                        <img src="../src/assets/img/cards.svg" alt="" />
                    </figure>
                    <div className="circle"></div>
                </div>
            </section>
        </div>


    )
}

export default Redcard
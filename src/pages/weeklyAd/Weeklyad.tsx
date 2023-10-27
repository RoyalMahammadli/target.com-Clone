import './Weeklyad.css'
function Weeklyad() {
    return (
        <div>
            <section className='ad1'>
                <div>
                    <p>Weekly Ad</p>
                    <p style={{ textDecoration: 'underline', marginLeft: '1rem' }}> West Des Moines SW</p>
                </div>
                <p>Reminders</p>
            </section>
            <div className="containerr">
                <section className='ad2'>
                    <h2>Weekly Ads & Catalogs</h2>
                    <div className='ad-main-txt'>
                        <figure>
                            <img src="../src/assets/img/weekly ad.PNG" alt="weklyad picture" />
                        </figure>
                        <div className="ad-txt">
                            <h1>Weekly ad</h1>
                            <p>Prices Valid Oct 15 - Oct 21</p>
                            <button className='look-up'>View the Weekly Ad</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Weeklyad
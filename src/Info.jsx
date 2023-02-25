import LeykhinsPhoto from './assets/leykhins.jpeg'

function InfoImage() {
    return (
        <div className='photo--wrapper'>
            <img className='info--photo' src={LeykhinsPhoto} />
        </div>
    )
}

function Info() {
    return (
        <div>
            <h2 className='info--name'>Leykhins</h2>
            <p className='info--job'>Frontend Developer</p>
            <p className='info--site'>leykhins.io</p>
            <div className='buttons'>
                <button className='info--email'>
                    <i className='bx bxs-envelope' ></i>
                    Email
                </button>
                <button className='info--linkedin'>
                    <i className='bx bxl-linkedin' ></i>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}

export {Info, InfoImage};

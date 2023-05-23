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
                <a href="mailto:lekins101@gmail.com" className='info--email button'>
                    <i className='bx bxs-envelope' ></i>
                    Email
                </a>
                <a href="https://linkedin.com/in/leykhins" className='info--linkedin button'>
                    <i className='bx bxl-linkedin' ></i>
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export {Info, InfoImage};

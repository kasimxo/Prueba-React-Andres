import android from './../assets/store/play-store.svg'
import ios from './../assets/store/app-store.svg'
import windows from './../assets/store/windows-store.svg'
import facebook from './../assets/social/facebook-white.svg'
import instagram from './../assets/social/instagram-white.svg'
import twitter from './../assets/social/twitter-white.svg'

export function Footer() {
    return (
        <footer>
            <p className='white'>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
            <p className='gris'>Copyright &#169; DEMO Streaming. All Rights Reserved.</p>
            <br />
            <br />
            <div className="contenedor-botones">
                <div className="rrss">
                    <img src={facebook} alt='' title='' />
                    <img src={twitter} alt='' title='' />
                    <img src={instagram} alt='' title='' />
                </div>
                <div className="descargas">
                    <img src={android} alt='' title='' />
                    <img src={ios} alt='' title='' />
                    <img src={windows} alt='' title='' />
                </div>
            </div>
        </footer>
    )
}
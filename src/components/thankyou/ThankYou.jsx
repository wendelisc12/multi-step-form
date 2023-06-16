import './thanks.css'
import thanksImg from './icon-thank-you.svg'

const ThankYou = () => {
    return ( <div className='principal-thanks'>
        <div className='img-thanks'>
            <img src={thanksImg} alt="" />
        </div>
        <div className='desc-thanks'>
            <h1>Thank You!</h1>
            <p>Thanks for confirming your subscription! We hope you have Fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    </div> );
}
 
export default ThankYou;
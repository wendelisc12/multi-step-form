import './radio.css'

const Radio = ({label, icon, text, price, click}) => {
    return ( 
        <div>
            <input type="radio" name="plan" id={label} className='radio-input'/>
            <label htmlFor={label} className='label-box' onClick={click}>
                <div className='label-icon'>
                    <img src={icon} alt="" />
                </div>
                <div className='label-info'>
                    <h4>{text}</h4>
                    <p>{price}</p>
                </div>
            </label>
            
        </div>
     );
}
 
export default Radio;
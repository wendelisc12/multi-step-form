import './Button.css'
import { NavLink } from 'react-router-dom'

const Button = ({text, link, type, onclick}) => {

    return ( 
        <div className="button-box" onClick={onclick}>
            {type === 'next' ?<NavLink className='next button' to={link}>{text}</NavLink> :
                             <NavLink className='previous button' to={link}>Go Back</NavLink> 
            }
        </div>
     );
}
 
export default Button;
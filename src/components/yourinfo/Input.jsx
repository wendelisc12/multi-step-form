import './Input.css'


const Input = ({label, type, id, placeholder, value, funcao, validate}) => {
        
    if(validate == false){
        console.log("erro")
    }
    return ( 
        <div id='input-box'>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} value={value} onChange={funcao} validate={validate} required/>
        </div>
     );
}
 
export default Input;
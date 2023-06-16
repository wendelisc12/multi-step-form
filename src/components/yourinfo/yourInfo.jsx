import './yourinfo.css'
import Input from './Input';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

const YourInfo = ({onAddUser}) => {

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[number, setNumber] = useState('')

    var correctEmail = true

    function validateEmail(email){
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const history = useHistory()

    function saveUser(e){
        e.preventDefault()
        const dataUser = [name, email, number]
        if(validateEmail(email) == false){
            correctEmail = false
        }
        // onAddUser(dataUser)
        // history.push('/step-2')
    }

    return ( 
        <div className='principal'>
            <div>
                <h1>Personal info</h1>
                <p>Please provide your name, email adress, and phone number.</p>
            </div>
            <form action="" className='form-box-principal'>
            <div id='form-box'>
                <Input label="Name" id="name" type="text" placeholder="e.g. Stephen King" funcao={e => setName(e.target.value)} value={name}/>
                <Input label="Email Adress" id="email" type="email" placeholder="e.g.stephenking@lorem.com" funcao={e => setEmail(e.target.value)} value={email} validate={correctEmail} />
                <Input label="Phone Number" id="number" placeholder="e.g. +1 234 567 890" funcao={e => setNumber(e.target.value)} value={number}/>
                
            </div>
            <div className='button-form'>
                <button type='submit' className='button-submit' onClick={saveUser} disabled={!name || !email || !number}> Next Step</button>
                <div></div>
            </div>
            </form>
        </div>
     );
}
 
export default YourInfo;
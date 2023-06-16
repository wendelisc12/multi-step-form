import './summary.css'
import Button from '../button/Button';
import { useHistory } from 'react-router-dom';


const Summary = ({ dados, addons }) => {
    let total = 0
    const history = useHistory()

    addons.forEach(addon => {
        dados.typePlan ? total +=(addon.priceAddon *12) : total +=addon.priceAddon
    });

    total += dados.pricePlan

    const saveForm = () =>{
        history.push('/thanks')
    }

    return (
        <div className="principal">
            <div>
                <h1>Finishing up</h1>
                <p>Double-check eveything looks OK before confirming.</p>
            </div>

            <div className='summary-box'>
                <div className='summary-items'>
                    <div className='plan-box'>
                        <div className='plan-text'>
                            <h3>{dados.namePlan} {dados.typePlan ? (<span>(Yearly)</span>) : (<span>(Monthly)</span>)}</h3>
                        </div>

                        <div className='plan-price'>
                            <h3>${dados.pricePlan}/{dados.typePlan ? (<span>yr</span>) : (<span>mo</span>)}</h3>
                        </div>
                    </div>



                    <div className='addons-box'>
                        <div className='line'></div>
                        <div className='addons-list'>
                            {
                                addons.map((addon, index) => <div className='addon' key={index}>
                                    <div className='addon-text'>{addon.name}</div>
                                    <div className="addon-price">+${dados.typePlan ? addon.priceAddon*12 : addon.priceAddon}/
                                    {dados.typePlan ? (<span>yr</span>) : (<span>mo</span>)}
                                    </div>
                                </div>
                                )
                            }

                        </div>
                    </div>
                </div>

                <div className='summary-total'>
                    <div className='summary-text'>Total {dados.typePlan ? (<span>(per Year)</span>) : (<span>(per Month)</span>)}</div>
                    <div className='summary-price'><h3>${total}/{dados.typePlan ? (<span>yr</span>) : (<span>mo</span>)}</h3></div>
                </div>
            </div>

            <div className='button-form'>
                <Button text="Next Step" link={'/step-3'} type={"previous"} />
                <button className='button-submit' onClick={saveForm}>Confirm</button>
            </div>
        </div>
    );
}

export default Summary;
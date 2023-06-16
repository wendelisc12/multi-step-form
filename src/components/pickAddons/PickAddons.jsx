import CheckAddons from "./CheckAddons";
import Button from "../button/Button";

const PickAddons = ({onSaveAddons}) => {

    var listAddons = []

    const addAddons = (addons) => {
        if(addons !== false){
            listAddons.push(addons)
        }else{
            listAddons.pop(addons)
        }       
    }

    function saveAddons(){
        onSaveAddons(listAddons)
    }

    return ( 
        <div className="principal">
            <div>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>

            <div className="check-addons">
                <CheckAddons value={1} saveAddon={addAddons} id="online-service" title="Online service" desc='Acess to multiplayer games' price={1}/>
                <CheckAddons value={2} saveAddon={addAddons} id="large-storage" title="Large storage" desc='Extra 1TB of cloud save' price={2}/>
                <CheckAddons value={2} saveAddon={addAddons} id="customizable-profile" title="Customizable profile" desc='custom theme on your profile' price={2}/>
            </div>

            <div className='button-form'>
                <Button text="Next Step" link={'/step-2'} type={"previous"}/>
                <Button text="Next Step" link={'/step-4'} type={"next"} onclick={saveAddons}/>
            </div>
        </div>
     );
}
 
export default PickAddons;
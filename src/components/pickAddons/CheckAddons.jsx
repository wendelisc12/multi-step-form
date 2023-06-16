import './checkAddons.css'

const CheckAddons = ({ id, title, desc, price, click, value, saveAddon }) => {

    function check(id) {
        if(document.getElementById(id).checked){
            // listAddons.push(title)
            // console.log(listAddons)
            saveAddon({name: title, priceAddon: price})
        }else{
            // listAddons.pop(title)
            // console.log(listAddons)
            saveAddon(false)
        }

        
    }

    return (
        <label htmlFor={id} className="checkbox">
            <div className="checkbox-input-box" onClick={click}>
                <input type="checkbox" name="addons" id={id} className="checkbox-input" onClick={() => {check(id)}} value={value} />
            </div>

            <div className="checkbox-description-box">
                <h4>{title}</h4>
                <span>{desc}</span>
            </div>

            <div className='checkbox-price'>
                +${price}/mo
            </div>
        </label>
    );
}

export default CheckAddons;
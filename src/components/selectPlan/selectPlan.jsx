import Radio from "./radio";
import arcadeIcon from './icon-arcade.svg'
import advancedIcon from './icon-advanced.svg'
import proIcon from './icon-pro.svg'
import './selectPlan.css'
import { Switch } from "@mui/material";
import Button from "../button/Button";
import React, { useState } from "react";

const SelectPlan = ({ onSavePlan }) => {
    const [checked, setChecked] = useState(false)
    const [priceArcade, setPriceArcade] = useState(9)
    const [priceAdvanced, setPriceAdvanced] = useState(12)
    const [pricePro, setPricePro] = useState(15)
    const [type, setType] = useState('/mo')

    const [selectedPlan, setSelectedPlan] = useState([])

    const selectPrice = (name, price) => {
        setSelectedPlan([name, price])
    }

    function savePlan() {
        const dataSavePlan = {
            typePlan: checked,
            namePlan: selectedPlan[0],
            pricePlan: selectedPlan[1]
        }
        onSavePlan(dataSavePlan)

    }

    const handlerChange = (event) => {
        setChecked(event.target.checked)
        if (checked) {
            setType('/mo')
            setPriceArcade(9)
            setPriceAdvanced(12)
            setPricePro(15)
            document.getElementById('monthly').style.color = "#07285a"
            document.getElementById('yearly').style.color = "lightgray"
        } else {
            setType('/yr')
            setPriceArcade(9 * 12)
            setPriceAdvanced(12 * 12)
            setPricePro(15 * 12)
            document.getElementById('yearly').style.color = "#07285a"
            document.getElementById('monthly').style.color = "lightgray"
        }
    }



    return (
        <div className="principal">
            <div>
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly biling.</p>
            </div>

            <div className="select-box">

                <div className="plans">
                    <Radio className='radio' label="arcade" icon={arcadeIcon} text='Arcade' price={'$' + priceArcade + type} click={() => { selectPrice("Arcade", priceArcade) }} />
                    <Radio className='radio' label="advanced" icon={advancedIcon} text='Advanced' price={'$' + priceAdvanced + type} click={() => { selectPrice("Advanced", priceAdvanced) }} />
                    <Radio className='radio' label="pro" icon={proIcon} text='Pro' price={'$' + pricePro + type} click={() => { selectPrice("Pro", pricePro) }} />
                </div>

                <div className="switch-box">
                    <div>
                        <span id="monthly">Monthly</span>
                        <Switch checked={checked} onChange={handlerChange} />
                        <span id="yearly">Yearly</span>
                    </div>
                </div>
            </div>

            <div className='button-form'>
                <Button text="Next Step" link={'/'} type={"previous"} />
                <Button text="Next Step" link={'/step-3'} type={"next"} onclick={savePlan} />
            </div>
        </div>
    );
}

export default SelectPlan;
import React, { useState } from 'react'
import './ChooseProduct.css'

export default function ChooseProduct(props) {
    
    const [product, setProduct] = useState();
    
    const handleProduct = (element) =>{
        setProduct(element);
    }

    const showProducts = () => {
        if(props.room.roomType == 'Bathroom'){
            return(
                <select defaultValue={'default'} onChange={(element) => {handleProduct(element.target.value)}} id='select' name="">
                <option value={'default'} disabled='disabled' >choose a product</option>
                <option value="Light Bulb" >Light Bulb</option>
                <option value="Stereo" >Stereo</option>
                <option value="Air Conditioner" >Air Conditioner</option>
                <option value="Water Heater" >Water Heater</option>
                </select>
            )
        }
        else{
            return(
            <select defaultValue={'default'} onChange={(element) => {handleProduct(element.target.value)}} id='select' name="">
                <option value={'default'} disabled='disabled' >choose a product</option>
                <option value="Light Bulb" >Light Bulb</option>
                <option value="Stereo" >Stereo</option>
                <option value="Air Conditioner" >Air Conditioner</option>
                </select>
            )
        }
    }

    const addProduct = () =>{
        if(props.room.products.length == 5 || product == null){
            props.changeDisplayComponent(false);
            return alert('Error');
        }
        if(product == 'Stereo'){
            let stereoCount = props.room.getStereoCount();
            if( stereoCount == 1){
                props.changeDisplayComponent(false);
                return alert('Only 1 stereo can be added to a room')
            }
            props.room.stereo++;
        }
        let productObj = {
            name:product,
            color:'red'
        }
        props.room.pushProduct(productObj);
        props.changeDisplayComponent();
    }

    const closeComponent = () => {
        props.changeDisplayComponent();
    }

  return (
    <div className='main-div main-div-product'>
        <div>
            {showProducts()}
        </div>
        <div>
            <button onClick={addProduct} className='room-button-add'>Add</button>
        </div>
    </div>
  )
}

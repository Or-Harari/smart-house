import React, { useState } from 'react'
import ChooseProduct from '../components/ChooseProduct.jsx'
import './Room.css'

export default function Room(props) {

    const [displayComponent, setDisplayComponent] = useState(false);
    const [sswitch, setSswitch] = useState(false);
    
    const changeColor = event => index=>{
        if(props.room.products[event].color === 'red'){
             props.room.products[event].color = 'green'
        }
        else{
             props.room.products[event].color = 'red'
        }
        if(sswitch === false){
            setSswitch(true);
        }else{
            setSswitch(false);
        }     
    };

    const changeDisplayComponent = () =>{
        if(displayComponent === true){
            setDisplayComponent(false);
        }
        else{
            setDisplayComponent(true);
        }
    }

    const showProductComponent = () =>{
        if(displayComponent === false){
            return null;
        }
        else{
            return(
                <ChooseProduct changeDisplayComponent = {changeDisplayComponent}  room = {props.room}/>
            )}}

  return (
    <div >
        <div className='main-div'>
            <div className='row'>
                
                    <div className='ul-div'>
                <ul className='product-ul'>
                <li> <span style={{fontSize:'24px'}}>Room:</span>   {props.room.roomType}</li>
                <li><span style={{fontSize:'24px'}}>Room Name:</span> {props.room.roomName}</li>
            </ul>
            <div className='products-div'>{props.room.products.map((element, index)=>
          <p key={index}><button onClick={changeColor(index)} style={{backgroundColor: element.color}} className='products'>{element.name}</button></p>
      )}</div>
            </div>
            
            
      </div>
      <div className='product-buton-div'>
          <button onClick={changeDisplayComponent} className='product-button'>Add Product</button>
      </div>
      </div>

      <div>{showProductComponent()}</div>
    </div>
  )
}

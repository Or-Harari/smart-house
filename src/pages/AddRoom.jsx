import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './AddRoom.css'
import { GithubPicker } from 'react-color';

export default function AddRoom(props) {

    const [roomName,setRoomName] = useState(); 
    const [roomColor,setRoomColor] = useState('#FF0000');
    const [roomType,setRoomType] = useState();
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const addRooms = ()=>{
      
        if(roomName === null || roomColor === null){
            alert('Please make sure to fill name and color')
            return null;
        }
        else if(roomType === null){
            alert('please choose a room')
            return null;
        }
       
        let room;
        room = new Rooms(roomType , roomName, roomColor);
        room.roomPath = '/room' + roomName;
        props.addRoom(room);
    }

    const handleChangeComplete = (color) =>{
        setRoomColor(color.hex)
    }

    const handleClose = () =>{
        setDisplayColorPicker(false);
    }

    const handleClick = () =>{
        setDisplayColorPicker(true);
    }
    
  return (
    <div className='main-div add-room-div'>
        <form onSubmit={addRooms} action='/'>
        <ul>
            <li><select defaultValue={'default'} onChange={(element) =>{setRoomType(element.target.value)}} id='select' name="">
                <option disabled='disabled' value={'default'}>Choose a room</option>
                <option value="Bathroom" >Bathroom</option>
                <option value="Bedroom" >Badroom</option>
                <option value="Kitchen" >Kitchen</option>
                </select>
            </li>

            <li>
                <input placeholder='type a room name' onChange={(element) =>{setRoomName(element.target.value)}} type="text" />
            </li>

            <li><div className='pick-a-color'>
                <h3 className='pick-a-color-title'>Pick a color</h3>
                <div className='color-button' style={{backgroundColor: roomColor}} onClick={handleClick}></div>
                {displayColorPicker ? <div className='color-picker'>
                    <div className='cover' onClick={handleClose}/>
                        <GithubPicker
                        color={roomColor}
                        onChange = {handleChangeComplete}/>
                    </div> : null }
                    </div>
            </li>
            <div className='button-div'><Link to='/'><button className='room-button' onClick={addRooms}>Add Room</button></Link></div>

        </ul>
     
        </form>
    </div>
  )
}

class Rooms{
  
    //Room Details
    roomName = '';
    roomType = '';
    roomColor = '';
    roomPath = '';
    stereo = 0;
    
    //Products arrray
    products = [];
  
    pushProduct(product){
        return this.products.push(product);
    }

    getStereoCount(){
        return this.stereo;
    }

    constructor(roomType, roomName, roomColor){
        this.roomType = roomType;
        this.roomName = roomName;
        this.roomColor = roomColor;
    } 
  }
  
import { Link } from 'react-router-dom';
import './Homepage.css'

export default function Homepage(props) {

    const setRoom = index =>event =>{
        props.setRoom(index);
    }

  return (
    <div >
        <div className='main-div'>
      
            {props.rooms.map((room, index)=> {
                return(
                <div key={index} className='roomsList'>
                   <Link to={room.roomPath}><button className='rooms-button' style={{backgroundColor:room.roomColor}} onClick={setRoom(index)}>{room.roomName}</button></Link> 
                   
                </div>
            )})}
            <div>
        <Link className='linkit' to='/addroom'><button className='home-button'>&#43;</button></Link>
        </div>
        </div>
    </div>
  )
}


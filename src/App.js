import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddRoom from './pages/AddRoom';
import Room from './pages/Room';
import { useState } from 'react';

function App() {

  const [roomsArray, setRoomsArray] = useState([]);
  const [chosenRoom, setChosenRoom] = useState();

  const addRoom = (room) => {
    setRoomsArray([...roomsArray, room]);
  }

  const setRoom = (index) =>{
    setChosenRoom(roomsArray[index]);
  }

  return (
    <div className="App">
      <div className='app-div'>
        <BrowserRouter>
        <Link className='link' to='/' ><div className='h1div'><h1>Smart House</h1></div></Link>
          <Routes>
            <Route path='/' exact element={<Homepage setRoom = {setRoom} rooms = {roomsArray}/>}/>
            <Route path='/addroom' element={<AddRoom addRoom = {addRoom}/>}/>
            <Route path='/:room' element={<Room room = {chosenRoom}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

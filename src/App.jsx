import { useState } from 'react'
import './App.css'


function App() {
 //Aquí tu código
 const [name, setName] = useState('Sofia');
 console.log(name);
 const [newName, setNewName] = useState('');

 const showTeacher = (newShowTeacher) =>{
   setName(newShowTeacher);
 };

 const changeName =(event) =>{
   //quita el comportamiento predetermiado del formulario
   event.preventDefault();
   if ( newName!== ''){
      setName(newName);
      setNewName('');
   }
 }
 const changeNewName = (event) =>{
   setNewName(event.target.value)
}



 return (
   <div>
      <h2>Teacher Name: {name}</h2>
      <ul>
         <li onClick={() => showTeacher('Data')}>Data</li>
         <li onClick={() => showTeacher('Reyes')}>Reyes</li>
         <li onClick={() => showTeacher('Yolanda')}>Yolanda</li>
         <li onClick={() => showTeacher('Sofia')}>Sofia</li>
      </ul>


      <form onSubmit={changeName}>
        <input type="text" value={newName} onChange={changeNewName} placeholder='add a name'/>
        <button type="submit">Change</button>
        </form>
   </div>
 )
 
}

export default App;

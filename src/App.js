// import logo from './logo.svg';
import './App.css';
import contacts from "../src/contacts.json"
import {useState} from "react"

function App() {
  const [contact, setContact] = useState ( contacts.slice(5,10))
 
 const  handleRandomContact = () =>{
   const randomNum = Math.floor(Math.random()*contacts.length)
   const randomContact = contacts[randomNum]
   setContact( [randomContact, ...contact])
 }
  
 const handleNameContact = () =>{
   const newContactArr = [...contact]
   newContactArr.sort((elem1, elem2)=>elem1.name >elem2.name ? 1 :-1 )
   setContact(newContactArr)
 }
 const handlePopularityContact = () =>{
  const newContactArr = [...contact]
  newContactArr.sort((elem1, elem2)=> elem1.popularity > elem2.popularity ? -1 :1 )
  setContact(newContactArr)
}

const handleDeleteContact = (index) =>{
  const newContactArr = [...contact]
  newContactArr.splice(index,1)
  setContact( newContactArr)
}


  return (

    <div className="App">
            <h1>Iron Contacts</h1>
              <section className='botones'>
                <button onClick={handleNameContact} className="btn">Order by Name</button>
                <button onClick={handlePopularityContact} className="btn">Order by popularity</button>
                <button onClick={handleRandomContact} className="btn">Random Contact</button>
              </section>
      <table>
            <thead>
            <tr>
              <th><h3>Foto</h3></th>
              <th><h3>Name</h3></th>
              <th><h3>Popularity</h3></th>
              <th><h3>Won Oscar</h3></th>
              <th><h3>Won a Emmy</h3></th>
              <th><h3>Action</h3></th>
            </tr>
          </thead>
          <tbody id="body-bonito">
            {contact.map((eachContact, index)=>{
              
              return (
              <tr key={ eachContact.id }>

                <td>  <img src={ eachContact.pictureUrl} alt={eachContact.name}  className ="imagen-contact"/></td> 
                <td>  <h3>{eachContact.name}</h3> </td> 
                <td>  {eachContact.popularity}  </td>
                <td>  {eachContact.wonOscar === true && "🏆"}  </td>
                <td>  {eachContact.wonOscar === true && "🏆"}  </td>
                <td>  <button  onClick={()=> handleDeleteContact(index)} className="btn">Delete</button>  </td>
            
              </tr>  
            )
            })
            }
          </tbody>
     </table>
    </div>
  );
}

export default App;

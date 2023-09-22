import data from './data';
import {useEffect, useState} from 'react';

const App = () => {

  const [stan, setStan] = useState(data)
  const [inputValue, setInputValue] = ("")


  
console.log(data)
 
useEffect(()=>{
  const newState = stan.filter((element) => {element.name !== inputValue})
    setStan(newState)
},[inputValue])

return (
  <>
  <form action="" onSubmit={(e)=> {e.preventDefault()}}></form>
    <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
    {stan.map((element) => {
      return (
      <div key={element.id}>
        <img 
        style={{width:"50px",
        height:"50px"}}
        src={element.image} alt="zdjecie" />
        {element.name}
        {element.age}
      </div>
    )})}
    <div>zbiór ma : {stan.length}</div>
  </>
)};
export default App;

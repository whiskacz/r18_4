import data from './data';
import {useEffect, useState} from 'react';

const App = () => {

  const [stan, setStan] = useState(data)
  const [inputValue, setInputValue] = useState("")


  const filterFunction = () => {
    const newState = stan.filter((element, inputValue) => {
      return element.name === inputValue})
      setStan(newState)
  }
  
const handleChange = (e) => {
  setInputValue(e.target.value)
  filterFunction()
}
 

return (
  <>
  <form action="" onSubmit={(e)=> {e.preventDefault()}}>
    <input type="text" value={inputValue} onChange={handleChange} />
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
    </form>
  </>
)};
export default App;

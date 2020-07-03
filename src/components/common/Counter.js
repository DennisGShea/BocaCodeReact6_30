import React ,{ useState, useEffect } from 'react' 

function Counter() {
const [count, setCount] = useState(0)
useEffect(() => {
    document.title = `Bike Rest ${count} Times`       
})

return (
    <div>
       <h2>Clicked THE Button {count} Times</h2>
        <button onClick={() => setCount(count + 1)}>L Button Inc</button>
        <button onClick={() => setCount(count - 1)}>L Button Decrement</button>
        <button onClick={() => setCount(0)}>L Button Reset</button>
   </div>
)

}

export default Counter 
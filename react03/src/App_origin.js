import {useState, useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const plusBtn = () => setCounter((prev) => prev + 1)
  const minusBtn = () => setCounter((prev) => prev - 1)

  return(
    <div>
      
      <h1>{counter}</h1>

      <button onClick={plusBtn}>+</button>
      <button onClick={minusBtn}>-</button>

    </div>
  )
}

export default App;
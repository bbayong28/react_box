// #6.2 Deps (06:34) 까지 들음
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword ] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange= (e) => setKeyword(e.target.value);
  console.log("i run all the time.");

  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  useEffect(() => {
    console.log("SEARCH FOR", keyword)
  }, [keyword])

  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick = {onClick}>클릭하세요!</button>
    </div>
  );
}

export default App;



//import {useState, useEffect} from "react";
////useEffect는 두개의 argument를 가지는 function임
////useEffect는 우리 코드가 딱 한번만 실행될 수 있도록 해줌.


//function App() {
  //// 초기값 = 0 => counter 시작값 = 0
  //// setValue는 counter를 modift하는 function이 됨.
  //const [counter, setValue] = useState(0);
  //const onClick = () => setValue((prev) => prev + 1);
  //console.log("i run all the time.")
  //const iRnOnlyOnce = () => {
  //  console.log("i run only once.");
  //}
  //
  //useEffect(iRnOnlyOnce, []);
  //return (
  //  <div>
  //    <h1>{counter}</h1>
  //    <button onClick = {onClick}>클릭하세요!</button>
  //  </div>
  //);
//}

//export default App;
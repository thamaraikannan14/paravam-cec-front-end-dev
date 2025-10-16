import { useState } from "react";
import "./App.css"
function App(){
  const [count,SetCount]=useState(0);
  return(
    <>
    <h1>counter app</h1>
    <h2> Count:{count}</h2>
    <button onClick={()=>SetCount(count+1)}>increment</button>
    <button onClick={()=>SetCount(count-1)}>decrement</button>
    <button onClick={()=>SetCount(0)}>reset</button>
    </>
  );
}
export default App;
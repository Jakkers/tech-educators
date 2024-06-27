import { useState } from "react";

// export default function CounterApp() {
//   const [myState, setMyState] = useState(1);
//   return <div>{myState}</div>;
// }

export default function CounterApp() {
  const [myCounterState, setMyCounterState] = useState(1);
  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }
  function decreaseCounter() {
    setMyCounterState(myCounterState - 1);
  }
  function preventMinus(e) {
    if (myCounterState === 0) {
      e.preventDefault();
    }
  }
  function resetCounter() {
    setMyCounterState(myCounterState - myCounterState);
  }
  return (
    <div>
      <p onClick={resetCounter}>{myCounterState} Cookies</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      <button onClick={preventMinus || decreaseCounter}>Eat a cookie</button>
    </div>
  );
}

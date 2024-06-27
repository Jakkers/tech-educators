import { useEffect, useState } from "react";

export default function Timer() {
  //we need to store the interval in a global trackable variable --> useState()
  let [time, setTime] = useState(0);
  //we need to track an action happening outside the component lifecycle --> useEffect()
  useEffect(() => {
    //we declared a variable to store our setInterval, so we can cancel it in the clearInterval method.
    const myInterval = setInterval(() => {
      setTime((currentTime) => {
        return currentTime + 1;
      });
    }, 1000);
    //we need to clear the interval, so every iteration of the interval, we get a frech render with the current value
    return () => {
      clearInterval(myInterval);
    };
  }, []);
  return (
    <>
      <h1>Timer</h1>
      <h2>{time}</h2>
    </>
  );
}

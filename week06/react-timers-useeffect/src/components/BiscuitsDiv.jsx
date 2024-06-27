//import useState from React
import { useState } from "react";

export default function BiscuitsDiv(props) {
  //declare a global variable using useState()
  //useState has three elements: state variable, function to track state (mutation function or set function), initial vlaue of state
  // in this case, votes is the state variable, set Votes is the mutation function, and the initial value is 0

  // console.log(useState()); --> If you want to see the useState under the hood

  const [votes, setVotes] = useState(1);

  // //vanilla js
  // let votes = 0;
  // function setVotes() {
  //   //I control votes
  //   votes = votes + 1;
  // }

  // never change the value of state directly; use the mutation function

  const [showInfo, setShowInfo] = useState(false);

  function handleClick() {
    setVotes(votes + 1);
    console.log(votes);
  }

  function handleClickTwo(message) {
    console.log(message);
  }

  //we give the key props to an HTML element that is not rendered on the page
  return (
    <div className="biscuit-box" key={props.id}>
      <img
        onClick={() => {
          //we are setting our state to change values from true to false, and false to true
          setShowInfo(!showInfo);
        }}
        src={props.src}
        alt="biscuit"
        className="biscuit-img"
      />
      <button onClick={handleClick}>Click to vote!</button>
      <button onClick={() => handleClickTwo("Hello!")}>
        Click me and I say Hello
      </button>
      <p>Your votes: {votes}</p>
      {/* we are going to use a tenary operator       */}
      {
        //tenary operator --> condition ? first action (is condition is truthy) : second action (if condition is falsey)
        showInfo ? (
          <>
            <h2>{props.biscuit_name}</h2>
            <p>{props.description}</p>
          </>
        ) : null
      }
    </div>
  );
}

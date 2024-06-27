import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BiscuitDiv from "./components/BiscuitsDiv";
//destructure and import our biscuits array into this component
import { biscuits } from "./lib/biscuitsData";
import CounterApp from "./components/Increment";
import Testimonial from "./components/Testimonial";
import ConditionalRendering from "./components/ConditionalWorkshop";
// import Recipe from "./components/Recipe";
// import ToDos from "./components/ToDos";
import Timer from "./components/Timer";

// //list rendering
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => number * 2);

// console.log(doubledNumbers);

// export default function App() {
//   const items = ["item 1", "item 2", "item 3"];
//   // const htmlItems = items.map((item) => <li key={item}>{item}</li>);
//   // return <ul>{htmlItems}</ul>;
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }

export default function App() {
  return (
    // We are going to refactor this code in two steps:
    // I want to seperate my data and my components
    // How can I store my data? In the library folder as an array of objects
    // How can I instantiate multiple components? Loop through a list of items using a method
    <>
      <Header />
      <Timer />
      {/* <ToDos /> */}
      <ConditionalRendering />
      {biscuits.map((item) => {
        return (
          <BiscuitDiv
            key={item.id}
            biscuit_name={item.biscuit_name}
            src={item.src}
            description={item.description}
          />
        );
      })}
      {/* <Recipe /> */}
      <Testimonial
        username="Cookie Monster"
        review="I love biccies"
        rating="★★★"
        favCookie="COOKIES"
      />
      <CounterApp />
      <Footer />
    </>
  );
}

import { useState } from "react";

export default function ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(false);
  function handleClick() {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {/* {isVisible && <p>Hello World</p>} */}
      {isVisible ? <p>Hello World</p> : null}
    </div>
  );
}

// export default function ConditionalRendering() {
//   const [items, setItems] = useState([
//     { id: 0, title: "Turnip" },
//     { id: 1, title: "Artichoke" },
//   ]);

//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.length ? (
//           items.map((item) => <li key={item.id}>{item.title}</li>)
//         ) : (
//           <li>No items</li>
//         )}
//       </ul>
//     </div>
//   );
// }

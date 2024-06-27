import { useState } from "react";
import { useEffect } from "react";

// const itemIpsums = [
//   {
//     userId: 1,
//     id: 111,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 112,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 113,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
// ];

// export default function ToDos() {
//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {itemIpsums.map((itemIpsum) => (
//           <li key={itemIpsum.id}>{itemIpsum.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function ToDos() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/todos"
//       );
//       const data = await response.json();
//       setItems(data);
//     }
//     fetchData();
//   }, []);
//   return (
//     <>
//       <h1>Items</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

export default function ToDos() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/comments");
      const data = await response.json();
      setComments(data.comments);
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>User Comments</h1>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.body}</h2>
          <p>{comment.user.fullName}</p>
        </div>
      ))}
    </>
  );
}

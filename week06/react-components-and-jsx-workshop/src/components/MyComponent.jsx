export default function MyComponent() {
  return (
    <div>
      <img src="https://picsum.photos/200/300" alt="image of an image" />
      <p>Its an image of an image - how abstract!</p>
      <button
        onClick={() => {
          console.log("Something");
        }}
      >
        Click on me to log something!
      </button>
    </div>
  );
}

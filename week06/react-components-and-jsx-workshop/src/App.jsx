import "./App.css";
import Button from "./components/Button";
import MyComponent from "./components/MyComponent";
import Ticker from "./components/Ticker";

function App() {
  return (
    <>
      <div>
        <h1>Hello, World!</h1>
        <Button />
        <p> {2 + 2}</p>
        <MyComponent />
        <Ticker />
      </div>
    </>
  );
}

export default App;

import { useTimer } from "../utils/useTimer";

export default function Timer() {
  const count = useTimer();
  return <p>Count: {count}</p>;
}

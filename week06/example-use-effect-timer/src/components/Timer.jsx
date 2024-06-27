import { useTimer } from "../utils/useTimer";

export function Timer() {
  const count = useTimer();
  return <p>Count: {count}</p>;
}

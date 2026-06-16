import { useRef ,useEffect, useState} from "react";
/*
function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here" />
      <br /><br />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}


function App() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const increase = () => {
    countRef.current += 1;
    console.log("Ref:", countRef.current);
  };

  return (
    <div>
      <h1>State: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase State</button>
      <button onClick={increase}>Increase Ref</button>
    </div>
  );
}
  */


function App() {
  const [value, setValue] = useState("");
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <p>Current: {value}</p>
      <p>Previous: {prevValue.current}</p>
    </div>
  );
}

export default App;
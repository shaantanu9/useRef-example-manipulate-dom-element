import "./styles.css";
import { useRef } from "react";
import Extra from "./Extra";
export default function App() {
  const btnRef = useRef();
  const learnRef = useRef();
  console.log(btnRef);

  const disableClick = () => {
    btnRef.current.disabled = true;
    learnRef.current.style.display = "none";
  };

  const removeDisableClick = () => {
    btnRef.current.disabled = false;
    learnRef.current.style.display = "none";
  };
  const learnUseRef = () => (learnRef.current.style.display = "inline");

  return (
    <div className="App">
      <h1>Learning UseRef</h1>
      <h2>useRef</h2>
      <button ref={btnRef} onClick={() => learnUseRef()}>
        Ref Button ref={"{btnRef}"}
      </button>
      <p style={{ display: "none" }} ref={learnRef}>
        <h1>Congrates you have learn useRef</h1>
      </p>
      <br />
      <br />
      <button onClick={() => disableClick()}>Disable Click</button>
      <br />
      <br />

      <button onClick={() => removeDisableClick()}>Remove Disable Click</button>

      <Extra />
    </div>
  );
}

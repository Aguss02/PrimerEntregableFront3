import "./App.css";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  const regex = /^\s/;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = name.length < 3 || regex.test(name) || color.length < 6;
    setErrorVisible(hasError);
    setCardVisible(!hasError);
  };

  return (
    <div className="App">
      <form className="colorForm" onSubmit={handleSubmit}>
        <h1>Color Form ❤️</h1>
        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={handleName}
            placeholder="Type your name"
          />
        </div>

        <div>
          <label for="color">Favorite color:</label>
          <input
            type="text"
            id="color"
            onChange={handleColor}
            placeholder="Type your favorite color (HEX Format)"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {errorVisible && (
        <div className="errorMessage">
          Please check if the information submited is correct
        </div>
      )}

      {cardVisible && <Card name={name} color={color} />}
    </div>
  );
}

export default App;

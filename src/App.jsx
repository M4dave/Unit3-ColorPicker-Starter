import { useState } from "react";

// Compare the "selectedColor" on state to the "color" prop that each Color receives.
// If they match, the Color should have a border around it.

const Color = ({ color, setSelectedColor, selectedColor }) => {
  return (
    <div>
      <div
        className={color}
        onClick={() => setSelectedColor(color)}
        style={{ border: color === selectedColor ? "solid 3px black" : "none" }}
      ></div>
    </div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="blue"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="violet"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default App;

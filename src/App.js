import React, { useState } from 'react';

const App = () => {
  const [names, setNames] = useState([
    {
      name: "Արագածոտն",
      clicked: false,
    },
    {
      name: "Շիրակ",
      clicked: false,
    },
    {
      name: "Լոռի",
      clicked: false
    },
    {
      name: "Սյունիք",
      clicked: false
    },
  ]);

  const handleClick = (index) => {
    const updatedNames = [...names];
    updatedNames[index].clicked = !updatedNames[index].clicked;
    setNames(updatedNames);
  };

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      {
        names.map((mard, index) => (
          <div
            style={{
              padding: "10px",
              border: "1px solid #000",
              backgroundColor: mard.clicked ? "#FFC0CB" : "white", // Pastel Red when clicked
              cursor: 'pointer'
            }}
            key={index}
            onClick={() => handleClick(index)}
          >
            {mard.name}
          </div>
        ))
      }
    </div>
  );
};

export default App;
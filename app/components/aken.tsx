import React, { useState } from "react";
import Card from "./Card"; // Import your Card component

export default function WindowTypesList() {
  const [selectedWindowType, setSelectedWindowType] = useState("");

  const handleSelect = (code) => {
    setSelectedWindowType(code);
  };

  return (
    <div>
      {WindowTypes.map((windowType) => (
        <div
          key={windowType.code}
          onClick={() => handleSelect(windowType.code)}
        >
          <Card>
            <img src={windowType.img} alt={windowType.name} />
            <div>{windowType.name}</div>
          </Card>
        </div>
      ))}
      <input type="hidden" value={selectedWindowType} />
      <p>Selected Window Type: {selectedWindowType}</p>
    </div>
  );
}

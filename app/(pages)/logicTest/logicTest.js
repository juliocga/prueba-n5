'use client'

import { useState } from "react";

function LogicTest() {
  const [stringTest, setStringTest] = useState();

  const handleClick = () => {
    const value = document.getElementById("stringtest").value;
    let stringTestArray = value.split("");
    if (value) {
      const stringtWithoutCharacters = value.replace(/[^a-zA-Z ]/g, '').split("").toReversed();
      let length = stringtWithoutCharacters.length;
      let count = 0;
      stringTestArray.forEach((element, index) => {
        if (element.match(/[a-zA-Z ]/i) && count < length) {
          stringTestArray[index] = stringtWithoutCharacters[count];
          count++;
        }
      });
    }
    setStringTest(stringTestArray.join(""));
  }

  return (
    <div className="logicTest">
      <label htmlFor="stringtest">Texto de prueba:</label>
      <input type="text" id="stringtest" name="stringtest" size="14" />
      <button onClick={() => handleClick()}>Test</button>
      <p>Resultado: {stringTest}</p>
    </div>
  )
}

export default LogicTest;
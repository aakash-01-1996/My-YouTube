import React, { useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState("");
  console.log("Rendering");

  const prime = findPrime(text);

  return (
    <div className="m-4 p-2 w-96 h-96 border border-black rounded-lg shadow-lg">
      <div>
        <input
          className="border border-black rounded-lg w-72 px-2 "
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <h1>nth Prime Number: {}</h1>
      </div>
    </div>
  );
};

export default Demo;

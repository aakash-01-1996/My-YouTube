import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // useMemo : Helps in load faster.. as it stores in cache
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black rounded-lg shadow-lg" +
        (isDarkTheme && " bg-gray-700 text-black")
      }
    >
      <div className=" pb-1 w-[60px] rounded-lg border border-black bg-gray-400 ">
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
      </div>
      <div>
        <input
          className="border border-black rounded-lg w-72 px-2 "
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <h1>nth Prime Number: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;

import React, { useState, useRef } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);

  const ref = useRef(0);

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black rounded-lg w-96 shadow-md">
      <div className="font-semibold text-xl">
        <button
          className="bg-gray-200 px-2 m-4"
          onClick={() => {
            x += 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span>Let = {x}</span>
      </div>

      <div className="font-semibold text-xl">
        <button
          className="bg-gray-200 px-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <span>State = {y}</span>
      </div>

      <div className="font-semibold text-xl">
        <button
          className="bg-gray-200 px-2 m-4"
          onClick={() => {
            ref.current += 1;
            console.log("Ref count: ", ref.current);
          }}
        >
          Increase ref
        </button>
        <span>Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;

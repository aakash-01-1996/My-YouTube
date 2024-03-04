import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRadomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API polling...
      //   console.log("API polling");

      dispatch(
        addMessage({
          name: generateRadomName(),
          message: makeRandomMessage(10) + "lorem ipsum dolor sit amet ",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div>
        <div className=" h-[679px] w-full ml-2 p-2 border border-black bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Aakash Ambodkar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-1 w-[315px] border  border-black rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          placeholder="Chat...  "
        />
        <button className="px-2  bg-gray-100 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

import React from "react";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-indigo-500">
      <div className="flex flex-col bg-slate-300 p-5 rounded-lg justify-center items-center">
        <div className="font-mono p-4 text-center font-bold text-3xl  text-indigo-800">
          EMAIL SENDER
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 border border-indigo-500 "
          style={{
            height: "45px",
            width: "350px",
            borderRadius: "12px",
            outline: "none",
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="p-2 border border-indigo-500 "
          style={{
            height: "45px",
            width: "350px",
            borderRadius: "12px",
            outline: "none",
          }}
        />
        <br />
        <textarea
          type="text"
          placeholder="Type Content...."
          className="p-2 border border-indigo-500"
          style={{
            height: "165px",
            width: "350px",
            borderRadius: "12px",
            outline: "none",
          }}
        />
        <br />
        <button
          type="submit"
          className="font-mono text-white text-2xl py-2 px-9 w-30 border rounded-lg  bg-blue-700 hover:bg-blue-600 "
        >
          SEND
        </button>
      </div>
    </div>
  );
}
export default App;

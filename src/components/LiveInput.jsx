import React, { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <h2>Live Input Box</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Live Output:</h3>
      <p>{text}</p>
    </div>
  );
}

export default LiveInput;

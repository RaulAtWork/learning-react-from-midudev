import React, { useState } from "react";
import "./styles/index.css";

function App() {
  const [tracking, setTracking] = useState(false);

  return (
    <main>
      <button onClick={() => setTracking(!tracking)}>
        {tracking && "Tacking mouse."}
        {!tracking && "Start Tracking!"}
      </button>
      {tracking && <div className="mouse-tacker" />}
    </main>
  );
}

export default App;

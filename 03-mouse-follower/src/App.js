import React, { useEffect, useState } from "react";
import "./styles/index.css";

function App() {
  const [tracking, setTracking] = useState(false);
  const [mousePosition, setMousePosition] = useState([0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition([event.clientX, event.clientY]);
    };

    if (tracking) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [tracking]);

  const mouseTrackerStyle = {
    top: mousePosition[1] - 20,
    left: mousePosition[0] - 20,
  };

  return (
    <main>
      <button onClick={() => setTracking(!tracking)}>
        {tracking && "Tacking mouse."}
        {!tracking && "Start Tracking!"}
      </button>
      {tracking && (
        <>
          <div className="mouse-tacker" style={mouseTrackerStyle} />
          <p>
            {`Mouse Position [x:${mousePosition[0]}, y:${mousePosition[1]}]`}
          </p>
        </>
      )}
    </main>
  );
}

export default App;

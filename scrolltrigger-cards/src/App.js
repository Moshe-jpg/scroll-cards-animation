import React, {useRef, useEffect} from "react";
import "./index.css";
import RunAnimation  from "././Helpers/RunAnimation";
function App() {

const appRef = useRef(null); 

useEffect(() => {
  RunAnimation(appRef.current);
}, []);

  return (
    <div className="App" ref={appRef}>
      <div className="flex-before"></div>
      <div className="flex-container">
        <div className="flex-item"></div>
      </div>
      <div className="flex-before"></div>
    </div>
  );
}

export default App;

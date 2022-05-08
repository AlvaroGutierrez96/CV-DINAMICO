import { useState } from "react";
import "./App.css";
import Alvaro from "./components/Alvaro";
/* import SobreMi from "./components/SobreMi";  */
import Education from "./components/Education";
import Experience from "./components/Experience";
/* import More from "./components/More"; */

import { CV } from "./CV/CV";

const { alvaro, education, experience/* , languages, habilities, volunteer */ } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
        <Alvaro alvaro={alvaro} />
       {/*  <SobreMi alvaro={alvaro} /> */}
	      {/* <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer} 
	      />  */}
        <div className="bton">
        <button
              className="custom-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="customBtn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>

    </div>
  );
}

export default App;
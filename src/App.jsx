import React from "react";
import Counter from "./components/Counter";
import LiveInput from "./components/LiveInput";
import ProfileCard from "./components/ProfileCard";

import "./App.css";

function App() {
  return (
    <div className="container">

      <h1>React Components Demo</h1>

     
      <div className="section">

        <Counter />
        <LiveInput />

      </div>



     
      <div className="cards-container">

        <ProfileCard
          name="Rahul Yadav"
          role="Frontend Developer"
          city="Gorakhpur"
        />

        <ProfileCard
          name="Sanjeev Singh"
          city="Indore"
          role="Backend Developer"
        />

        <ProfileCard
          name="Amit Sharma"
          city="Bhopal"
          role="QA"
        />

        <ProfileCard
          name="Rahul Yadav"
          role="Full-Stack Developer"
          city="Jaipur"
        />

      </div>

    </div>
  );
}

export default App;

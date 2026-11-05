import React, { useState } from "react";

function ProfileCard({name,city,role}) {
  const [showCity, setShowCity] = useState(true);

  return (
    <div className="card">
      <h2>Profile Card</h2>

      <p>Name:{name}</p>

      <p>
        City:{showCity ? city : ""}
      </p>

      <p>Role: {role}</p>

      <button onClick={() => setShowCity(!showCity)}>
        {showCity ? "Hide City" : "Show City"}
      </button>
    </div>
  );
}

export default ProfileCard;

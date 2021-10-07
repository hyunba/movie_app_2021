import React from "react";

function Food({ name }) {
  return(
    <h3>I love {name}</h3>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food name = "potato" />
      <Food name = "hamburger" />
      <Food name = "pizza" />
      <Food name = "chicken" />
    </div>
  );
      
}

export default App;

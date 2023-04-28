import React from "react";
import Card from "./components/Card";
import Picture from './assets/picture.png';

function App() {
  return (
    <div className="App">
      <Card
        date="Sep 26, 2021"
        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        imageUrl={Picture}
        onClick={() => alert("text")}
        size="large"
      />
      <Card
        date="April 25, 2023"
        title="JavaScript Named Most Popular Language of 2023"
        imageUrl={Picture}
        onClick={() => alert("text")}
      />
      <Card
        date="April 22, 2023"
        title="Python 4.0 Announced"
        imageUrl={Picture}
        onClick={() => alert("text")}
      />
      <Card
        date="April 20, 2023"
        title="Node.js 16.0 Released"
        imageUrl={Picture}
        onClick={() => alert("text")}
      />
      <Card
        date="April 18, 2023"
        title="TypeScript Now Supported by Facebook"
        imageUrl="./assets/ts.png"
        onClick={() => alert("text")}
      />
    </div>
  );
}

export default App;

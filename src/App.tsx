import React from "react";
import "./App.css";
import FixedQuestions from "./components/FixedQuestions.component";
import MathsQuestions from "./components/MathsQuestions.component";

function App() {
  return (
    <div className="App">
      <header>
        <h1>RoboBob</h1>
      </header>
      <main className="bigBox">
        <section className="fixedQuestions">
          <h2>Questions for me:</h2>
          <FixedQuestions />
        </section>
        <section className="mathsQuestions">
          <h2>Maths questions for you:</h2>
          <MathsQuestions />
        </section>
      </main>
    </div>
  );
}

export default App;

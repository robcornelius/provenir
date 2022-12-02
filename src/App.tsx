import Grid from "@mui/material/Unstable_Grid2";
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
      <main>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
        >
          <Grid xs={12} sm={12} md={12} lg={12} xl={6}>
            <section className="fixedQuestions">
              <h2>Questions for me:</h2>
              <FixedQuestions />
            </section>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={12} xl={6}>
            <section className="mathsQuestions">
              <h2>Maths questions for you:</h2>
              <MathsQuestions />
            </section>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;

//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import ScoreBoard from './ScoreBoard'
import BottomRow from "./BottomRow";
import "./App.css";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [LionsScore, setLScore] = useState(0)
  const [TigerScore, setTScore] = useState(0)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <ScoreBoard team='home' name='Lions' score={LionsScore} />
          <ScoreBoard team='away' name='Tigers' score={TigerScore} />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=>setLScore(LionsScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=>setLScore(LionsScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=>setTScore(TigerScore +7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=>setTScore(TigerScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}




export default App;

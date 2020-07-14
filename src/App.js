//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import ScoreBoard from './ScoreBoard'
import BottomRow from "./BottomRow";
import Button from './Button'
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
          <Timer className='timer'/>
          <ScoreBoard team='away' name='Tigers' score={TigerScore} />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <Button className="homeButtons__touchdown" action={() => setLScore(LionsScore + 7)} text= 'Home Touchdown'/>
          <Button className="homeButtons__fieldGoal" action={() => setLScore(LionsScore + 3)} text= 'Home Field Goal'/>
        </div>
        <div className="awayButtons">
          <Button className="awayButtons__touchdown" action={() => setTScore(TigerScore + 7)} text= 'Away Touchdown'/>
          <Button className="awayButtons__fieldGoal" action={() => setTScore(TigerScore + 3)} text= 'Away Field Goal'/>
        </div>
      </section>
    </div>
  );
}

const Timer = (props) => {
  return <div className={props.className}>00:03</div>
}



export default App;

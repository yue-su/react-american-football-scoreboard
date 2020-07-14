import React from "react";
import "./App.css";

const ScoreBoard = (props) => {
    const h2Class = `${props.team}__name`
    const ScoreClass = `${props.team}__score`
    return (
        <div className={props.team}>
            <h2 className={h2Class}>{props.name}</h2>
            <div className={ScoreClass}>{props.score}</div>
        </div>
    )
}

export default ScoreBoard
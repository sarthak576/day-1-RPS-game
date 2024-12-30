import './App.css';
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa6";
import { FaHandRock } from "react-icons/fa";
import { useState } from 'react';


function randomAction(){
  const actions = {
    rock:"scissors",
    paper:"rock",
    scissors: "paper",

  };
  const keys = Object.keys(actions);
  const index= Math.floor(Math.random()*keys.length); 

  return    keys[index];
}

function ActionIcon({action, ...props}){
  const icons ={
 rock:FaHandRock,
 paper:FaHandPaper,
 scissor:FaHandScissors,
  };
    const Icon = icons[action]

  return(
      <Icon {...props}/>
  );
}



function Player({name="Player",score=0,action=""}){
  return(
    <div className="player">
      <div className="score">{`${name}: ${score}`}</div>
    <div className="action">
    {action &&  <ActionIcon action={action} size={60} />}
    </div>
    </div>
  );
}




function ActionButton({action="rock", onActionSelected}){
  return(
    <button className="round-btn" onClick={()=>onActionSelected(action)}>
      <ActionIcon action={action} size={20}/>
    </button>
  );
}

function App() {

const [playerAction,setPlayerAction]=useState("")
const [computerAction,setComputerAction]=useState("")

const onActionSelected=(selectedAction)=>{
  setPlayerAction(selectedAction); 
  const newComputerAction = randomAction();
  setPlayerAction(selectedAction);
  setComputerAction(newComputerAction);
}; 


  return (
   <div className="center">
    <h1>Rock Paper Scissor </h1>
    
    <div>
      <div className="container">
        <Player name="Player" score={0} action={playerAction}/>
        <Player name="Computer"score={1} action={computerAction}/>
        
        </div>
<div >
     <ActionButton action="rock" onActionSelected={onActionSelected}/>
     <ActionButton action="paper" onActionSelected ={onActionSelected}/>
     <ActionButton action="scissor" onActionSelected={onActionSelected}/>

    </div>
  
<h2>
  player 1 wins 
</h2>
   </div>
   </div>

  );
}

export default App;

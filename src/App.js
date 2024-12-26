import './App.css';
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa6";
import { FaHandRock } from "react-icons/fa";

function Player({name="Player",score=0}){
  return(
    <div className="player">
      <div className="score">{`${name}: ${score}`}</div>
    <div className="action">
      <FaHandPaper size={60} />
    </div>
    </div>
  );
}






function App() {
  return (
   <div className="center">
    <h1>Rock Paper Scissor </h1>
    
    <div>
      <div className="container">
        <Player name="Player" score={0}/>
        <Player name="Computer"score={0}/>
        
        </div>
<div>
      <button className="round-btn"> <FaHandRock size={20}/>
     </button>
      <button className="round-btn"><FaHandPaper size={20}/>
       </button>
      <button className="round-btn"><FaHandScissors size={20}/>
      </button>
    
    </div>
  
<h2>
  player 1 wins 
</h2>
   </div>
   </div>

  );
}

export default App;

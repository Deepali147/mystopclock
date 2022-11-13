
import './App.css';
let sessionMode=true;
let breakSessionLength=5*60;
let sessionLength=25*60;
let timeLeft;
function increment(){
  breakSessionLength+=60
  if(breakSessionLength>=3600){
    document.getElementById("break-length").textContent=3600/60
  }
  else{
    document.getElementById("break-length").textContent=breakSessionLength/60
  }
 
}
function decrement(){
  breakSessionLength-=60
  let breakLength;
  if(sessionMode){
    if(breakSessionLength<=0){
     document.getElementById("break-length").textContent=1
  breakLength=1;
  breakSessionLength=60/60;
}
else{
  document.getElementById("break-length").textContent=breakSessionLength/60
  breakLength=breakSessionLength/60;
}
document.getElementById("timer-mint").textContent=breakLength;}
  }
function sessionIncrement(){
sessionLength+=60
let length;
if(sessionMode){
  if(sessionLength>=3600){

    length=document.getElementById("session-length").textContent=3600/60
  }
  else{
    length=document.getElementById("session-length").textContent=sessionLength/60
  }
  document.getElementById("timer-mint").textContent=length
}


}
function sessionDecrement(){
  sessionLength-=60
  let length;
  if(sessionMode){
    if(sessionLength<=0){
      document.getElementById("session-length").textContent=1
      length=1
      sessionLength=60/60
    }
    else{
      document.getElementById("session-length").textContent=sessionLength/60
      length=sessionLength/60
    }
    document.getElementById("timer-mint").textContent=length
  };
  

  }
  function play(){
    if(sessionMode){
     timeLeft=setInterval(()=>{
        sessionLength-=1
        document.getElementById("timer-mint").textContent=Math.floor(sessionLength/60);
        document.getElementById("timer-sec").textContent=sessionLength%60;

        if(sessionLength===0){
      
          clearInterval(timeLeft);
          document.getElementById("timer-label").textContent="break has begun"
          timeLeft=setInterval(()=>{
            breakSessionLength-=1
            document.getElementById("timer-mint").textContent=Math.floor(breakSessionLength/60);
            document.getElementById("timer-sec").textContent=breakSessionLength%60;
            if(breakSessionLength===0){
              clearInterval(timeLeft)
              reset();
            }
    
          },1000)


        }
      },1000)
    }
    
  }
  function stop(){
    if(sessionMode){
      clearInterval(timeLeft);
    }
  }
  function reset(){
   clearInterval(timeLeft)
breakSessionLength=5*60;
sessionLength=25*60;
document.getElementById("break-length").textContent=breakSessionLength/60;
document.getElementById("session-length").textContent=sessionLength/60;
document.getElementById("timer-mint").textContent="25";
document.getElementById("timer-sec").textContent="00";
document.getElementById("timer-label").textContent="Session"
clearInterval(timeLeft)

  }

function App() {
return (
    <div className="App">
      <h1>25+5 clock</h1>
      <div id="first">
        <div id="break-label">Break Length</div>
     <button id="break-increment" onClick={increment} >+</button>
     <div id="break-length">5</div>
     <button id="break-decrement" onClick={decrement}>-</button>
     </div>
     <div id="second">
     <div id="session-label">Session Length</div>
     <button id="session-increment" onClick={sessionIncrement}>+</button>
     <div id="session-length">25</div>
     <button id="session-decrement" onClick={sessionDecrement}>-</button></div>
     <div id="third"> <div id="timer-label">Session</div>
     <div id="time-left"> <span id="timer-mint">25</span>:<span id="timer-sec">00</span></div>
     <button id="start_stop" onClick={play}>start</button>
     <button id="start_stop" onClick={stop}>stop</button>
     <button id="reset" onClick={reset}>reset</button></div>
    
    
     </div>
  );
}

export default App;
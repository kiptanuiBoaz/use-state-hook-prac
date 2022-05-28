import React, {useState} from "react";


//Challenge:

//2. Given that you can get code to be called every second



//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

function App() {
  // get the current time using:
  let time = new Date().toLocaleTimeString().substring(0,7);
  // console.log(time);

  let [initialTime,setTime] = useState(time);
  

  function updateTime (){
    let currentTime = new Date().toLocaleTimeString().substring(0,7);;
    setTime(currentTime);
  }
  //getting the time in your <h1> to update every second?
  //using the setInterval method.
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      {/* //Show the latest time in the <h1> when the Get Time button
      //is pressed. */}
      <h1>{initialTime}</h1>
      <button onClick = {updateTime}>Get Time</button>
    </div>
  )
};

export default App;

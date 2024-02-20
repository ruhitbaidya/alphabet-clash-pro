function myTimerFunction() {
    console.log("Timer interval executed!");
  }
  
  // Set interval
  var interval = setInterval(myTimerFunction, 1000); // Runs every 1000 milliseconds (1 second)
  
  // Clear interval after 5 seconds
  setTimeout(function() {
    clearInterval(interval);
    console.log("Timer interval cleared after 5 seconds.");
  }, 5000);
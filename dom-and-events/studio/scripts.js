// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    console.log("loaded");
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const rocket = document.getElementById("rocket");

    takeOffButton.addEventListener("click", function() {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff");
    if(confirm) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        shuttleHeight.innerHTML = 10000;
        };
    });
    landButton.addEventListener("click", function() {
        let alert = window.alert("Shuttle is landing, landing gear engaged");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.position = "absolute";
        rocket.style.top = shuttleBackground.offsetHeight - rocket.offsetHeight + "px";
        rocket.style.left = shuttleBackground.offsetWidth/2 - rocket.offsetWidth/2 +  "px";
    });
    abortButton.addEventListener("click", function() {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if(confirm) {
            flightStatus.innerHTML = "Mission Aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.position = "absolute";
            rocket.style.top = shuttleBackground.offsetHeight - rocket.offsetHeight + "px";
            rocket.style.left = shuttleBackground.offsetWidth/2 - rocket.offsetWidth/2 +  "px";
        };
    });
    rocket.style.position = "absolute";
    rocket.style.top = shuttleBackground.offsetHeight - rocket.offsetHeight + "px";
    rocket.style.down = "0px";
    rocket.style.left = shuttleBackground.offsetWidth/2 - rocket.offsetWidth/2 +  "px";
    rocket.style.right = "0px";

    upButton.addEventListener("click", function() {
       rocket.style.top = parseInt(rocket.style.top)-10 + "px";
       shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    });
    downButton.addEventListener("click", function(){
        rocket.style.top = parseInt(rocket.style.top)+10 + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
    });
    leftButton.addEventListener("click", function() {
        rocket.style.left = parseInt(rocket.style.left)-10 + "px";
    });
    rightButton.addEventListener("click", function() {
        rocket.style.left = parseInt(rocket.style.left)+10 + "px";
    })
});
// Initialize Variables below
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMaassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMaassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus = 'Clear';
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
let astronautCheck = astronautCount <= 7;

// add logic below to verify all astronauts are ready
let readyCheck = astronautCheck === 'ready';

// add logic below to verify the total mass does not exceed the maximum limit of 850000
let massCheck = totalMassKg <= maximumMassLimit;

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
let fuelTempCheck = fuelTempCelsius >= -300 || fuelTempCelsius <= -150;

// add logic below to verify the fuel level is at 100%
let fuelCheck = fuelLevel === '100%';

// add logic below to verify the weather status is clear
let weatherCheck = weatherStatus === 'Clear';

// Verify shuttle launch can proceed based on above conditions
let canShuttleLaunch = astronautCheck && readyCheck && massCheck && fuelTempCheck && fuelCheck && weatherCheck;
let dateMessage = "Date: " + date;
let timeMessage = "Time: " + time;
let astronautMessage = "Astronaut Count: " + astronautCount;
let crewMassMessage = "Crew Mass: " + crewMassKg + " kg";
let fuelMassMessage = "Fuel Mass: " + fuelMassKg + " kg";
let shuttleMassMessage = "Shuttle Mass: " + shuttleMassKg + " kg";
let totalMassMessage = "Total Mass: " + totalMassKg + "kg";
let fuelTempMessage = "Fuel Temperature: " + fuelTempCelsius + " \u00B0C";
let weatherMessage = "Weather Status" + weatherStatus;

let launchMessage = ('All systems are a go! Initiating launch sequence! \n' +  dateMessage + '\n' + timeMessage + '\n' + astronautMessage + '\n' + crewMassMessage + '\n' + 
fuelMassMessage + '\n' + shuttleMassMessage + '\n' + shuttleMassMessage + '\n' + totalMassMessage + '\n' + fuelTempMessage + '\n' + weatherMessage + '\n' + ('Have a safe flight astronauts'));
if (canShuttleLaunch = true) {
    console.log(launchMessage);
} else {
    console.log("Launch Aborted. See network administrator for details.")
}
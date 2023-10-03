// Code your orbitCircumference function here:
function orbitCircumference(r) {
  circumference = Math.round(2*(Math.PI)*r);
  return circumference;
}

// Code your missionDuration function here:
function missionDuration(orbits, orbitRadius, orbitalSpeed) {
  orbitRadius = 2000;
  orbitalSpeed = 28000;
  time = (orbitCircumference(orbitRadius)/orbitalSpeed)*orbits;
  actualtime = (Math.floor(time*100))/100;
  return actualtime;
}

console.log(`The mission will travel ${orbitCircumference(2000)} km around the planet and it will take ${missionDuration(5)} hours to complete.`)
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr, num) {
  let chosenIDs = [];
  while (chosenIDs.length < num) {
    let numberZerotoNum = (Math.floor(Math.random()*arr.length));
    if  (!chosenIDs.includes(arr[numberZerotoNum])) {
      chosenIDs.push(arr[numberZerotoNum]);
    } else {
    }
  }
  return chosenIDs;
}

// Code your oxygenExpended function here:
function oxygenExpended(obj);
spaceWalk = missionDuration(3);


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
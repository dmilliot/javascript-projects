// Code your selectRandomEntry function here:
function selectRandomEntry(arr, num) {
  let chosenIDs = [];
  while (chosenIDs.length < num) {
    let numberZerotoNum = (Math.round(Math.random()*arr.length));
    if  (!chosenIDs.includes(arr[numberZerotoNum])) {
      chosenIDs.push(arr[numberZerotoNum]);
    } else {
    }
  }
  return chosenIDs;
}
// Code your buildCrewArray function here:
function buildCrewArray(arr1, chosenCrew) {
  let crew = [];
  for (i=0; i<chosenCrew.length; i++) {
    if (chosenCrew[i] === arr1[i].astronautID) {
      crew.push(arr1[i].name);
    } else {
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
chosenCrew = selectRandomEntry(idNumbers, 3);
crew = buildCrewArray(animals, chosenCrew);
console.log(chosenCrew);
console.log(crew);

// Code your template literal and console.log statements:

// function selectRandomID {
  
// }
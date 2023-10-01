let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamanderOne = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let beagleOne = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigradeOne = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamanderOne, beagleOne, tardigradeOne];

function crewReport(crewMember){
   report = `${crewMember['name']} is a ${crewMember['species']}. They are ${crewMember['age']} years old and ${crewMember['mass']} kilograms. Their ID is ${crewMember['astronautID']}.`;
   return report;
}

// Print out the relevant information about each animal.
// for (i=0; i<crew.length; i++) {
//    console.log(crewReport(crew[i]));
// }
// Start an animal race!


function race(arr) {
   let results = [];
   for (i=0; i<arr.length; i++) {
      let totalDistance = 0;
      roundsToFinish = 0;
      while (totalDistance < 20) {
         distance = arr[i].move();
         totalDistance += distance;
         roundsToFinish += 1;
      }
      results += roundsToFinish + ' ';
   }
   return results;
}
results = race(crew).split(' ');

for (i=0; i<crew.length; i++) {
   console.log(`${crew[i].name} took ${results[i]} turns to complete the race.`);
}

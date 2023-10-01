function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
//  for (i=0; i < 8; i++){
  //  console.log(randomSelection(happiness));
//  }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.

function arr1Orarr2(arr1, arr2) {
  let chooser = Math.random;
  let chosenArray = [];
  if (chooser >= .5) {
    chosenArray = arr1;
  } else {
    chosenArray = arr2;
  }
  return chosenArray;
}
let newArray = [];
let chosenArray = arr1Orarr2(happiness, words);

happyWord = randomSelection(happiness);
wordsWord = randomSelection(words);
newArray.push(happyWord);
newArray.push(wordsWord);
console.log(newArray);
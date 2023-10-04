function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let randomPicked = Math.floor(Math.random()*arr.length);
  let output = arr[randomPicked];
  return output;
}

//TODO: Export the randomFromArray function.
module.exports = {
  randomFromArray: randomFromArray
}
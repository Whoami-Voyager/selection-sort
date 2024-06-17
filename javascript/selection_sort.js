function selectionSort(arr) {
  const sortedArr = []

  while (arr.length > 0){
    const min = Math.min(...arr);
    const indx = arr.indexOf(min)

    sortedArr.push(min)
    arr.splice(indx, 1)
  }

  return sortedArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// the function takes in the array, and loops through it. 
// it takes the Math.min of that array value and unshifts it to the beginning of an array

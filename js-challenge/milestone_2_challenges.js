// challenge 1:
const sumOfPositives = [1, -6, 4, -3, 2];

const getPositiveArray = (arr) => {
  return arr.filter((item) => item > 0).reduce((a, b) => a + b);
};

console.log(getPositiveArray(sumOfPositives));

// challenge 2:
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
const array = [14, 7, 25, 31, 10, 42];

console.log(findMax(array));

// challenge 3:
const findWinner = (candidates) => {
  let winner = candidates[0];

  for (let i = 1; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  return winner;
};
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 95 },
];

console.log(findWinner(candidates));

// challenge 4:
function findLongestWord(array) {
  let longestWord = "";

  array.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

let word = findLongestWord(["grapefruits", "fruits", "apple", "over"]);
console.log(word);

// challenge 5:
function countProperties(obj) {
  return Object.keys(obj).length;
}
let user = {
  name: "Asma",
  age: 30,
  city: "paris",
};
console.log(countProperties(user));

// challenge 6:
function filterByLength(string, minLength) {
  let newArray = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i].length >= minLength) {
      newArray.push(string[i]);
    }
  }
  return newArray;
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));

// challenge 7:
function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumOfEvenNumbers(numbers));

// challenge 9:
function countTruthy(obj) {
  let count = 0;
  for (let key of obj) {
    if (obj[key]) {
      count++;
    }
  }
  return count;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));

// challenge 8:

let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sumDiff(numList);
function sumDiff(numbers) {
  let even = [];
  let odd = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }
  }

  console.log("Odd numbers:", odd);
  console.log("Even numbers:", even);

  let oddSum = odd.reduce((total, num) => total + num, 0);
  let evenSum = even.reduce((total, num) => total + num, 0);

  console.log("Odd sum total: " + oddSum);
  console.log("Even sum total: " + evenSum);
  console.log("Difference (odd - even): " + (oddSum - evenSum));
}

// challenge 10:
function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  let avg = total / numbers.length;
  return avg;
}
console.log(average([2, 4, 6, 8]));
console.log(average([]));

// challenge 11:
function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([5, 4, 8, 5, 2], 10));

// challenge 12:
function reverseLinearSearch(arr, key) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}
console.log(reverseLinearSearch([5, 4, 7, 1, 4, 7], 7));
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));

// challenge 13:
function linearSearchAll(arr, key) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      indices.push(i);
    }
  }
  return indices;
}
console.log(linearSearchAll([5, 4, 7, 1, 4, 7], 7));
console.log(linearSearchAll([5, 4, 7, 1, 4, 7], 10));

// challenge 14:
function countOccurrences(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (counts[word]) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  }

  return counts;
}
console.log(
  countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
);

// challenge 15:
function removeDuplicates(arr) {
  let loneItems = [];
  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];

    if (!loneItems.includes(currentItem)) {
      loneItems.push(currentItem);
    }
  }

  return loneItems;
}
let numbers = [1, 2, 3, 2, 4, 1, 5];
let result = removeDuplicates(numbers);
console.log(result);

// challenge 16:
function mostFrequent(arr) {
  const counts = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
}

const array = ["Cat", "Dog", "Cat", "Goat", "Cow", "Cat"];
console.log(mostFrequent(array));

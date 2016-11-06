/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
function letterCount(string) {
  var solution = {};                          //set solution to an object {}
  var stringToArray = string.split("");       //string.split takes a string and splits it into an array, store in a variable
  stringToArray.forEach(function(letter) {    //array.forEach runs a function on each element in the array, passing the element as a parameter
    if (solution[letter]) {                   //if the solution array iterates the same letter/ element it will add 1 to the solution variable
      solution[letter] += 1;
    } else {                                  //by default each solution element is equal to 1
      solution[letter] = 1;
    }
  });
  // console.log(solution)                
  return solution;
}
letterCount('kevinn');

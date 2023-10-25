function isPalindrome(word) {
  // Write your algorithm here
 
    word = word.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }
    }
    return true;
  
  
}

/* 
  Add your pseudocode here
  function isPalindrome(word: string) { boolean:
  word = word.toLowerCase()
  for i from 0 to floor(word.length / 2):
    if word[i] != word[word.length - 1 - i]:
      return false
  return true
  }
*/

/*
  Add written explanation of your solution here

This function takes a string word as input and returns true if it is a palindrome, and false otherwise. It first converts the string to lowercase using the toLowerCase() method, and then iterates over the first half of the string using a for loop. For each character in the first half, it checks if the corresponding character in the second half is the same. If they are not the same, it returns false. If all characters match, it returns true.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

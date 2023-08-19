/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


function isAnagram(str1, str2) {
    let len1 = str1.length; 
    let len2 = str2.length;

    if(len1 != len2 ) {
        console.log("Two string is not anagram!!!");
        return false
    }

    console.log("Lenght is same..");

    let s1 = str1.toLowerCase().split('').sort().join();
    let s2 = str2.toLowerCase().split('').sort().join();

    console.log("First string: "+s1)
    console.log("Second string: "+s2)

    if(s1 === s2) {
        console.log("This two string are anagram of each other");
        return true;
      } else {
        console.log("This two string are not anagram of each other");
        return false
      }

}

console.log("*********** First Use case **************");
isAnagram("Debit Card","Bad Credit");

/* console.log("*********** Second Use case **************");

isAnagram("alkesh","lakesh");
 */
module.exports = isAnagram;
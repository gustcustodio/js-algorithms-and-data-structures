/**
 * todo Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 *
 * ? Inputs
 * single words
 * no space, pontuations, numbers, etc...
 * all lower case letters
 *
 * ? Outputs Examples
 * validAnagram(" ", " ") - true
 * validAnagram("aaz", "zza") - false
 * validAnagram("anagram", "nagaram") - true
 * validAnagram("rat", "car") - false
 * validAnagram("awesome", "awesom") - false
 * validAnagram("qwerty", "qeywrt") - true
 * validAnagram("texttwisttime", "timetwisttext") - true
 */

function verifyAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(verifyAnagram("texttwisttime", "timetwisttext"));

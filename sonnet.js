let sonnet = document.getElementById("sonnet");
console.log(sonnet);
let sonnetText = document.getElementById("sonnet").innerHTML
console.log(sonnetText);

// Find and output the starting position of the word "orphans".
let sonnetOutput = sonnetText.indexOf("orphans");
console.log(sonnetOutput);

// Output the number of characters in the sonnet.
let sonnetLength = sonnetText.length;
console.log(sonnetLength);

// Replace the first occurance of the string "winter" with "yuletide".
let sonnetReplaceFirst = sonnetText.replace("winter", "yuletide");
console.log(sonnetReplaceFirst);

// Replace all occurances of the string "the" with "a large".
let sonnetReplaceThe = sonnetText.replace(/the/g, "a large");
console.log(sonnetReplaceThe);

// Set the content of the sonnet div with the new string.

document.getElementById("sonnet").innerHTML = sonnetText.replace("winter", "yuletide").replace(/the/g, "a large");
console.log(newSonnet);
// sonnet = sonnet.replace("winter", "yuletide").replace(/the/g, "a large");


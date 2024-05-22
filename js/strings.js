//STEP 1
// let name = prompt("What is your name?");
// let nameLength = name.length;
// alert("The length of your name is: " + nameLength);


//STEP 2
// let name = prompt("What is your name?");
// let num;

// while (true) {
//   num = parseInt(prompt("Enter a number to find the corresponding letter in your name:"));
  
//   if (!isNaN(num) && num >= 0 && num < name.length) {
//     break; // Exit the loop if the input is valid
//   } else {
//     alert("Please enter a valid number within the range of your name's length.");
//   }
// }

// let letter = name.charAt(num);
// alert(`The letter '${letter}' is at position ${num} in the string "${name}".`);


//STEP 3
// let firstName = prompt("What is your first name?");
// let lastName = prompt("What is your last name?");
// alert(`Your name is: ${firstName.concat(" ", lastName)}`);

//STEP 4
// let s = "The quick brown fox jumps over the lazy dog";
// alert(s.indexOf("fox"))

//STEP 5
// let s = "The quick brown fox jumps over the lazy dog";
// alert(s.lastIndexOf("fox"))


//STEP 6
// let s = "The quick brown fox jumps over the lazy dog";
// let name = prompt("What is your name?");
// alert(s.replace("lazy dog", name))

//STEP 7
// let s = "The quick brown fox jumps over the lazy dog";
// let word = prompt("Enter a word");
// let regex = new RegExp(word, "g");
// let matches = s.match(regex);
// alert(matches);

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog"
// let new_string = old_string.slice(31).toUpperCase()
// alert(new_string)

//STEP 9
// let s = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
// let mod_string = s.trim().toLowerCase()
// alert(mod_string)

//STEP 10
// let s = "the quick brown fox jumps over the lazy dog";
// let capitalizedString = s.charAt(0).toUpperCase() + s.slice(1);
// alert(capitalizedString);


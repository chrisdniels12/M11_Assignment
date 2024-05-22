//STEP 1

// function sortAlphabet(str) {
//     return str.split("").sort().join("")
// }
// strOne = "hello"
// console.log(sortAlphabet(strOne))

//STEP 2
// function capitalizeFirstLetterOfEachWord(str) {
//     let words = str.split(' ')
//     let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     return capitalizedWords.join(' ')
// }

// let startStr = 'the quick brown fox'
// let result = capitalizeFirstLetterOfEachWord(startStr)
// console.log(result)


//STEP 3
// function vowelCounter(str) {
//     let counter = 0
//     for (let char of str) {
//         if ("aeiouy".includes(char.toLowerCase())) {
//             counter++
//         }
//     }
//     return counter
// }

// let words = "The quick brown fox"
// let result = vowelCounter(words)
// console.log(result)



//STEP 4
// function randomStringGen(num) {
//     let result = ''
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

//     for (let i = 0; i < num; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length)
//         result += characters.charAt(randomIndex)
//     }

//     return result
// }
// let genStr = randomStringGen(8)
// console.log(genStr)

//STEP 5
// function longestCountryName(countryList) {
//     let longestName = countryList[0]
//     for (let i = 1; i < countryList.length; i++) {
//         let currentCountry = countryList[i];
//         if (currentCountry.length > longestName.length) {
//             longestName = currentCountry
//         }
//     }
//     return longestName
// }

// let countries = ["Australia", "Germany", "United States of America"];
// console.log(longestCountryName(countries))

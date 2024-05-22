//STEP 1

// let month = parseInt(prompt("Enter the month (1-12):"))
// let year = parseInt(prompt("Enter the year:"))
// if (month >= 1 && month <= 12 && !isNaN(year)) {
//     let daysInMonth = new Date(year, month, 0).getDate();
    
//     console.log(`There are ${daysInMonth} days in month ${month} of the year ${year}.`);
// } else {
//     console.error("Invalid input. Please enter a valid month (1-12) and year.");
// }


//STEP 2
// let inputDate = prompt("Enter a date in the format YYYY-MM-DD:");
// let date = new Date(inputDate);

// if (!isNaN(date.getTime())) {
//     let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     let monthName = monthNames[date.getMonth()];
    
//     console.log(`The month name for the date ${inputDate} is ${monthName}.`);
// } else {
//     console.error("Invalid date. Please enter a valid date in the format YYYY-MM-DD.");
// }


//STEP 3
// let inputDate = prompt("Enter a date in the format YYYY-MM-DD:");

// let date = new Date(inputDate);

// if (!isNaN(date.getTime())) {
//     let dayOfWeek = date.getDay();
//     let isWeekend = (dayOfWeek === 6 || dayOfWeek === 0);
    
//     if (isWeekend) {
//         console.log(`${inputDate} falls on a weekend.`);
//     } else {
//         console.log(`${inputDate} does not fall on a weekend.`);
//     }
// } else {
//     console.error("Invalid date. Please enter a valid date in the format YYYY-MM-DD.");
// }


//STEP 4
// let today = new Date();
// let yesterday = new Date(today);
// yesterday.setDate(today.getDate() - 1);
// let dayOfWeek = yesterday.toLocaleDateString('en-US', { weekday: 'long' });
// console.log(`Yesterday was ${dayOfWeek}.`);

//STEP 5
// let today = new Date();
// let dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
// console.log(dayOfWeek[0])
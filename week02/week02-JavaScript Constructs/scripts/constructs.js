const numberOfDays = 6;
const LIMIT = 30;

let studentReport = [11, 42, 33, 64, 29, 37, 44];

//for loop
console.log("FOR LOOP");

for (let i = 0; i < studentReport.length; i++) {

    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }

}

//while loop
console.log("WHILE LOOP");

let i = 0;

while (i < studentReport.length) {

    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }

    i++;
}

//for loop
console.log("FOREACH LOOP");

studentReport.forEach(function (item) {

    if (item < LIMIT) {
        console.log(item);
    }

});

//for in loop
console.log("FOR...IN LOOP");

for (let index in studentReport) {

    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }

}


const options = { weekday: "long" };

const today = new Date();

let todayString =
    new Intl.DateTimeFormat("en-US", options).format(today);

document.getElementById("today").innerHTML = `Today is <strong>${todayString}</strong>`;

// next n days
for (let i = 1; i <= numberOfDays; i++) {

    const nextDay = new Date();

    nextDay.setDate(today.getDate() + i);

    let nextDayString = new Intl.DateTimeFormat("en-US", options).format(nextDay);

    const item = document.createElement("li");

    item.textContent = nextDayString;

    document.querySelector("ul").appendChild(item);
}

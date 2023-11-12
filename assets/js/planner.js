console.log("This is planner.js");

// Current Date
var dateToday = dayjs().format("dddd[,] MMMM D");
$("#currentDay").text(dateToday);

// Hours in the workday
// var hours = [ "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm" ]

// // Display schedule
// var hoursIndex = 0;
//     // loop through array of hours and display one input per hour
// function displaySchedule () {
//     var hour = hours[hoursIndex];
//     var inputBlockEl = $(".input-hour");
//     var hourDisplay = $(".time");
//     hourDisplay.text = hour;
//     // iterate over the hours array
//     for (var i = 0; i < hours.length - 1; i++) {
//     inputBlockEl.clone().insertAfter(inputBlockEl);
//     }
// }

// displaySchedule();
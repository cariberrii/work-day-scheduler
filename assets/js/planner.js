console.log("This is planner.js");

// Current Date
var dateToday = dayjs().format("dddd[,] MMMM D");
$("#currentDay").text(dateToday);

 
// Limit rows of text to 3 within each hour input
$('textarea[data-limit-rows=true]').on('keypress', function (event) {
    var textarea = $(this),
        numberOfLines = (textarea.val().match(/\n/g) || []).length + 1,
        maxRows = parseInt(textarea.attr('rows'));
    
    if (event.which === 13 && numberOfLines === maxRows ) {
      return false;
    }
  });

  
  // Change color of hour block based on current time
  function hourColor() {
      var hour = parseInt(dayjs().format("H"));
      console.log(hour);
      
      $(".input-hour").each(function() {
          var currentHour = parseInt($(this).attr("id"));
          
        console.log(currentHour);
        console.log(this);

        if (currentHour > hour) {
            $(this).children("textarea").addClass("future");
        } else if (currentHour === hour) {
            $(this).children("textarea").addClass("present");
        } else {
            $(this).children("textarea").addClass("past");
        }
    })
};

// Call function
hourColor();
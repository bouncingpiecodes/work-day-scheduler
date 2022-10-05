window.onload = function () {
  var current = new Date();
  var displayDate = moment(current).format("dddd, MMMM Do");
  $("#currentDay").html(displayDate);
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  workHours.forEach(function (hour) {
    var theDate = new Date(hour);
    var displayHour = moment(theDate.setHours(hour)).format("h a");
    var timeClass;
    if (theDate < current) {
      timeClass = "past";
    } else if (theDate >= current) {
    }
    $(".container").html(
      $(".container").html() +
        `<div class="row">
            <div class="hour">${displayHour}</div>
            <textarea aria-label="description" class="description">test</textarea>
            <button class="saveBtn">Save</button>
        </div>`
    );
  });
};

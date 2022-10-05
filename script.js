window.onload = function () {
  var current = new Date();
  var displayDate = moment(current).format("dddd, MMMM Do");
  $("#currentDay").html(displayDate);
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  workHours.forEach(function (hour) {
    var displayHour = moment(new Date().setHours(hour)).format("h a");
    $(".container").html(
      $(".container").html() +
        `<div class="row">
            <div class="hour">${displayHour}</div>
            <textarea aria-label="description" class="description present">test</textarea>
            <button class="saveBtn">Save</button>
        </div>`
    );
  });
};

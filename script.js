var storage = JSON.parse(localStorage.getItem("storage")) ?? {};
window.onload = function () {
  var current = new Date();
  var displayDate = moment(current).format("dddd, MMMM Do");
  $("#currentDay").html(displayDate);
  var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  workHours.forEach(function (hour) {
    var theDate = new Date().setHours(hour);
    var displayHour = moment(theDate).format("h a");
    var description = !!storage[hour] ? storage[hour] : "";
    var timeClass;
    if (theDate < current) {
      timeClass = "past";
    } else if (
      theDate >= current &&
      theDate < current.getTime() + 60 * 60 * 1000
    ) {
      timeClass = "present";
    } else {
      timeClass = "future";
    }
    $(".container").html(
      $(".container").html() +
        `<div class="row">
            <div class="hour">${displayHour}</div>
            <textarea id="description-${hour}" aria-label="description" class="description ${timeClass}">${description}</textarea>
            <button onclick="save(${hour})" class="saveBtn">Save</button>
        </div>`
    );
  });
};
function save(hour) {
  var description = $(`#description-${hour}`).val();
  storage[hour] = description;
  localStorage.setItem("storage", JSON.stringify(storage));
  alert("Record Saved");
}

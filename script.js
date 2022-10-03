window.onload = function () {
  var current = new Date();
  var displayDate = moment(current).format("dddd, MMMM Do");
  $("#currentDay").html(displayDate);
};

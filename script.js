var currentDay = $('#currentDay');
var saveBtn = $('.btn')

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    currentDay.text(rightNow);
}

displayTime();






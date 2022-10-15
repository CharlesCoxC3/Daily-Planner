var currentDay = $('#currentDay');
var saveBtn = $('.btn');
var textArea = $("#me");
var time = moment().format("hhA");
var nineAM = document.getElementById("09AM");
var tenAM = document.getElementById("10AM");
var elevenAM = document.getElementById("11AM");
var twelevePM = document.getElementById("12PM");
var onePM = document.getElementById("01PM");
var twoPM = document.getElementById("02PM");
var threePM = document.getElementById("03PM");
var fourPM = document.getElementById("04PM");
var fivePM = document.getElementById("05PM");


if (nineAM.dataset.time == time){
    $(nineAM, "textarea").css("background-color", "green");
    $(nineAM, "textarea").css("color", "white");     
}
else if(nineAM.dataset.time >time){
    $(nineAM, "textarea").css("background-color", "grey"); 
    $(nineAM, "textarea").css("color", "white"); 
}
else {
    $(nineAM, "textarea").css("background-color", "red");
    $(nineAM, "textarea").css("color", "white");  
}

if (tenAM.dataset.time == time){
    $(tenAM, "textarea").css("background-color", "green");
    $(tenAM, "textarea").css("color", "white");     
}
else if(tenAM.dataset.time >time){
    $(tenAM, "textarea").css("background-color", "grey"); 
    $(tenAM, "textarea").css("color", "white"); 
}
else {
    $(tenAM, "textarea").css("background-color", "red");
    $(tenAM, "textarea").css("color", "white");  
}

if (elevenAM.dataset.time == time){
    $(elevenAM, "textarea").css("background-color", "green");
    $(elevenAM, "textarea").css("color", "white");     
}
else if(elevenAM.dataset.time >time){
    $(elevenAM, "textarea").css("background-color", "grey"); 
    $(elevenAM, "textarea").css("color", "white"); 
}
else {
    $(elevenAM, "textarea").css("background-color", "red");
    $(elevenAM, "textarea").css("color", "white");  
}

if (twelevePM.dataset.time == time){
    $(twelevePM, "textarea").css("background-color", "green");
    $(twelevePM, "textarea").css("color", "white");     
}
else if(twelevePM.dataset.time >time){
    $(twelevePM, "textarea").css("background-color", "grey"); 
    $(twelevePM, "textarea").css("color", "white"); 
}
else {
    $(twelevePM, "textarea").css("background-color", "red");
    $(twelevePM, "textarea").css("color", "white");  
}

if (onePM.dataset.time == time){
    $(onePM, "textarea").css("background-color", "green");
    $(onePM, "textarea").css("color", "white");     
}
else if(onePM.dataset.time >time){
    $(onePM, "textarea").css("background-color", "grey"); 
    $(onePM, "textarea").css("color", "white"); 
}
else {
    $(onePM, "textarea").css("background-color", "red");
    $(onePM, "textarea").css("color", "white");  
}

if (twoPM.dataset.time == time){
    $(twoPM, "textarea").css("background-color", "green");
    $(twoPM, "textarea").css("color", "white");     
}
else if(twoPM.dataset.time >time){
    $(twoPM, "textarea").css("background-color", "grey"); 
    $(twoPM, "textarea").css("color", "white"); 
}
else {
    $(twoPM, "textarea").css("background-color", "red");
    $(twoPM, "textarea").css("color", "white");  
}

if (threePM.dataset.time == time){
    $(threePM, "textarea").css("background-color", "green");
    $(threePM, "textarea").css("color", "white");     
}
else if(threePM.dataset.time >time){
    $(threePM, "textarea").css("background-color", "grey"); 
    $(threePM, "textarea").css("color", "white"); 
}
else {
    $(threePM, "textarea").css("background-color", "red");
    $(threePM, "textarea").css("color", "white");  
}

if (fourPM.dataset.time == time){
    $(fourPM, "textarea").css("background-color", "green");
    $(fourPM, "textarea").css("color", "white");     
}
else if(fourPM.dataset.time >time){
    $(fourPM, "textarea").css("background-color", "grey"); 
    $(fourPM, "textarea").css("color", "white"); 
}
else {
    $(fourPM, "textarea").css("background-color", "red");
    $(fourPM, "textarea").css("color", "white");  
}

if (fivePM.dataset.time == time){
    $(fivePM, "textarea").css("background-color", "green");
    $(fivePM, "textarea").css("color", "white");     
}
else if(fivePM.dataset.time >time){
    $(fivePM, "textarea").css("background-color", "grey"); 
    $(fivePM, "textarea").css("color", "white"); 
}
else {
    $(fivePM, "textarea").css("background-color", "red");
    $(fivePM, "textarea").css("color", "white");  
}

displayTime();

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    currentDay.text(rightNow);
}

$(saveBtn).on("click",function(){
    console.log("you clicked the button") 
    var todo = {
        nineAmTodo: nineAM.textContent,
        tenAmTodo: tenAM.textContent,
        elevenAmTodo: elevenAM.textContent,
        twelevePmTodo: twelevePM.textContent,
        onePmTodo: onePM.textContent,
        twoPmTodo: twoPM.textContent,
        threePmTodo: threePM.textContent,
        fourPmTodo: fourPM.textContent,
        fivePmTodo: fivePM.textContent,
    };

    localStorage.setItem("todo",JSON.stringify(todo));

});

//if (timeDiv.dataset.time == time){

//}

function enterPlans(){
    console.log("button clicked")
};


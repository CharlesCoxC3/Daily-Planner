var currentDay = $('#currentDay');
var btn1= $('#btn1');
var btn2= $('#btn2');
var btn3= $('#btn3');
var btn4= $('#btn4');
var btn5= $('#btn5');
var btn6= $('#btn6');
var btn7= $('#btn7');
var btn8= $('#btn8');
var btn9= $('#btn9');
var btnReset= $('#resetBtn');
var time = moment().format("H");
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
else if(nineAM.dataset.time > time){
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

$(btn1).on("click",function(){   
    localStorage.setItem("9am",$(nineAM).val())
});

$(btn2).on("click",function(){

    localStorage.setItem("10am",$(tenAM).val())
});

$(btn3).on("click",function(){
    localStorage.setItem("11am",$(elevenAM).val())
});

$(btn4).on("click",function(){
    localStorage.setItem("12pm",$(twelevePM).val())
});

$(btn5).on("click",function(){
    localStorage.setItem("1pm",$(onePM).val())
});

$(btn6).on("click",function(){
    localStorage.setItem("2pm",$(twoPM).val())
});

$(btn7).on("click",function(){
    localStorage.setItem("3pm",$(threePM).val())
});

$(btn8).on("click",function(){
    localStorage.setItem("4pm",$(fourPM).val())
});

$(btn9).on("click",function(){
    localStorage.setItem("5pm",$(fivePM).val())
});

getTodo()

function getTodo(){
nineAM.textContent = localStorage.getItem("9am",nineAM.textContent)
tenAM.textContent = localStorage.getItem("10am",tenAM.textContent)
elevenAM.textContent = localStorage.getItem("11am",elevenAM.textContent)
twelevePM.textContent = localStorage.getItem("12pm",twelevePM.textContent)
onePM.textContent = localStorage.getItem("1pm",onePM.textContent)
twoPM.textContent = localStorage.getItem("2pm",twoPM.textContent)
threePM.textContent = localStorage.getItem("3pm",threePM.textContent)
fourPM.textContent = localStorage.getItem("4pm",fourPM.textContent)
fivePM.textContent = localStorage.getItem("5pm",fivePM.textContent)
}

$(btnReset).on("click",function(){
    nineAM.textContent = ""
    tenAM.textContent = ""
    elevenAM.textContent = ""
    twelevePM.textContent = ""
    onePM.textContent = ""
    twoPM.textContent = ""
    threePM.textContent = ""
    fourPM.textContent = ""
    fivePM.textContent = ""
 
    localStorage.clear()
})
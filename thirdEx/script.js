
var number = prompt("enter a int number");

if (number < 24) {
    alert(number + "-Is extra small");
}else if (number > 25 || number < 49) {
    alert(number+"-Is small");
}else if(number > 50 || number < 74) {
    alert(number+"-Is medium");
}else if (number > 75 || number < 99) {
    elert(number+"-Is large");
}else {
    alert("try another value");
}
let name=sessionStorage.getItem("name");//which name enterd during the entry 
let points=sessionStorage.getItem("points");//to check point on local storage
let user_time=sessionStorage.getItem("time");

document.querySelector(".name").innerHTML= name;
document.querySelector(".points").innerHTML= points;
document.querySelector(".time").innerHTML= user_time;


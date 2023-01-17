let dt=new Date(new Date().setTime(0));//zero pr set ho gya time
let time=dt.getTime();
let seconds=Math.floor((time%(100*60))/1000);
let minute=Math.floor((time%(1000*60*60))/(1000*60));
let time1=0;

let mytime=setInterval(function(){
if(seconds<=59){
    seconds++;
}
else{
    minute++;
    seconds=0;
}
let formated_sec=seconds<10? `0${seconds}`:`${seconds}`;
let formated_min=seconds<10? `0${minute}`:`${minute}`;
document.querySelector(".time").innerHTML=`${formated_min}:${formated_sec}`;
},1000);
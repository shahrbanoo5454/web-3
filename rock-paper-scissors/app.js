var rand; //عدد تصادفی
var round=1; //راند چندم
var result; //نتیجه این هر راند 
var computer_record=0; //رکورد کامپیوتر
var user_record=0;  //کورد کاربر



function rock(){
    round++;
    rand=Math.floor(Math.random() * 3);
    result=0;

    if(rand == 0){
        alert("سنگ");
      document.getElementById('$Result').innerText="مساوی";
      

    }
    else if(rand == 1){
    alert("کاغذ");
       computer_record++;
    document.getElementById('$Result').innerText="باختی!!";
    document.getElementById('$computer-record').innerText=computer_record;
    }
    else{
        alert("قیچی");
        user_record++;
    document.getElementById('$Result').innerText="بردی!!";
    document.getElementById('$user-record').innerText=user_record;
    }
    document.getElementById("round").innerText=round;
}
//سنگ


function paper(){
    round++;
    rand=Math.floor(Math.random() * 3);
    result=1;

    if(rand == 1){
        alert("کاغذ");
      document.getElementById('$Result').innerText="مساوی";
      

    }
    else if(rand == 2){
    alert("قیچی");
       computer_record++;
    document.getElementById('$Result').innerText="باختی!!";
    document.getElementById('$computer-record').innerText=computer_record;
    }
    else{
        alert("سنگ");
        user_record++;
    document.getElementById('$Result').innerText="بردی!!";
    document.getElementById('$user-record').innerText=user_record;
    }
    document.getElementById("round").innerText=round;
}
//کاغذ



function scissors(){
    round++;
    rand=Math.floor(Math.random() * 3);
    result=2;

    if(rand == 2){
        alert("قیچی");
      document.getElementById('$Result').innerText="مساوی";
      

    }
    else if(rand == 0){
    alert("سنگ");
       computer_record++;
    document.getElementById('$Result').innerText="باختی!!";
    document.getElementById('$computer-record').innerText=computer_record;
    }
    else{
        alert("کاغذ");
        user_record++;
    document.getElementById('$Result').innerText="بردی!!";
    document.getElementById('$user-record').innerText=user_record;
    }
    document.getElementById("round").innerText=round;
}




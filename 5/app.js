function addition(){
var $num1 = (document.getElementById('num1').value);
$num1=Number($num1);
var $num2 = (document.getElementById('num2').value);
$num2=Number($num2);
    var sum=($num1+$num2);
    console.log(sum);
   document.getElementById('answer').innerHTML='answer is: '+sum;
}

function subtraction(){
    var $num1 = (document.getElementById('num1').value);
    $num1=Number($num1);
    var $num2 = (document.getElementById('num2').value);
    $num2=Number($num2);
        var sum=($num1-$num2);
        console.log(sum);
       document.getElementById('answer').innerHTML='answer is: '+sum;
    }

function multiplication(){
    var $num1 = (document.getElementById('num1').value);
     $num1=Number($num1);
     var $num2 = (document.getElementById('num2').value);
      $num2=Number($num2);
          var sum=($num1*$num2);
          console.log(sum);
         document.getElementById('answer').innerHTML='answer is: '+sum;
      }   
 
function division(){
    var $num1 = (document.getElementById('num1').value);
     $num1=Number($num1);
     var $num2 = (document.getElementById('num2').value);
      $num2=Number($num2);
          var sum=($num1/$num2);
          console.log(sum);
         document.getElementById('answer').innerHTML='answer is: '+sum;
      }   
 



var $racer2 = document.getElementById('racer2');
var $racer3 = document.getElementById('racer3');
var $racer4 = document.getElementById('racer4');
var $output1 = document.getElementById('output1');
var $output2 = document.getElementById('output2');
var $output3 = document.getElementById('output3');
var $output4 = document.getElementById('output4');
var kart = [];
var num = ['J', 'Q', 'K', 'A',2, 3, 4, 5, 6, 7, 8, 9, 10];



function mcard() {
   
        for(var j = 0; j < num.length; j++) {
            kart.push(num[j] );
        }
    
    return kart;
};


function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

$racer2.onclick = function() {
    kart =[];
    $output2.innerHTML = '';
    $output3.innerHTML = '';
    $output1.innerHTML = '';
    $output4.innerHTML = '';

    kart = shuffle(mcard());
    $output2.innerHTML = '<h4 class="bg-warning mt-5 ">PLAYER 1</h4><div class=" bg-warning ">' + kart[0] + '</div><div class=" bg-warning">' + kart[1] + '</div>';
    $output3.innerHTML = '<h4 class="player-2 bg-warning mt-5">PLAYER 2</h4><div class="bg-warning ">' + kart[2] + '</div><div class="bg-warning">' + kart[3] + '</div>';
};

$racer3.onclick = function() {
    kart =[];
    $output2.innerHTML = '';
    $output3.innerHTML = '';
    $output1.innerHTML = '';
    $output4.innerHTML = '';

    kart = shuffle(mcard());
    $output2.innerHTML = '<h4 class=bg-primary mt-5>PLAYER 1</h4><div class=" bg-primary">' + kart[0] + '</div><div class= bg-primary mt-5>' + kart[1] + '</div>';
    $output3.innerHTML = '<h4 class="player-2 bg-primary mt-5">PLAYER 2</h4><div class= bg-primary>' + kart[2] + '</div><div class= bg-primary mt-5>' + kart[3] + '</div>';
    $output1.innerHTML = '<h4 class="player-3 bg-primary mt-5 mt-5">PLAYER 3</h4><div class= bg-primary mt-5> ' + kart[4] + '</div><div class= bg-primary mt-5>' + kart[5] + '</div>';
};

$racer4.onclick = function() {
    kart =[];
    $output2.innerHTML = '';
    $output3.innerHTML = '';
    $output1.innerHTML = '';
    $output4.innerHTML = '';

    kart = shuffle(mcard());
    $output2.innerHTML = '<h4 class= bg-danger mt-5>PLAYER 1</h4> <div class=bg-danger mt-5>' + kart[0] + '</div><div class=bg-danger mt-5>' + kart[1] + '</div>';
    $output3.innerHTML = '<h4 class="player-2 bg-danger mt-5">PLAYER 2</h4><div class=bg-danger mt-5>' + kart[2] + '</div><div class=bg-danger mt-5>' + kart[3] + '</div>';
    $output1.innerHTML = '<h4 class="player-3 bg-danger mt-5">PLAYER 3</h4><div class=bg-danger mt-5>' + kart[4] + '</div><div class=bg-danger mt-5>' + kart[5] + '</div>';
    $output4.innerHTML = '<h4 class="player-4 bg-danger mt-5">PLAYER 4</h4><div class=bg-danger mt-5>' + kart[6] + '</div><div class=bg-danger mt-5>' + kart[7] + '</div>';
};



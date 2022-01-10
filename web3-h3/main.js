var clock =parseInt(prompt("what time is it"));

switch(clock) {
    case 8:
        document.getElementById('output').innerHTML = '<h1 class=" text-warningtext-warning  p-3 bg-dark ">Wake up.</h1>';
        break;
        
    case 9:
        document.getElementById('output').innerHTML = '<h1 class=" text-warning   p-3 bg-dark ">Wake up.</h1>';
        break;

    case 10:
        document.getElementById('output').innerHTML = '<h1 class=" text-warning   p-3 bg-dark ">Go to the work.</h1>';
        break;

    case 11:
        document.getElementById('output').innerHTML = '<h1 class=" text-warning  p-3 bg-dark ">Go to the work.</h1>';
        break;

    case 12:
        document.getElementById('output').innerHTML = '<h1 class=" text-warning  p-3 bg-dark ">Lunch</h1>';

    case 13:
        document.getElementById('output').innerHTML = '<h1 class="text-warning p-3 bg-dark">Go to work</h1>';
        break;

    case 14:
        document.getElementById('output').innerHTML = '<h1 class="text-warning   p-3 bg-dark">Go to work</h1>';
        break;

    case 15:
        document.getElementById('output').innerHTML = '<h1 class="text-warning  p-3 bg-dark ">Go to work</h1>';
        break;

    case 16:
        document.getElementById('output').innerHTML = '<h1 class="text-warning  p-3 bg-dark ">Go to work.</h1>';
        break;

    case 17:
        document.getElementById('output').innerHTML = '<h1 class=" text-warning p-3 bg-dark ">Gym.</h1>';
        break;

    case 18:
        document.getElementById('output').innerHTML = '<h1 class="  text-warning bg-dark p-3">Gym.</h1>';
        break;

    case 19:
        document.getElementById('output').innerHTML = '<h1 class="  text-warning  bg-dark p-3">Dinner time.</h1>';
        break;

    case 20:
        document.getElementById('output').innerHTML = '<h1 class="text-warning p-3 bg-dark ">Watch TV.</h1>';
        break;

    case 21:
        document.getElementById('output').innerHTML = '<h1 class="text-warning p-3 bg-dark ">Watch TV.</h1>';
        break;

    case 22:
        document.getElementById('output').innerHTML = '<h1 class="text-warning p-3 bg-dark ">Time to go to sleep</h1>';
        break;

    default:
        document.getElementById('output').innerHTML = '<h1 class="text-warning p-3 bg-dark">You should be sleeping.</h1>';
}
var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
var button = document.getElementById('JSButton');
button.addEventListener('click', (event) => {
    if (Date.now() - lastClick >= rate) {
        count += event.clientX;
        console.log(count)
        lastClick = Date.now();
    }
});


var button = document.getElementById('RxJSButton');

var observi = Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map(event => event.clientX);

observi.subscribe(text => console.log(text));

observi.scan((count, clientX) => count + clientX, 0)
    .subscribe(h => console.log(h));
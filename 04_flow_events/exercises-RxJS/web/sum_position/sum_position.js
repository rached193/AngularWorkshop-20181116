var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
var button = document.getElementById('JSButton');
button.addEventListener('click', function (event) {
    if (Date.now() - lastClick >= rate) {
        count += event.clientX;
        console.log(count);
        lastClick = Date.now();
    }
});
var button = document.getElementById('RxJSButton');
var observi = Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map(function (event) { return event.clientX; });
observi.subscribe(function (text) { return console.log(text); });
observi.scan(function (count, clientX) { return count + clientX; }, 0)
    .subscribe(function (h) { return console.log(h); });

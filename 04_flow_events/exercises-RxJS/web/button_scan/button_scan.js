// creamos el contador
var countJs = 0;
// obtengo el boton
var button = document.getElementById('JSButton');
button.addEventListener('click', function () { return console.log("JS Clicked " + ++countJs + " times"); });
// obtengo el boton
var button = document.getElementById('RxJSButton');
// creo el observable
Rx.Observable.fromEvent(button, 'click')
    // funcion pura (sumo al contador)
    .scan(function (count) { return count + 1; }, 0)
    // subscribe (recibo el contador y lo imprime)
    .subscribe(function (count) { return console.log("RxJS Clicked " + count + " times"); });

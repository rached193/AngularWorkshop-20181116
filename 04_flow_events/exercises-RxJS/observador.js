"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var foo = rxjs_1.Observable.create(function (observer) {
    console.log('Hello');
    observer.next(42);
});
foo.subscribe(function (x) {
    console.log(x);
});
foo.subscribe(function (y) {
    console.log(y);
});
var observable = rxjs_1.Observable.create(function (observer) {
    observer.next(Math.random());
});
// subscription 1
observable.subscribe(function (data) {
    console.log(data); // 0.24957144215097515 (random number)
});
// subscription 2
observable.subscribe(function (data) {
    console.log(data); // 0.004617340049055896 (random number)
});

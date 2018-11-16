"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var subject = new rxjs_1.Subject();
subject.subscribe({
    next: function (v) { return console.log('observerA: ' + v); }
});
subject.subscribe({
    next: function (v) { return console.log('observerB: ' + v); }
});
var observable = rxjs_1.from([1, 2, 3]);
observable.subscribe(subject);
var subject_ramdom = new rxjs_1.Subject();
// subscriber 1
subject_ramdom.subscribe(function (data) {
    console.log(data); // 0.24957144215097515 (random number)
});
// subscriber 2
subject_ramdom.subscribe(function (data) {
    console.log(data); // 0.24957144215097515 (random number)
});
subject_ramdom.next(Math.random());

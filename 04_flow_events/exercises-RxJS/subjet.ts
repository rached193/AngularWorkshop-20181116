import { Observable, Subject, from } from 'rxjs'

var subject = new Subject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

var observable = from([1, 2, 3]);

observable.subscribe(subject);


const subject_ramdom = new Subject();

// subscriber 1
subject_ramdom.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
});

// subscriber 2
subject_ramdom.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
});

subject_ramdom.next(Math.random());
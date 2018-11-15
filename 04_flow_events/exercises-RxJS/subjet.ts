import { Observable, Subject, ReplaySubject} from 'rxjs'

var subject = new Subject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

var observable = Observable.from([1, 2, 3]);

observable.subscribe(subject);


const subject_ramdom = new Subject();

// subscriber 1
subject.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
});

// subscriber 2
subject.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
});

subject.next(Math.random());
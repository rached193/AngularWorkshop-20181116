import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

const timer$ = interval(1000); // creamos un stream contador cada 1 segundo
const TIME_OFFSET = 0;

const getHandAngles = t => {
    const sec = t.getUTCSeconds();
    const min = t.getUTCMinutes();
    const hrs = t.getUTCHours() + TIME_OFFSET;
    return {
        hrs: ((hrs * 30) + (min / 2)) % 360,
        min: (min * 6) % 360,
        sec: (sec * 6) % 360
    }
};



timer$.subscribe(
    data => console.log(data), // mostrará por consola cada segundo: 1, 2, 3, 4...
    err => console.error(err)
);

timer$.pipe(
    map(() => new Date()), // cada evento de timer$ se convierte a un objeto Date
    map(getHandAngles)
).subscribe(angles => {
    console.log(angles) // mostrará algo así { hrs: 332.5, min: 30,  sec: 318 }
});
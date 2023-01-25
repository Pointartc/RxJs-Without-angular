import {interval, map} from 'rxjs'
import {} from 'rxjs/operators'


const stream$ = interval(1000)
    .pipe(
        map((value) => value * 2)
    )

stream$.subscribe({
    next: v => console.log('Next: ', v),
    complete: () => console.log('complete')

}).unsubscribe()

import {Observable, of} from 'rxjs'

// const stream$ = of(1,2,3,4,5);
// stream$.subscribe(val => {
//     console.log(val)
// })

const stream$ = new Observable(observer => {
    observer.next('first Value');
    setTimeout(() => observer.next('after 1000 ms'), 1000)
    setTimeout(() => observer.complete(), 1500)
    // setTimeout(() => observer.error('something went wrong'), 2000),
    setTimeout(() => observer.next('after 3000 ms'), 3000)
})

stream$.subscribe(
    (val) => console.log('Value: ', val),
    (err) => console.log(err),
    () => console.log('complete'),
)

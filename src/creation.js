import {fromEvent, map, Observable, of} from 'rxjs'

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

// stream$.subscribe(
//     (val) => console.log('Value: ', val),
//     (err) => console.log(err),
//     () => console.log('complete'),
// )

// stream$.subscribe({
//     next(val) {
//         console.log('Value: ', val)
//     },
//     error(err) {
//         console.log(err)
//     },
//     complete() {
//         console.log('Complete')
//     }
// })

fromEvent(document.querySelector('canvas'), 'mousemove')
    .pipe(
        map(e => ({
                x: e.offsetX,
                y: e.offsetY,
                ctx: e.target.getContext('2d')
            })
        )
    )
    .subscribe(pos => {
        pos.ctx.fillRect(pos.x, pos.y, 2, 2)
    })

const clear$ = fromEvent(document.getElementById('clear'), 'click')

clear$.subscribe(() => {
    const canvas = document.querySelector('canvas')
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
})

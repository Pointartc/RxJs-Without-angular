import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs'

addEventListener('click', () => {
    // const stream$ = new Subject()
    // const stream$ = new BehaviorSubject('Behavior subject')
    const stream$ = new ReplaySubject(2)

    stream$.next('Hello')
    stream$.next('RX')
    stream$.next('JS')

    stream$.subscribe(v => console.log('value: ', v))
})

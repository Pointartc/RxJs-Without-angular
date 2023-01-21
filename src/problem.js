import {filter, interval, map, scan, take} from 'rxjs'

const btn = document.getElementById('interval');
const rxjsBtn = document.getElementById('rxjs');
const btnCant = document.getElementById('intervalCant');
const rxjsBtnCant = document.getElementById('rxjsCant');

const display = document.querySelector('#problem .result');
// const displayCant = document.querySelector('#problem .resultCant');

const people = [
    {name: 'Vladilen', age: 25},
    {name: 'Elena', age: 17},
    {name: 'Ivan', age: 18},
    {name: 'Igor', age: 14},
    {name: 'Lisa', age: 32},
    {name: 'Irina', age: 13},
    {name: 'Irina', age: 3},
    {name: 'Ia', age: 23},
    {name: 'Ina', age: 59},
    {name: 'Arthur', age: 7},
    {name: 'Denys', age: 7},
    {name: 'Oleg', age: 21}
]

btn.addEventListener('click', () => {
    btn.disabled = true;
    let i = 0;
    const canDrink = [];
    const interval = setInterval(() => {
        if (people[i]) {
            if (people[i].age >= 18) {
                canDrink.push(people[i].name)
            }
            display.textContent = canDrink.join(' ')
            i++
        } else {
            clearInterval(interval)
            btn.disabled = false
        }
    }, 500)
});

btnCant.addEventListener('click', () => {
    btnCant.disabled = true;
    let i = 0;
    const cantDrink = [];
    const intervalCant = setInterval(() => {
        if (people[i]) {
            if (people[i].age < 18) {
                cantDrink.push(people[i].name)
            }
            display.textContent = cantDrink.join(' ')
            i++
        } else {
            clearInterval(intervalCant)
            btnCant.disabled = false;
        }
    }, 500)
})

rxjsBtn.addEventListener('click', () => {
    rxjsBtn.disablet = true;
    interval(500)
        .pipe(
            take(people.length),
            filter(v => people[v].age >= 18),
            map(v => people[v].name),
            scan((acc, v) => acc.concat(v), [])
        )
        .subscribe(res => {
            display.textContent = res.join(' ');
        }, null, () => rxjsBtn.disablet = false)
})

rxjsBtnCant.addEventListener('click', () => {
    rxjsBtnCant.disablet = true;
    interval(500)
        .pipe(
            take(people.length),
            filter(v => people[v].age < 17),
            map(v => people[v].name),
            scan((acc, v) => acc.concat(v), [])
        )
        .subscribe(res => {
            display.textContent = res.join(' ');
        }, null, () => {
            rxjsBtnCant.disablet = false
        })
})

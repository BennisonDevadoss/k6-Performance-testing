import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'

const name = ['Bennison', 'Devadoss', 'Gibson', 'Joseph']
export default function () {
    const randomName = randomItem(name);
    console.log(`hello, my name is ${randomName}`)
    //     console.log(randomItem())
    //     randomItem();
}
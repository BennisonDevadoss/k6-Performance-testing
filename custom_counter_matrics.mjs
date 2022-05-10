import http from 'k6/http';
import { Counter } from 'k6/metrics';

const myCounter = new Counter('my_counter');
export default function () {
    const r = http.get('http://httpbin.test.k6.io');
    console.log(String(r.timings.connecting));
    myCounter.add(1);
    myCounter.add(2);   // Here the myCounter function will give the ouput three, because the counter will give the maximam value
}


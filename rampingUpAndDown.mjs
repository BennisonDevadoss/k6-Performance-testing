import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 20 },  /* increase virtual users */
        { duration: '30s', target: 10 }, /* decrease virtual users */
        { duration: '20s', target: 50 },  
    ],
}

export default function () {
    const res = http.get('https://httpbin.test.k6.io/'); // this URL opens the swagger file
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}
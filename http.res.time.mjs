import { check } from 'k6';
import http from 'k6/http';

export default function () {
    let res = http.get('http://test.k6.io');
    // console.log("Response time is", + String(res.timings.duration) + 'ms');
    check(res, { 'status code 200 is': (r) => { r.status == 226 } });
}

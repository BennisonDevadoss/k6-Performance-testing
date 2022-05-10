import { check } from "k6";
import http from 'k6/http';

export default function () {
    const res = http.get('http://test.k6.io/');
    check(res, {
        "body size is 11,102 bytes": (r) => {
           return r.body.length == 11102   // ???
            console.log(r.body.length == 11102)  // true
            console.log(r.body.length)
        }
    })
}

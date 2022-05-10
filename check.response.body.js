import { check } from "k6";
import http from 'k6/http';

export default function () {
    const res = http.get('http://test.k6.io/');
    // console.log(JSON.parse(JSON.stringify(res)));
    check(res, {
        "verify home page text:": (r) => {
            r.body.includes('collection of sampe web-pages suitable for load')
        }
    })
}
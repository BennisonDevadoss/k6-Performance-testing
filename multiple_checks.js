/* Adding multiple checks */

import { check } from "k6";
import http from 'k6/http';

export default function () {
    const res = http.get('http://test.k6.io/');
    check(res, {
        'is Status 200': (r) => r.status === 200,  // true
        "body size is 11,102 bytes": (r) => r.body.length == 11102,  // true
    });
}

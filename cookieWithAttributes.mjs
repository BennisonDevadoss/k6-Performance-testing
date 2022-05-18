import http from "k6/http";
import { check } from "k6";

export default function () {
    const jar = http.cookieJar();
    jar.set('https://httpbin.test.io/cookies', 'my_cookie', 'hello world', {
        domain: 'httpbin.test.k6.io',
        path: '/cookies',
        secure: true,
        max_age: 600,
    });

    const res = http.get('https://httpbin.test.k6.io/cookies');
    console.log(res.json())
    console.log(res.cookies.my_cookie[0])
    check(res, {
        'has status 200': (r) => r.status === 200,
        "has cookie my_cookie": (r) => r.cookies.my_cookie[0] !== null,
        'cookie has correct value': (r) => r.cookies.my_cookie[0].value == "hello world",
    });
}

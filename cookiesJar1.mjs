import http from "k6/http";
import { check } from "k6";

export default function () {
    const jar = http.cookieJar();
    jar.set('https://httpbin.test.k6.io/cookies', 'my_cookie', 'hello world');

    const cookies = {
        my_cookies: {
            value: 'hello world 2',
            replace: true
        },
    };

    const res = http.get('https://httpbin.test.k6.io/cookies', {
        cookies,  /* Here we pass the cookie so the cookie is updated */
    });
    console.log(res.json())
    check(res.json(), {
        'Cookie has correct value': (r) => r.cookies.my_cookies == "hello world 2"
    });
}
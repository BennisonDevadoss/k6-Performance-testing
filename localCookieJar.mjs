import http from "k6/http";
import { check } from "k6";

export default function () {
    const jar = new http.cookieJar();

    //Add cookie to local jar
    const cookieOptions = {
        domain: 'httpbin.test.k6.io',
        path: '/cookies',
        secure: true,
        max_age: 600,
    };
    jar.set('https://httpbin.test.k6.io/cookies', 'my_cookie', 'hello world', cookieOptions);

    // Override per-VU jar with local jar for the following request
    const res = http.get('https://httpbin.test.k6.io/cookies', { jar });
    check(res, {
        'has status 200': (r) => r.status == 200,
        "has cookie my_cookie": (r) => r.cookies.my_cookie[0] !== null,
        "cookie has correct value": (r) => r.cookies.my_cookie[0].value == 'hello world'
    });
}
/* 
import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const jar = new http.CookieJar();

    // Add cookie to local jar
    const cookieOptions = {
        domain: 'httpbin.test.k6.io',
        path: '/cookies',
        secure: true,
        max_age: 600,
    };
    jar.set('https://httpbin.test.k6.io/cookies', 'my_cookie', 'hello world', cookieOptions);

    // Override per-VU jar with local jar for the following request
    const res = http.get('https://httpbin.test.k6.io/cookies', { jar });
    check(res, {
        'has status 200': (r) => r.status === 200,
        "has cookie 'my_cookie'": (r) => r.cookies.my_cookie[0] !== null,
        'cookie has correct value': (r) => r.cookies.my_cookie[0].value == 'hello world',
    });
}
 */
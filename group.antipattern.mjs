import { group, check } from 'k6';
import http from 'k6/http';

const id = 5;

// reconsider this type of code. 
group('get post', function () {
    http.get('https://www.google.com');
});

group('list posts', function () {
    const res = http.get('http://k6.test.io');
    check(res, {
        "is status 200": (r) => {
            return r.status === 200;
        }
    });
});
import { check } from 'k6';
import http from 'k6/http';

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<200']  // 95% of requests should be below 200ms
    },
};

export default function () {
    const res = http.get('https://test-api.k6.io/public/crocodiles/1/');
    check(res, {
        "http_req_failed_condition": (r) => {
            // return r.status != 200
        },
        "http_req_duration": (r) => {
            console.log(r.timings.duration);
            return r.timings.duration < 260 //ms
        },
    })
}

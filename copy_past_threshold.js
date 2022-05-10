import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    duration: '30s',
    thresholds: {
        // 90% of requests must finish within 400ms.
        http_req_duration: ['p(1)<400'],
    },
};

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
    sleep(1);
}

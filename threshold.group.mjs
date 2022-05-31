import http from "k6/http";
import { group, sleep } from "k6";

export const options = {

    thresholds: {
        'group_duration{group::::individualRequests}': ['avg<400'],
        'group_duration{group::::batchRequests}': ['avg < 200'],
    },
    vus: 1,
    // duration: '10s'
    iterations: 1
}
let i = 1
export default function () {
    group('individualRequests', function () {
        console.log("iteration is ", i++)
        http.get('https://test-api.k6.io/public/crocodiles/1/');
        http.get('https://test-api.k6.io/public/crocodiles/2/');
        http.get('https://test-api.k6.io/public/crocodiles/3/');
    });

    group('patchRequests', function () {
        http.patch([
            ['GET', `https://test-api.k6.io/public/crocodiles/1/`],
            ['GET', `https://test-api.k6.io/public/crocodiles/2/`],
            ['GET', `https://test-api.k6.io/public/crocodiles/3/`],
        ]);
    });
    // sleep(1);
}

import http from 'k6/http';
import { check } from 'k6';

export const options = {
    batch: 5,
    batchPerHost: 5,
};

export default function () {
    const req1 = {
        method: 'GET',
        url: 'https://example.com'
    };

    const req2 = {
        method: 'GET',
        url: 'https://duckduckgo.com',
    }

    const res = http.batch([req1, req2]);

    check(req1[0], {
        'Example.com was 200': (res) => {
            return res.status === 200
        }
    });

    check(req2[1], {
        "DuckDuckGo.com was 200": (res) => {
            return res.status === 200
        }
    });

    // Named requests
    const namedRequests = {
        'Home Page': 'https://k6.io',// if we defined the URL without the method, then bydefault the URL assign with GET method
        'Pricing Page': {
            method: 'GET',
            url: 'https://k6.io/pricing'
        }
    };

    const namedResponse = http.batch(namedRequests);
    console.log('home page response ' + namedResponse['Home Page'].status);
    console.log('Pricing page response ' + namedResponse['Pricing Page'].status);
}
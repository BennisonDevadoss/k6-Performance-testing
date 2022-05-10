import http from 'k6/http';
import { Trend } from 'k6/metrics';
import { check } from 'k6';

const myTrend = new Trend('my_trend');

export default function () {
    // Add tag to requrest metric data
    const res = http.get('http://httpbin.test.k6.io/', {
        tags: {
            my_tag: 'I am a tag'
        },
    });

    // Add tag to request metric data
    check(res, { 'status is 200': (r) => r.status === 200 }, { my_tag: 'I am a tag' });

    // Add tag to custom metric
    myTrend.add(res.timings.connecting, { my_tag: 'I am a tag' });
}

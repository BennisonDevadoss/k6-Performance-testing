import http from "k6/http";
import exec from 'k6/execution';
import { group, sleep } from "k6";

export const options = {
    vus: 10,
    duration: '15s',
    thresholds: {
        'http_reqs{container_group:main}': ['count==3'],
        'http_req_duration{container_group:main}': ['max<1000'],
    },
};

export default function () {
    console.log(exec.vu.tags)  /* {"group":"","scenario":"default"} */
    exec.vu.tags.containerGroup = 'main';
    // console.log(exec.vu.tags.containerGroup)  /* main */

    group('main', function () {
        http.get('http://test.k6.io');
        group('sub', function () {
            http.get('https://httpbin.test.k6.io');
        });
        http.get('http://test-api.k6.io')
    })

    // delete exec.vu.tags.containerGroup;

    http.get('https://httpbin.test.k6.io/io/delay/3');
    sleep(15)
}

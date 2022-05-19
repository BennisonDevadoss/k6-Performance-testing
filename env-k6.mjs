import http from 'k6/http'
import { sleep } from 'k6'
console.log("host is", __ENV.HOSTNAME)
export default function () {
    const res = http.get(`http://${__ENV.MY_HOST}:3000`);
    sleep(1)
}
import http from 'k6/http';
import { sleep, check } from 'k6'
export const options = {
    vus: 10,
    duration: '10s'
}
export default function () {
    for (let i = 0; i <= 100; i++) {
        http.get(`http://localhost:4000/devices?q=${i}`)
    }
    check(res, { "status code 200 is": (r) => r.status == 200 })
    sleep(30);
}

// tags.name=\"http://example.com/posts/1\",
// tags.name=\"http://example.com/posts/2\",

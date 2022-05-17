import http from 'k6/http';
import { sleep, check } from 'k6'

export const options = {
    vus: 100,
    duration: '15s'
    /*
    * When user make a requrest, the duration timer is started, 
    *And the importent point is virtual users makes the request again and again till the end of the duration time
      */
}

export default function () {
    const url = 'http://127.0.0.1:3000/v1/signin';
    const body = JSON.stringify({
        user: {
            email: "bennisondevadoss@gmail.com",
            password: 'bennison'
        }
    });

    const params = {
        headers: {
            'content-Type': 'application/json',
        }
    }
    // console.log(body);
    const res = http.post(url, body, params);
    check(res, { 'status is 200': (r) => r.status == 200 });
    sleep(5);
    /* Sleep is used to suspend the virtual users
    syntax(t) here we give a time in second, 
    sleep function's importent job is once the virtual url call this api, 
    the sleep function suspends that virtual users for five seconds, 
    Once the five seconds are completed, then the sleep function allows the virtual users to make a request again */
}
/* here we use http.post method */
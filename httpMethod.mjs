import http from "k6/http";
import { check } from "k6";

export default function () {
    const payload = {
        "name": "Bennison",
        "job": "software engineer"
    }

    //POST
    const res = http.post('https://k6.io', JSON.stringify(payload), {
        headers: {
            'content-Type': 'application/json'
        }
    })
    console.log('POST mehtod: The name is ' + res.json().name);

    // PUT
    const putPayload = {
        "name": "Gibson",
        "Job": 'Software developer'
    }

    const resPut = http.put('https://k6.io', JSON.stringify(putPayload), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(`PUT method: The new name is ` + resPut.json().name)

    // PATCH
    let patchPayload = {
        "name": 'Austin',
        'job': 'Student'
    }

    const resPatch = http.patch('https://k6.io', JSON.stringify(patchPayload), {
        headers: {
            'Content-Type': 'application/json'
        },
    });
    console.log('PATCH Method: The patched name is ' + resPatch.json().name);

    // DELETE
    const resDelete = http.del(`https://k6.io`)
    check(resDelete, {
        "is status 200": (r) => {
            return r.status === 204
        }
    });

    // OPTIONS
    const resOptions = http.options('https;//k6.io');
    console.log('OPTIONS Method: ' + resOptions.headers['Allow']);

    //CUSTOM
    let resCustom = http.request('GET', 'https://k6.io');
    console.log('CUSTOM Method: ' + resCustom.status)
}
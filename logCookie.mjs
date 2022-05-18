import http from "k6/http";

function logCookie(c) {
    const output = `${c.name}: ${c.value}
    tdomain: ${c.domain}
    tpath: ${c.path}
    texpires: ${c.expires}
    thttpOnly: ${c.http_only}`

    console.log(output);
}

export default function () {
    const res = http.get('https://www.google.com');
    console.log(res)

    // Method one: for-loop and Check non-inherited properties
    for (const name in res.cookies) {
        if (res.cookies.hasOwnProperty(name) !== undefined) {
            logCookie(res.cookies[name][0]);
        }
    }
    // Method two: Use ES6 Map to loop over Object entires
    new Map(Object.entries(res.cookies)).forEach((v, k) => {
        logCookie(v[0]);
    })
}


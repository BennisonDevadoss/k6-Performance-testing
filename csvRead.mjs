import { SharedArray } from "k6/data";
import http from "k6/http";
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";
import encoding from "k6/encoding";

/* init statement */
export const options = {
    vus: 5,
    duration: '5s',
    iterations: 5
};

const csvRead = new SharedArray("createntials", function () {
    return papaparse.parse(open('./data.csv'), { header: true }).data; //returning array
})

export default function main() {
    // Loading through the credentials
    // for(let data of csvRead){
    //  console.log(JSON.stringify(data['username']));
    //  console.log(JSON.stringify(data['password']));
    // }

    // Random credentials
    // const randomCreadentials = csvRead[Math.floor(Math.random() * csvRead.length)];
    // console.log(randomCreadentials['username']);
    // console.log(randomCreadentials['password']);

    const username = csvRead[Math.floor(Math.random() * csvRead.length)]['username'];
    const password = csvRead[Math.floor(Math.random() * csvRead.length)]['password'];

    // Generate base64 encoded credentials
    const toBeEncoded = username + ':' + password;
    const encodedString = encoding.b64decode(toBeEncoded);

    // console.log(encodedString)

    const params = {
        headers: {
            'Authorization': 'Basic' + encodedString,
            'X-Requested-With': 'XMLHttpRequest'
        }
    };

    const response = http.get('http:localhost/login', params);
    console.log(`Logging in using` + username + ':' + password + `Status: ` + response.status);
}
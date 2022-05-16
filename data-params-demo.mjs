import { SharedArray } from "k6/data";
import http from "k6/http";


//init
export const options = {
    vus: 5,
    duration: '5s',
    iterations: 5
};

const data = new SharedArray('colors', function () {
    return JSON.parse(open('./tags.json')).tags;  // returns the array of tags
})

// Reading random tag  from the JSON file
const randomTag = data[Math.floor(Math.random() * data.length)];

export default function () {
    const response = http.get(`http://localhost/category.html?tags=${randomTag}`);
    console.log(`VU ID: ${__VU}` + "URL: " + response.url + " - status code" + response.status)
}
import http from 'k6/http';

export const options = {
    linger: true,   // linger  is giving the error 
    // vus: 2,
    // // iterations: 100,
    // duration: '30s',
}
export default function () {
    http.get(`http://test.k6.io`);
}
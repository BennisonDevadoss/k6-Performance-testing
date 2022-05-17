import { group } from "k6";
import http from "k6/http";

export default function () {
    group('visit product listining page', function () {
        http.get('https://k6.io')
    });
    group('Add several products to the shopping cart', function () {
        http.get('http://k6.io')
    })
    group('visit login page', function () {
        http.get('http://k6.test.io')
    });
}
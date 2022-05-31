import { group } from "k6";
import http from "k6/http";

export const options = {
    vus: 10,
    iterations: 10
}

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


/* If the iteration is less than 10 

ERRO[0000] There were problems with the specified script configuration:
	- scenario default has configuration errors: the number of iterations (1) can't be less than the number of VUs (10) 

    */
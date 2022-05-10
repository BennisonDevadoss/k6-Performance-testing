import http from 'k6/http';

import { sleep } from 'k6';

export default function () {
    http.get('http://127.0.0.1:5000/customers');/* https://test.k6.io */
    sleep(1);  /* Suspend VU execution for the specified duration. */
}

/* Instead of typing --vus 10 and --duration 30s each time you run the script */

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10,   // virtual susers run this script 
    duration: '30s',
}


/* Every test also has a default function. This function defines the entry point for your VUs. */
export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}
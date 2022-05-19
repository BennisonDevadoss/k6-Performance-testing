/* configure k6 options with environment variables */

import http from "k6/http";
import { sleep } from "k6";

export default function () {
    const res = http.get('http://test.k6.io')
    sleep(1);
};

/* Run command is --> K6_VUS=10 K6_DURATION=30s k6 run config-k6.mjs */


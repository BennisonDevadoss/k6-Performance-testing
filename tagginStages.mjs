import http from "k6/http";
import exec from 'k6/execution';
import { tagWithCurrentStageIndex } from 'https://jslib.k6.io/k6-utils/1.3.0/index.js';

export const options = {
    stages: [
        { target: 5, duration: '5s' },
        { target: 10, duration: '10s' },
    ],
};

export default function () {
    tagWithCurrentStageIndex();  /* for setting a stage tag for identifying the stage that has executed them: */

    // All the requests will have a 'stage' tag
    // with its value equal to the index of the stage
    http.get('https://test.k6.io')
}

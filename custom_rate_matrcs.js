import { Rate } from "k6/metrics";

const myRate = new Rate('my_rate');

export default function () {
    myRate.add(true);
    myRate.add(0)
}
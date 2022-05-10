import http from "k6/http";
import { Trend } from "k6/metrics";

const myTrend = new Trend('my_trend');
export default function () {
    myTrend.add(1);
    myTrend.add(3);
}

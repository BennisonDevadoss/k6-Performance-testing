import { Gauge } from "k6/metrics";

const myGauge = new Gauge('my_gauge'); // here the my_gauge is name to our custom gauge. 

export default function () {
    myGauge.add(1);
    myGauge.add(10);
    myGauge.add(3);   // Here this is a latest value, so this will print in the summery result.
}
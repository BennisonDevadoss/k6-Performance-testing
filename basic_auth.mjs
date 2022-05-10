import encoding from "k6/encoding";
import http from 'k6/http';

const username = "bennison";
const password = "bennison";

export default function () {
    const credential = `${username}:${password}`;

    const url = 'http://'
}

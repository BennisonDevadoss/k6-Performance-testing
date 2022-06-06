import { randomSeed } from "k6";

export const options = {
  vus: 10,
  duration: "5s",
};

export default function () {
  randomSeed(123456789);
  const rnd = Math.random();
  console.log(rnd);
}

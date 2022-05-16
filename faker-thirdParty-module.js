import faker from 'https://cdn.jsdelivr.net/gh/Marak/faker/js@master/examples/browser/js/faker.js'

export default function () {
    console.log(faker.name.jobTitle());
    console.log(faker.name.jsonDescriptor());
    console.log(faker.name.jobArea());
    console.log(faker.name.jobType());
}

/* this program is not work well */
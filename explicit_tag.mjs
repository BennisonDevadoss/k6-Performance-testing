import http from 'k6/http';

export default function () {

    const params = {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0IiwiZW1haWwiOiJiZW5uaXNvbmRldmFkb3NzQGdtYWlsLmNvbSIsImlhdCI6MTY1MTEyNTQ5N30.JrrwIPJoTTpSxKnydml2MsC6BuL376yppe2H5XM9oys"
        }
    }
    for (let id = 1; id <= 100; id++) {
        http.get(`http://localhost:4000/devices?q=${id}`, params, { tags: { name: 'GetDeviceURL' } });

    }
}
// tags.name=\"PostsItemURL\",
// tags.name=\"PostsItemURL\",



/* That code would produce JSON output like this */   // But it doesn't create JSON output


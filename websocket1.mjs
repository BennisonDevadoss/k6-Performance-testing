import ws from "k6/ws";
import { check } from "k6";

export default function () {
    const url = 'ws://127.0.0.1:8080?user_id=1';
    const params = { tags: { my_tag: 'hello' } };

    const res = ws.connect(url, params, function (socket) {
        socket.on('open', function open() {
            /// do something here
        });

        socket.on('error', function (e) {
            if (e.error() != 'websocket: close sent') {
                console.log(`An unexpected error occurred: `, e.error())
            }
        })
    })
    check(res, { "status is 101": (r) => r && r.status === 101 })
}

import ws from "k6/ws";
import { check } from "k6";

export default function () {
    const url = 'ws://127.0.0.1:8080?user_id=1'/* 'ws://echo/websocket.org' */;
    const params = { tags: { my_tag: 'hello' } };

    const res = ws.connect(url, params, function (socket) {
        socket.on('open', () => { console.log('Connected') });
        socket.on('message', (data) => { console.log('Message received:', data) });
        socket.on('close', () => console.log('disconnected'))
    });

    check(res, { 'status is 101': (r) => r.status === 101 })
}

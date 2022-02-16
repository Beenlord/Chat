const WebSocket = require('ws');
const Conf      = require('config');

const WsHost = Cong.get('ws.host');
const WsPort = Cong.get('ws.port');

const Server = new WebSocket.Server({
    port: WsPort
});

Server.on('open', async function (Client) {
    console.log("Подключен новый пользователь!");

});

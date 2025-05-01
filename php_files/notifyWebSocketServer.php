// notifyWebSocketServer.php
function notifyWebSocket($data) {
    $host = 'localhost';
    $port = 8080;

    $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
    socket_connect($socket, $host, $port);

    $data = json_encode($data);
    $data = mask($data);

    socket_write($socket, $data, strlen($data));
    socket_close($socket);
}

function mask($text) {
    $b1 = 0x80 | (0x1 & 0x0f);
    $length = strlen($text);
    if ($length <= 125) {
        $header = pack('CC', $b1, $length);
    } elseif ($length > 125 && $length < 65536) {
        $header = pack('CCn', $b1, 126, $length);
    } elseif ($length >= 65536) {
        $header = pack('CCNN', $b1, 127, $length);
    }
    return $header.$text;
}

// Example usage in your addRecord.php script
$newRecord = [
    'id' => $insertedId,
    'name' => $name,
];

notifyWebSocket($newRecord);

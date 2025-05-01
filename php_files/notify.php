<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$host = '127.0.0.1';
$port = 8080;
$message = json_encode(['message' => 'Request Approved']);

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
    echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
}

$result = socket_connect($socket, $host, $port);
if ($result === false) {
    echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
}

socket_write($socket, $message, strlen($message));
//socket_close($socket);
?>
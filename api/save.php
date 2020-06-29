 <?php

$data = json_decode(file_get_contents("php://input"), true);
$task = $data['dane'];


echo $task;

file_put_contents('data.txt', $task);
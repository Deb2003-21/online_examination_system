<?php
// list_images.php
$directory = "/uploads";
$images = array_diff(scandir($directory), array('..', '.'));
$images = array_map(function ($image) use ($directory) {
    return 'http://localhost/pg/project' . $image;
}, $images);

header('Content-Type: application/json');
echo json_encode($images);
?>

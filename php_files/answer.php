<?php 
header('Access-Control-Allow-Origin: *');

$con = mysqli_connect("localhost", "root", "", "exam_s");

$id = $_REQUEST['examid'];
$q2 = "select paper from test_join where exam_id=$id";
$r1 = mysqli_query($con, $q2);
if ($res1 = mysqli_fetch_assoc($r1)) {
    $html = '<p class="container">
    <body>
        <div>
            <div>
                <div>
                    <h1>' . $res1['paper'] . ' test</h1>
                </div>
                <hr>';
}

$q3 = "select * from test where exam_id=$id";
$r2 = mysqli_query($con, $q3);
$count = 1;
while ($res = mysqli_fetch_assoc($r2)) {
    $html .= '<div class="mt-4">
        <h3><strong>' . $count . ') &nbsp;</strong>' . $res['question'] . '</h3>';

    if (strlen($res['image']) > 38) {
        $image_path = $res['image']; // Absolute path or valid URL to the image
        $html .= '&nbsp; &nbsp;<img src="' . $image_path . '" alt="Image Preview" width="400px">';
    }

    $html .= '<p>&nbsp; &nbsp;<strong>(A)</strong> ' . $res['option1'] . ' &nbsp;<strong>(B)</strong> ' . $res['option2'] . ' &nbsp;<strong>(C)</strong> ' . $res['option3'] . ' &nbsp;<strong>(D)</strong> ' . $res['option4'] . '</p>
        <h3>Answer: ' . $res['answer'] . '</h3>
    </div>';

    $count++;
}

$html .= '<p align="right">
    <a href="https://www.google.co.in/"><img src="http://localhost/pg/project/image.png" width="69px" height="69px"></a>
</p>
</div>
</body>
</p>';

require __DIR__ . '/vendor/autoload.php';

$mpdf = new \Mpdf\Mpdf();
$mpdf->WriteHTML($html);
$file = $id . '.pdf';
$mpdf->Output($file, 'D');

$data['file'] = "http://localhost/pg/project/" . $file;
echo json_encode($data);
?>

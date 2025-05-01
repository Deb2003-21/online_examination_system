<?php
require 'vendor/autoload.php';

use Dompdf\Dompdf;
use Dompdf\Options;

// Initialize dompdf class
$options = new Options();
$options->set('isRemoteEnabled', true);
$dompdf = new Dompdf($options);

// Load HTML content
$html = file_get_contents('ans.php');

// Load the HTML into dompdf
$dompdf->loadHtml($html);

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('A4', 'potrait');

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
$dompdf->stream("document.pdf", array("Attachment" =>1));
?>

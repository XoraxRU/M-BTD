<?php

header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('PDT');
$date = date('F, j');
$theme = 'Заказ раскроя с сайта m-btd.ru: ' . $date;
//$mail_from = $_POST['fname'] + "Раскрой с сайта m-btd";
$to = 'm-btd@mail.ru, xorax.ru@gmail.com';
$from = 'info@m-btd.ru';
$clientmail = $_POST["c_mail"];

$number = $_POST["line"];
$fname = isset($_POST['fname']) ? $_POST['fname'] : '';
$phonenum = isset($_POST['phonenum']) ? $_POST['phonenum'] : '';
$tot_panels = isset($_POST['tot_panels']) ? $_POST['tot_panels'] : '';
$f_comment = isset($_POST['f_comment']) ? $_POST['f_comment'] : '';
$tot_table_s = isset($_POST['tot_table_s']) ? $_POST['tot_table_s'] : '';
$tot_edge_s04 = isset($_POST['tot_edge_s04']) ? $_POST['tot_edge_s04'] : '';
$tot_edge_s08 = isset($_POST['tot_edge_s08']) ? $_POST['tot_edge_s08'] : '';
$tot_edge_s1 = isset($_POST['tot_edge_s1']) ? $_POST['tot_edge_s1'] : '';
$tot_edge_s2 = isset($_POST['tot_edge_s2']) ? $_POST['tot_edge_s2'] : '';
$tot_edge_s3 = isset($_POST['tot_edge_s3']) ? $_POST['tot_edge_s3'] : '';

//if(isset($_POST['submit'])) {
	
		$message .= '
		<html>
		<head>
			<title>'.$theme.'</title>
		</head>
		<body>
			<p style="font-size: 12px;"><b>ФИО / ООО:</b> '.htmlspecialchars($fname).'</p>
			<p style="font-size: 12px;"><b># ТЕЛЕФОНА:</b> '.htmlspecialchars($phonenum).'</p>
			<br />
			<br />
		<table>
			<thead>
				<tr>
					<th style="border-top:0; border-bottom:0; padding: 3px; text-align:left; font-size: 14px;"></th>
					<th style="border-top:0; border-bottom:0; padding: 3px; text-align:left; font-size: 14px;" colspan="2">МАТЕРИАЛ</th>
					<th style="border-top:0; border-bottom:0; padding: 3px; text-align:left; font-size: 14px;" colspan="4">РАЗМЕРЫ (мм)</th>
					<th style="border-top:0; border-bottom:0; padding: 3px; text-align:left; font-size: 14px;" colspan="4">КРОМКА (мм)</th>
					<th style="border-top:0; border-bottom:0; padding: 3px; text-align:left; font-size: 14px;" colspan="2">ЗАГОТОВКА (мм)</th>
					<th style="border-top:0; border-bottom:0; padding: 3px; text-align:left; font-size: 14px;">ОПИСАНИЕ</th>
				</tr>
				<tr>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">#</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Толщина (мм)</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Цвет</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Длина</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Ширина</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Кол.</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px;">Вр.</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Длина 1</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Длина 2</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Ширина 1</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Ширина 2</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Длина</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Ширина</th>
					<th style="border-top:0; font-size: 12px; font-weight: normal; padding: 3px; text-align:left;">Название</th>
				</tr>
			</thead>';
			
	for ($i = 0; $i < 1; $i++) { //here we create lines
		
		for ($j = 0; $j < count($number["f_line"]); $j++) { //here we create cells
			
			$message .= '
			<tbody>
				<tr>
					<td style="padding: 1px; width: 4%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_line'][$j]).'</td>
					<td style="padding: 1px; width: 10%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_size'][$j]).'</td>
					<td style="padding: 1px; width: 11%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_nm'][$j]).'</td>
					<td style="padding: 1px; width: 8%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_ln'][$j]).'</td>
					<td style="padding: 1px; width: 8%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_wd'][$j]).'</td>
					<td style="padding: 1px; width: 5%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_qt'][$j]).'</td>
					<td style="padding: 0px; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_rot'][$j]).'</td>
					<td style="padding: 1px; width: 7%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_ln_1'][$j]).'</td>
					<td style="padding: 1px; width: 7%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_ln_2'][$j]).'</td>
					<td style="padding: 1px; width: 7%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_wd_1'][$j]).'</td>
					<td style="padding: 1px; width: 7%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_wd_2'][$j]).'</td>
					<td style="padding: 1px; width: 8%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['l_w_ed'][$j]).'</td>
					<td style="padding: 1px; width: 8%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['w_w_ed'][$j]).'</td>
					<td style="padding: 1px; width: 10%; border:solid 1px #ccc; font-size: 12px;">'.htmlspecialchars($number['f_inform'][$j]).'</td>
				</tr>
			</tbody>';
			
		}
	}

	$message .= '
		</table>
			<br />
			<br />
			<div><p><b>Комментарий к раскрою: </b>'.htmlspecialchars($f_comment).'</p></div>
			<br />
			<br />
			<p style="font-size: 12px;"><b>ЗАГОТОВОК (ШТ.):</b> '.htmlspecialchars($tot_panels).'</p>
			<p style="font-size: 12px;"><b>ПЛОЩАДЬ (КВ.М.):</b> '.htmlspecialchars($tot_table_s).'</p>
			<p style="font-size: 12px;"><b>КРОМКА 0,4мм (М):</b> '.htmlspecialchars($tot_edge_s04).'</p>
			<p style="font-size: 12px;"><b>КРОМКА 0,8мм (М):</b> '.htmlspecialchars($tot_edge_s08).'</p>
			<p style="font-size: 12px;"><b>КРОМКА 1мм (М):</b> '.htmlspecialchars($tot_edge_s1).'</p>
			<p style="font-size: 12px;"><b>КРОМКА 2мм (М):</b> '.htmlspecialchars($tot_edge_s2).'</p>
			<p style="font-size: 12px;"><b>КРОМКА 3мм (М):</b> '.htmlspecialchars($tot_edge_s3).'</p>
		</body>
		</html>';
	
	//echo '<pre>';
	//print_r($_POST);
	//echo '</pre>';
	
	/*
	$headers = array(
                'MIME-Version: 1.0',
                'From: ' . $from,
                'Reply-To: ' . $from,
                'Content-Type: text/html; charset=utf-8 \r\n'
        );
	*/
	
	$headers="MIME-Version: 1.0" . "\r\n";
	$headers="Content-Type: text/html; charset=\"utf-8\"" . "\r\n";
	$headers.="From: " . $from . "\r\n";
	$headers.="Reply-To: " . $from . "\r\n";
	$headers.="Cc: " . $clientmail . "\r\n";
	$headers.="Subject: " . $theme . "\r\n";
	$headers.="Content-Type: text/html; charset=\"utf-8\"" . "\r\n";
		
        if(mail($to, $theme, $message, $headers)) //  , implode("\r\n", $headers)
                $message .= '';
        else
                $message .= '<br />Не удалось отправить раскрой. Проверьте соединение с интернетом или свяжитесь с нами по телефону: +7 (4822) 600-665';
		
        //echo($message); //To show our email
	
//}

?>
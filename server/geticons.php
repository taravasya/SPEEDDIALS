<!DOCTYPE html>
<html lang="en">
<head>
    <title>Icon fetcher</title>
    <meta charset="utf-8">
    <link href=css/ic_style.css rel=stylesheet>
    <script type=text/javascript src=js/1.js></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>
<body>
	<main class="flex-container">
<?php
$url = $_GET['site'];
$url = ( strpos( $_GET['site'], '//' ) === false ) ? '//'.$_GET['site'] : $_GET['site'];
$url = 'http://' . parse_url($url, PHP_URL_HOST);
$imgs_array = array();
//ini_set('user_agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36');
$headers = array('Accept: */*','user_agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36', 'HTTP_ACCEPT: */*;q=0.8,application/signed-exchange;v=b3;q=0.9', 'HTTP_ACCEPT_LANGUAGE: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7', 'content-type: text/html; charset=utf-8');

$file_handler = fopen('curl.log', 'a');
$ch      = curl_init();
$options = array(
		//CURLOPT_VERBOSE        => true,
		//CURLOPT_STDERR         => $file_handler,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_SSL_VERIFYHOST => false,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_HTTPHEADER     => $headers,
        CURLOPT_REFERER        => $url,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_URL            => $url,
        CURLOPT_COOKIEFILE     => '',
        CURLOPT_COOKIELIST     => 'all'
);

curl_setopt_array( $ch, $options );
$htmlContent = curl_exec($ch);
//var_dump(curl_getinfo($ch, CURLINFO_COOKIELIST));
curl_close($ch );
//echo htmlspecialchars($htmlContent);

include('libs/simple_html_dom.php');
$html = new simple_html_dom();
$html->load($htmlContent);
//var_dump($html);

$tags_text = array();
foreach($html->find('link, meta, img') as $element) {
	if ($element->rel == 'apple-touch-icon' || $element->rel == 'icon' || $element->rel == 'shortcut icon') {
		array_push($tags_text, $element->href);
	}
	if ($element->name == 'msapplication-TileImage' || $element->name == 'msapplication-tileimage') {
		array_push($tags_text, $element->content);
	} else {
		if ($element->content) {
			array_push($tags_text, $element->content);
		}
	}
	if ($element->property == 'og:image') {
		array_push($tags_text, $element->content);
	}
	if (strpos($element->id, 'logo') || strpos($element->class, 'logo') || strpos($element->src, 'logo')) {
		array_push($tags_text, $element->src);
	}	
}

foreach ($tags_text as $tag_text) {
	$newimg = clear_img_url ($tag_text, $url);
	if ($newimg) {
		if ($newimg['status'] < 2) {
			array_push($imgs_array, $newimg['img_url']);
		}
	}
}

if (count($imgs_array) > 0) {
	$a = 0;
	foreach ($imgs_array as $img) {
		$a++;
		echo ('<div id="ic_contaner'.$a.'" class="ic_container" onmouseout="hidemsg('.$a.')" onmouseover="showmsg('.$a.')" onclick="copymyurl('.$a.')"><img class="urlicon" src="' . $img . '"><div id="ic'.$a.'" class="ic_hiden">Копировать ссылку</div></div>');
	}
} else {
	echo ('<div class="ic_container"><img class="urlicon" src="imgs/empty.jpg"></div>');
}

function debug_log ($data, $index) {
	$file = 'debug_log.txt';
	$current = file_get_contents($file);
	$current .= '['.$index.'] ';
	$current .= $data."\n";
	file_put_contents($file, $current);
}

function clear_img_url ($tag_text, $url) {
	$return_img_url = false;
	$function_answear = array();
	$return_status = 10;
	if (preg_match('/(\.png|\.jpg|\.svg|\.ico|\.gif)/', $tag_text, $match)) {
		if (preg_match('/((http|https):\/\/)|(\/\/)/', $tag_text, $matches)) {;
			$tag_text = str_replace($matches[0], '', $tag_text);
			$tag_text = 'http://' . $tag_text;
			$return_img_url = $tag_text;
		} else {
			$tag_text_temp = ( strpos( $tag_text, "//" ) === false ) ? "//$tag_text" : $tag_text;
			if (parse_url($tag_text_temp, PHP_URL_HOST)) {
				if (preg_match('/^[^\/]+(\.png|\.jpg|\.svg|\.ico|\.gif)$/', $tag_text)) {
					$return_img_url = $url . '/' . $tag_text;
				} else {
					$return_img_url = 'http://' . $tag_text;
				}
			} else {
				$return_img_url = $url . $tag_text;
			}
		}
	$return_status = 0;	
	} else {
		$return_status = 9;
	}
	if ($return_img_url) {
		if (preg_match('/(\.ico)/', $return_img_url, $match)) {
			$ico = $return_img_url;
			$random_name = generateRandomString();
			$ico_name = $random_name.'.ico';
			$png_name = $random_name.'.png';
			$ico_path = dirname(__FILE__).'/tempdnlds/'.$ico_name;
			if (@file_put_contents('tempdnlds/'.$ico_name, @file_get_contents($ico))) {
		        exec("nconvert -out png $ico_path", $output, $retval);
		        $return_img_url = "tempdnlds/$png_name";
		    }
		    else {
		    	$return_img_url = 'imgs/converterror.jpg';
		        $return_status = 1;
		    }
		}
	}
	$function_answear['img_url'] = $return_img_url;
	$function_answear['status'] = $return_status;
	return $function_answear;
}

function generateRandomString($length = 16) {
    return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
}
?>
	</main>
</body>
</html>
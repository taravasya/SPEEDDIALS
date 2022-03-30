<!DOCTYPE html>
<html lang="en">
<head>
    <title>Icon fetcher</title>
    <meta charset="utf-8">
    <link href=ic_style.css rel=stylesheet>
</head>
<body>
	<main class="flex-container">
<?php
$url = $_GET['site'];
$url = 'https://' . parse_url($url, PHP_URL_HOST);
$imgs_array = array();
include('simple_html_dom.php');
$html = new simple_html_dom();
$html->load_file($url);


$tags_text = array();
foreach($html->find('link, meta') as $element) {
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
	foreach ($imgs_array as $img) {
		echo ('<div class="ic_container"><img class="urlicon" src="' . $img . '"></div>');
	}
} else {
	echo ('<div class="ic_container"><img class="urlicon" src="imgs/empty.jpg"></div>');
}

function debug_log ($data, $index) {
	$file = 'debug_log.txt';
	$current = file_get_contents($file);
	$current = '['.$index.'] ';
	$current .= $data."\n";
	file_put_contents($file, $current);
}

function clear_img_url ($tag_text, $url) {
	$return_img_url = false;
	$function_answear = array();
	$return_status = 10;
	if (preg_match('/(\.png|\.jpg|\.svg|\.ico)/', $tag_text, $match)) {
		if (preg_match('/((http|https):\/\/)|(\/\/)/', $tag_text, $matches)) {;
			$tag_text = str_replace($matches[0], '', $tag_text);
			$tag_text = 'https://' . $tag_text;
			$return_img_url = $tag_text;
			debug_log($return_img_url, '1');
		} else {
			$tag_text_temp = ( strpos( $tag_text, "//" ) === false ) ? "//$tag_text" : $tag_text;
			if (parse_url($tag_text_temp, PHP_URL_HOST)) {
				$return_img_url = 'https://' . $tag_text;
				debug_log($return_img_url, '2');
			} else {
				$return_img_url = $url . $tag_text;
				debug_log($return_img_url, '3');
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
<?php

/* https://api.telegram.org/bot671131316:AAFKgiPM6LAHQyNsYMRflYvCNuQZG5RGH4M/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// 671131316:AAFKgiPM6LAHQyNsYMRflYvCNuQZG5RGH4M

$filling = $_POST['input-filling'];
$size = $_POST['input-size'];
$appearance = $_POST['input-appearance'];
$phone = $_POST['input-phone'];
$token = "671131316:AAFKgiPM6LAHQyNsYMRflYvCNuQZG5RGH4M";
$chat_id = "-246002776";
$arr = array(
  'Начинка: ' => $filling,
  'Размер: ' => $size,
  'Оформление' => $appearance,
  'Телефон' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
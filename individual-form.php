<?php

// Checks if form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    function post_captcha($user_response) {
        $fields_string = '';
        $fields = array(
            'secret' => '6LdH7HkUAAAAAASrWlGPyglocT8WsZfBxzy78coP',
            'response' => $user_response
        );
        foreach($fields as $key=>$value)
        $fields_string .= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

        $result = curl_exec($ch);
        curl_close($ch);

        return json_decode($result, true);
    }

    // Call the function post_captcha
    $res = post_captcha($_POST['g-recaptcha-response']);

    if (!$res['success']) {
        // What happens when the reCAPTCHA is not properly set up
        echo 'reCAPTCHA error: Check to make sure your keys match the registered domain and are in the correct locations. You may also want to doublecheck your code for typos or syntax errors.';
    } else {
        // If CAPTCHA is successful...

        /* https://api.telegram.org/bot671131316:AAFKgiPM6LAHQyNsYMRflYvCNuQZG5RGH4M/getUpdates,
        где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

        // 671131316:AAFKgiPM6LAHQyNsYMRflYvCNuQZG5RGH4M

        $filling = $_POST['individual-filling'];
        $size = $_POST['individual-size'];
        $appearance = $_POST['individual-appearance'];
        $phone = $_POST['individual-phone'];
        $token = "671131316:AAFKgiPM6LAHQyNsYMRflYvCNuQZG5RGH4M";
        $chat_id = "-246002776";
        $arr = array(
          'Вам поступил заказ'=> $som,
          'Начинка: ' => $filling,
          'Размер: ' => $size,
          'Оформление: ' => $appearance,
          'Телефон: ' => $phone
        );

        foreach($arr as $key => $value) {
          $txt .= "<b>".$key."</b> ".$value.PHP_EOL;
        };
        $txt = urlencode($txt);
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

        if ($sendToTelegram) {
          header('Location: thank-you-individual.html');
        } else {
        //   echo "Error";
        header('Location: regret.html');
        }
    }
}
?>

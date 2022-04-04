<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Utils
{
    private $CI;

    function __construct()
    {
        $this->CI = get_instance();
    }

    function sendEmail($toAdress, $subject, $body)
    {
        $config = array(
            'protocol' => 'smtp',
            'smtp_host' => 'smtp.sendgrid.net',
            'smtp_user' => 'vmlmx.developers',
            'smtp_pass' => 'Z7rurPW`*-tFT%BG',
            'smtp_port' => 587,
            'mailtype'  => 'html',
            'charset'   => 'utf-8',
            'crlf'         => '\r\n',
            'newline'     => '\r\n'
        );

        $this->CI->load->library('email', $config);

        $this->CI->email->from('no-reply@joiningforcesvmlyr.mx', 'WPP Production Hub');
        $this->CI->email->to($toAdress);

        $this->CI->email->subject($subject);
        $this->CI->email->message($body);

        return  $this->CI->email->send();
        //print_r($this->email->print_debugger());
    }

    function generateRandomString($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    function create_GUID()
    {
        if (function_exists('com_create_guid') === true) {
            return trim(com_create_guid(), '{}');
        }
        return sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
    }

    function createSlug($text)
    {
        $text = preg_replace('~[^\pL\d]+~u', '-', $text);
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
        $text = preg_replace('~[^-\w]+~', '', $text);
        $text = trim($text, '-');
        $text = preg_replace('~-+~', '-', $text);
        $text = strtolower($text);

        if (empty($text)) {
            return 'n-a';
        }

        return $text;
    }
}

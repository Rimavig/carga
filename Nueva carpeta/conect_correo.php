<?php
//ini_set('display_startup_errors', 1);
//ini_set('display_errors', 1);
//error_reporting(-1);
$GLOBALS['THRIFT_ROOT'] = '/var/www/html/thrift-0.11.0/thrift-0.11.0/lib/php/lib';
//$GLOBALS['THRIFT_ROOT'] = 'C:\xampp\htdocs\teatro_admin\thrift-0.11.0\thrift-0.11.0\lib\php\lib';
require_once $GLOBALS['THRIFT_ROOT'].'/Types.php';
require_once $GLOBALS['THRIFT_ROOT'].'/MailerServer.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Transport/TTransport.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Transport/TSocket.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Protocol/TProtocol.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Protocol/TBinaryProtocol.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Transport/TBufferedTransport.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Type/TMessageType.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Factory/TStringFuncFactory.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/StringFunc/TStringFunc.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/StringFunc/Core.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Type/TType.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Exception/TException.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Exception/TApplicationException.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Thrift/Exception/TTransportException.php';
use Thrift\Protocol\TBinaryProtocol;
use Thrift\Transport\TSocket;
use Thrift\Transport\TSocketPool;
use Thrift\Exception\TException;
use Thrift\Exception\TTransportException;
use Thrift\Exception\TProtocolException;
use Thrift\Transport\TFramedTransport;
use Thrift\Transport\TBufferedTransport;
try{
    date_default_timezone_set("America/Bogota");
    $array1 = array();
    for ($i = 7909; $i <= 7914; $i++) {
        $array1[] = $i;
    }
    $connected1 = false;
    while (!$connected1 && !empty($array1)) {
        $indiceAletario1 = mt_rand(0, sizeof($array1) - 1);
        $port1 = $array1[$indiceAletario1];
        $socket1 = new TSocket('127.0.0.1', $port1);
        $transport1 = new TBufferedTransport($socket1);
        $socket1->setSendTimeout( 1000 ); 
        $socket1->setRecvTimeout( 100000 ); 
        $protocol1 = new TBinaryProtocol($transport1);
        $client1 = new MailerServerClient($protocol1);

        try {
            $transport1->open();
            $connected1 = true;
        } catch (\TException $e) {
            // Handle the Thrift exception
            // Optionally, you can log the exception or perform other actions
        } catch (Exception $e) {
            // Handle other exceptions
            // Optionally, you can log the exception or perform other actions
        } catch (\Throwable $e) {
            // Handle other throwables
            // Optionally, you can log the exception or perform other actions
        }

        if (!$connected1) {
            // Remove the port from the array and try the next one
            unset($array1[$indiceAletario1]);
            $array1 = array_values($array1);
        }
    }

}catch (\TException  $e) {

}catch (Exception  $e) {

}catch (\Throwable  $e) {
  
}
?>

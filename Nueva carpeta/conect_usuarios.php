<?php
//ini_set('display_startup_errors', 1);
//ini_set('display_errors', 1);
//error_reporting(-1);
$GLOBALS['THRIFT_ROOT'] = '/var/www/html/thrift-0.11.0/thrift-0.11.0/lib/php/lib';
//$GLOBALS['THRIFT_ROOT'] = 'C:\xampp\htdocs\teatro_admin\thrift-0.11.0\thrift-0.11.0\lib\php\lib';
require_once $GLOBALS['THRIFT_ROOT'].'/Types.php';
require_once $GLOBALS['THRIFT_ROOT'].'/CRUDClienteServer.php';
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
use Thrift\Transport\TFramedTransport;
use Thrift\Transport\TBufferedTransport;
try{
    date_default_timezone_set("America/Bogota");
    $array9 = array();
    for ($i = 7919; $i <= 7924; $i++) {
        $array9[] = $i;
    }
    $connected9 = false;
    while (!$connected9 && !empty($array9)) {
        $indiceAletario9 = mt_rand(0, sizeof($array9) - 1);
        $port9 = $array9[$indiceAletario9];
        $socket9 = new TSocket('127.0.0.1', $port9);
        $transport9= new TBufferedTransport($socket9);
        $socket9->setSendTimeout( 2000 ); 
        $socket9->setRecvTimeout( 200000 ); 
        $protocol9 = new TBinaryProtocol($transport9);
        $client9 = new CRUDClienteServerClient($protocol9);

        try {
            $transport9->open();
            $connected9 = true;
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

        if (!$connected9) {
            // Remove the port from the array and try the next one
            unset($array9[$indiceAletario9]);
            $array9 = array_values($array9);
        }
    }
}catch (\TException  $e) {

}catch (Exception  $e) {

}catch (\Throwable  $e) {
  
}
?>

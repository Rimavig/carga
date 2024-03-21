<?php
//ini_set('display_startup_errors', 1);
//ini_set('display_errors', 1);
//error_reporting(-1);
$GLOBALS['THRIFT_ROOT'] = '/var/www/html/thrift-0.11.0/thrift-0.11.0/lib/php/lib';
//$GLOBALS['THRIFT_ROOT'] = 'C:\xampp\htdocs\teatro_admin\thrift-0.11.0\thrift-0.11.0\lib\php\lib';
require_once $GLOBALS['THRIFT_ROOT'].'/Types.php';
require_once $GLOBALS['THRIFT_ROOT'].'/CRUDServer.php';
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
use Thrift\Exception\TException;
use Thrift\Exception\TTransportException;
use Thrift\Exception\TProtocolException;
use Thrift\Transport\TBufferedTransport;
date_default_timezone_set("America/Bogota");
try{
    $host3 = 'localhost';
    $array3 = array();
    for ($i = 6913; $i <= 6960; $i++) {
        $array3[] = $i;
    }
    $connected3 = false;
    while (!$connected3 && !empty($array3)) {
        $indiceAletario3 = mt_rand(0, sizeof($array3)-1);
        $port3= $array3[$indiceAletario3];
        $socket3 = new Thrift\Transport\TSocket($host3,$port3);
        $transport3 = new TBufferedTransport($socket3);
        $socket3->setSendTimeout( 2000 ); 
        $socket3->setRecvTimeout( 200000 ); 
        $protocol3 = new TBinaryProtocol($transport3);
        $client3 = new CRUDServerClient($protocol3);

        try {
            $transport3->open();
            $connected3 = true;
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

        if (!$connected3) {
            // Remove the port from the array and try the next one
            unset($array3[$indiceAletario3]);
            $array3 = array_values($array3);
        }
    }
    
    
}catch (\TException  $e) {

}catch (Exception  $e) {

}catch (\Throwable  $e) {
  
}
?>

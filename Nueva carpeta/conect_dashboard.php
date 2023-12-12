<?php
//ini_set('display_startup_errors', 1);
//ini_set('display_errors', 1);
//error_reporting(-1);
$GLOBALS['THRIFT_ROOT'] = '/var/www/html/thrift-0.11.0/thrift-0.11.0/lib/php/lib';
//$GLOBALS['THRIFT_ROOT'] = 'C:\xampp\htdocs\teatro_admin\thrift-0.11.0\thrift-0.11.0\lib\php\lib';
require_once $GLOBALS['THRIFT_ROOT'].'/Types.php';
require_once $GLOBALS['THRIFT_ROOT'].'/DASHServer.php';
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
    $array2 = array();
    for ($i = 7915; $i <= 7918; $i++) {
        $array2[] = $i;
    }
    $connected2 = false;
    while (!$connected2 && !empty($array2)) {
        $indiceAletario2 = mt_rand(0, sizeof($array2) - 1);
        $port2 = $array2[$indiceAletario2];
        $socket2 = new TSocket('127.0.0.1', $port2);
        $transport2 = new TBufferedTransport($socket2);
        $socket2->setSendTimeout( 2000 ); 
        $socket2->setRecvTimeout( 200000 ); 
        $protocol2 = new TBinaryProtocol($transport2);
        $client2 = new DASHServerClient($protocol2);

        try {
            $transport2->open();
            $connected2 = true;
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

        if (!$connected2) {
            // Remove the port from the array and try the next one
            unset($array2[$indiceAletario2]);
            $array2 = array_values($array2);
        }
    }

}catch (\TException  $e) {

}catch (Exception  $e) {

}catch (\Throwable  $e) {
  
}
  
?>

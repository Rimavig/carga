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
use Thrift\Exception\TException;
use Thrift\Exception\TTransportException;
use Thrift\Exception\TProtocolException;
use Thrift\Transport\TFramedTransport;
use Thrift\Transport\TBufferedTransport;

date_default_timezone_set("America/Bogota");
try{
    $array = array();
    for ($i = 8913; $i <= 8960; $i++) {
        $array[] = $i;
    }
    $host = '127.0.0.1';
    $indiceAletario = mt_rand(0, sizeof($array)-1);
    $port= $array[$indiceAletario];
    $socket = new Thrift\Transport\TSocket($host,$port);
    $transport = new TBufferedTransport($socket);
    $socket->setSendTimeout( 2000 ); 
    $socket->setRecvTimeout( 200000 ); 
    $protocol = new TBinaryProtocol($transport);
    $client = new CRUDServerClient($protocol);
    $transport->open();
}catch (\TException  $e) {

}catch (Exception  $e) {

}catch (\Throwable  $e) {
  
}
?>

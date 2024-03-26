<?php
//ini_set('display_startup_errors', 1);
//ini_set('display_errors', 1);
$GLOBALS['THRIFT_ROOT'] = '/var/www/html/thrift-0.11.0/thrift-0.11.0/lib/php/lib';
//$GLOBALS['THRIFT_ROOT'] = 'C:\xampp\htdocs\teatro_admin\thrift-0.11.0\thrift-0.11.0\lib\php\lib';
require_once $GLOBALS['THRIFT_ROOT'].'/Types2.php';
require_once $GLOBALS['THRIFT_ROOT'].'/Inventario.php';
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
    $array10 = array();
    for ($i = 9919; $i <= 9929; $i++) {
        $array10[] = $i;
    }
    $connected10 = false;
    while (!$connected10 && !empty($array10)) {
        $indiceAletario10 = mt_rand(0, sizeof($array10) - 1);
        $port10 = $array10[$indiceAletario10];
        $socket10 = new TSocket('127.0.0.1', $port10);
        $transport10= new TBufferedTransport($socket10);
        $socket10->setSendTimeout( 2000 ); 
        $socket10->setRecvTimeout( 200000 ); 
        $protocol10 = new TBinaryProtocol($transport10);
        $client10 = new InventarioClient($protocol10);

        try {
            $transport10->open();
            $connected10 = true;
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

        if (!$connected10) {
            // Remove the port from the array and try the next one
            unset($array10[$indiceAletario10]);
            $array10 = array_values($array10);
        }
    }
    $itemT =new Item();
    $compuestoT =new Compuesto();
    $grupoT =new Grupo();
    $busquedaT =new Busqueda();
    $compuestoItemT =new CompuestoItem();
    $promocionT =new Promocion();
    $ingresoT =new Ingreso();
    $ordenCompraT =new OrdenCompra();
    $ordenCompraItemT =new OrdenCompraItem();
    $proveedorT =new Proveedor();
    $tarjetaT =new Tarjeta();
    $bancoT =new Banco();
    $compraTarjetaT =new CompraTarjeta();
    $facturacionT =new Facturacion();
    $compraT =new Compra();
    $precuentaT =new Precuenta();
    $reservaT =new Reserva();
    $pedidoT =new Pedido();
    $pedidoICT =new PedidoIC();
}catch (\TException  $e) {

}catch (Exception  $e) {

}catch (\Throwable  $e) {
  
}
?>

<?php
include ("../../../conect.php");
include ("../../../conect_cafe.php");
include ("../../../autenticacion.php");
header("Content-type: application/json");
$re = $client->getPerfilRol($_SESSION["id"],"93");
$resultado = "".$re;
$usuarios1= explode(',',$resultado);
$editar="";
$eliminar="";
$estado="";
$reset="";

foreach($usuarios1 as $llave => $valores1) {
    if($valores1==="2"){
        $eliminar='<a title="Eliminar" class="eliminarPago btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
    }
}

$var1 = $_POST["id_precuentaGeneral"] ?? null;

$precuentaT->id_precuenta = $var1;
$precuentaT->tipo = "G";
$busquedaT->tipo = "simple";
$precuentaG = $client10->getPrecuenta($busquedaT, $precuentaT);
if ($precuentaG->estado === "A") {
    $eliminar = "";
}
$compraTarjetaT->id_precuenta_general = $var1;
$compraTarjetaT->tipo = "G";
$busquedaT->tipo = "Total";
$objeto = $client10->getAllCompraTarjeta_compra($busquedaT,$compraTarjetaT);
$data=[];
$text=$editar." ".$eliminar." ".$estado." ".$reset;    

if (is_array($objeto) || is_object($objeto)) {
    foreach ($objeto as $key ) :
        $tip="Credito";
        $banc=$key->banco;
        $tarj=$key->tarjeta;
        if ($key->tipo_pago==="E") {
            $tip="Efectivo";
            $banc="NO APLICA";
             $tarj="NO APLICA";
        }else if ($key->tipo_pago==="D") {
            $tip="Debito";
        }
        $data[]=array( $key->id_precuenta_general_pago, $tip,$banc,$tarj,$key->lote,round($key->total, 3),$text);
    endforeach;
} 
$dataT['data']=$data;   
echo json_encode($dataT,JSON_PRETTY_PRINT); 
?>
<?php
$transport->close();
?>
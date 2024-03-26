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
$editar2="";
$eliminar2="";
$estado2="";
$reset2="";
foreach($usuarios1 as $llave => $valores1) {
    if($valores1==="2"){
        $editar='<a title="Editar" class="editarPrecuentaGeneralItem btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
        $eliminar='<a title="Eliminar" class="eliminarPrecuentaGeneralItem btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
        $editar2='<a title="Editar" class="editarPrecuentaGeneralCompuesto btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
        $eliminar2='<a title="Eliminar" class="eliminarPrecuentaGeneralCompuesto btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
    
    }
}

$var1 = $_POST["id_precuentaGeneral"] ?? null;
$precuentaT->id_precuenta = $var1;
$precuentaT->tipo = "G";
$busquedaT->tipo = "Total";
$objeto = $client10->getPrecuenta($busquedaT,$precuentaT);

$lista=$objeto->items;
$lista2=$objeto->compuestos;
$data=[];
$text=$editar." ".$eliminar." ".$estado." ".$reset;    
$text2=$editar2." ".$eliminar2." ".$estado2." ".$reset2;
$total=0;    
if ($objeto->estado === "A") {
    $text = "";
    $text2="";
}
if (is_array($lista) || is_object($lista)) {
    foreach ($lista as $key ) :
        $total=$total+$key->total;
        $data[]=array( $key->id, $key->id_precuenta_general,$key->nombre,"Item",round($key->precio_unitario, 3),$key->cantidad,round($key->descuento, 3),round($key->total, 3),$text);
    endforeach;
} 
if (is_array($lista2) || is_object($lista2)) {
    foreach ($lista2 as $key ) :
        $total=$total+$key->total;
        $data[]=array( $key->id, $key->id_precuenta_general,$key->nombre,"Compuesto",round($key->precio_unitario, 3),$key->cantidad,round($key->descuento, 3),round($key->total, 3),$text2);
    endforeach;
} 
$data[]=array( "", "","","","","","TOTAL",round($total, 3),"");
$dataT['data']=$data;   
echo json_encode($dataT,JSON_PRETTY_PRINT); 
?>
<?php
$transport->close();
?>
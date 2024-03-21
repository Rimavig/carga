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
        $editar='<a title="Editar" class="editarOrdenCompraItem btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
        $eliminar='<a title="Eliminar" class="eliminarOrdenCompraItem btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
    }
}

$var1 = $_POST["id_ordenCompra"] ?? null;
$ordenCompraT->id_orden_compra = $var1;
$busquedaT->tipo = "total";
$objeto = $client10->getOrdenCompra($busquedaT,$ordenCompraT);

$lista=$objeto->item;
$data=[];
$text=$editar." ".$eliminar." ".$estado." ".$reset;    
if ($objeto->estado === "A") {
    $text = "";
}
if (is_array($lista) || is_object($lista)) {
    foreach ($lista as $key ) :
        $data[]=array( $key->id_orden_compra_item, $key->id_item,$key->id_orden_compra,$key->nombre_item,$key->precio,$key->cantidad,$key->descripcion,$text);
    endforeach;
    $data[]=array( "", "","","TOTAL",$objeto->precio_compra,"","","");

} 

$dataT['data']=$data;   
echo json_encode($dataT,JSON_PRETTY_PRINT); 
?>
<?php
$transport->close();
?>
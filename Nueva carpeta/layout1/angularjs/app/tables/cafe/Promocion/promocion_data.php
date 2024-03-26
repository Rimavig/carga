<?php
include ("../../../conect.php");
include ("../../../conect_cafe.php");
include ("../../../autenticacion.php");
header("Content-type: application/json");
$re = $client->getPerfilRol($_SESSION["id"],"88");
$resultado = "".$re;
$usuarios1= explode(',',$resultado);
$editar="";
$eliminar="";
$estado="";
$reset="";
$estadoG="disabled";
foreach($usuarios1 as $llave => $valores1) {
    if($valores1==="2"){
        $editar='<a title="Editar" class="editarPromocion btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
    }
    if($valores1==="3"){
        $eliminar='<a title="Eliminar" class="eliminarPromocion btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
    }
    if ($valores1 === "5") {
        $estadoG = "";
    }
}
$busquedaT->tipo="G";
$lista = $client10->getAllPromocion($busquedaT,$promocionT);
$data=[];
$text=$editar." ".$eliminar." ".$estado." ".$reset;      
foreach ($lista as $key ) :
    $estado = ($key->estado === "A") ? 'checked' : '';
    $estadoT = ($key->estado === "A") ? 'ON' : 'OFF';
    $est1='<div class="form-group">
        <label class="switch switch-green">
            <input type="checkbox" class="switch-input" id="boxPG"  '.$estado.' '.$estadoG.'>
            <span class="switch-label" data-on="On" data-off="Off"></span>
            <span class="switch-handle"></span>
            <span id="estado" class="esconder"> '.$estadoT.' </span>
        </label>
    </div>';
    $data[]=array( $key->id_promocion , $key->nombre,$key->nombre_grupo, $key->descuento ."%", $key->fecha_inicio, $key->fecha_final,$est1,$text);

endforeach;
$dataT['data']=$data;   
echo json_encode($dataT,JSON_PRETTY_PRINT); 
?>
<?php
$transport->close();
?>
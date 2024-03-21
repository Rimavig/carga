<?php
include ("../../../conect.php");
include ("../../../conect_cafe.php");
include ("../../../autenticacion.php");
header("Content-type: application/json");
$re = $client->getPerfilRol($_SESSION["id"],"89");
$resultado = "".$re;
$usuarios1= explode(',',$resultado);
$editar="";
$eliminar="";
$estado="";
$reset="";
$disabledAttribute = true;

foreach($usuarios1 as $llave => $valores1) {
    if($valores1==="2"){
        $editar='<a title="Editar" class="editarItem btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
    }
    if($valores1==="3"){
        $eliminar='<a title="Eliminar" class="eliminarItem btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
    }
    if ($valores1 === "5") {
        $disabledAttribute = false;
    }
}
$lista = $client10->getAllItem($busquedaT,$itemT);
$data=[];
$text=$editar." ".$eliminar." ".$estado." ".$reset;   
function crearSwitch($id, $estadoValor, $etiquetasOnOff, $esDisabled = false) {
    $estadoChecked = ($estadoValor === "S" || $estadoValor === "A") ? 'checked' : '';
    $estadoTexto = ($estadoValor === "S" || $estadoValor === "A") ? $etiquetasOnOff['on'] : $etiquetasOnOff['off'];
    $disabledAttribute = $esDisabled ? 'disabled' : '';

    return <<<HTML
    <div class="form-group">
        <label class="switch switch-green">
            <input type="checkbox" class="switch-input" id="$id" $estadoChecked $disabledAttribute>
            <span class="switch-label" data-on="{$etiquetasOnOff['on']}" data-off="{$etiquetasOnOff['off']}"></span>
            <span class="switch-handle"></span>
            <span id="estado" class="esconder"> $estadoTexto </span>
        </label>
    </div>
HTML;
}   
foreach ($lista as $key ) :
    $est2 = crearSwitch("boxE", $key->estado, ['on' => 'ON', 'off' => 'OFF'], $key->estado,$disabledAttribute);
    $est3 = crearSwitch("boxEV", $key->estado_venta, ['on' => 'ON', 'off' => 'OFF'], $key->estado_venta,$disabledAttribute);
    $data[]=array( $key->id_item, $key->id_grupo,$key->nombre_grupo,$key->nombre,$key->descripcion,$key->precio,$key->precio_stock,$key->total,$key->tipo,$key->cantidad,$key->medida,$est2,$est3,$text);

endforeach;
$dataT['data']=$data;   
echo json_encode($dataT,JSON_PRETTY_PRINT); 
?>
<?php
$transport->close();
?>
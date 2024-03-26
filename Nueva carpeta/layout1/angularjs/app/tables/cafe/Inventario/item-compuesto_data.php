<?php
include ("../../../conect.php");
include ("../../../conect_cafe.php");
include ("../../../autenticacion.php");
header("Content-type: application/json");
$re = $client->getPerfilRol($_SESSION["id"],"90");
$resultado = "".$re;
$usuarios1= explode(',',$resultado);
$editar="";
$eliminar="";
$estado="";
$reset="";
$disabledAttribute = true;
foreach($usuarios1 as $llave => $valores1) {
    if($valores1==="2"){
        $editar='<a title="Editar" class="editarItemCompuesto btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';

    }
    if($valores1==="3"){
        $eliminar='<a title="Eliminar" class="eliminarItemCompuesto btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
    }
    if ($valores1 === "5") {
        $disabledAttribute = false;
    }
}

$var1 = $_POST["id_compuesto"] ?? null;
$compuestoItemT->id_compuesto=$var1;
$lista = $client10->getAllCompuestoItem($busquedaT,$compuestoItemT);
$data=[];
$text=$editar." ".$eliminar." ".$estado." ".$reset;   
function crearSwitch($id, $estadoValor, $etiquetasOnOff,  $esDisabled = false) {
    $estadoChecked = ($estadoValor === "S" || $estadoValor === "A") ? 'checked' : '';
    $estadoTexto = ($estadoValor === "S" || $estadoValor === "A") ? $etiquetasOnOff['on'] : $etiquetasOnOff['off'];
    $disabledAttribute = $esDisabled ? '' : 'disabled';

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
    $est1 = crearSwitch("boxIC", $key->estado, ['on' => 'ON', 'off' => 'OFF'], $key->estado,$disabledAttribute);
    $data[]=array( $key->id_item_compuesto, $key->id_item,$key->id_compuesto,$key->nombre_item,$key->nombre_compuesto,$key->cantidad,$est1,$text);

endforeach;
$dataT['data']=$data;   
echo json_encode($dataT,JSON_PRETTY_PRINT); 
?>
<?php
$transport->close();
?>
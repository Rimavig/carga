<?php
include("../../../conect.php");
include("../../../conect_cafe.php");
include("../../../autenticacion.php");
header("Content-type: application/json");
$re = $client->getPerfilRol($_SESSION["id"], "90");
$resultado = "" . $re;
$usuarios1 = explode(',', $resultado);
$editar = "";
$eliminar = "";
$estado = "";
$disabledAttribute = true;
$reset = "";
foreach ($usuarios1 as $llave => $valores1) {
    if ($valores1 === "2") {
        $editar = '<a title="Editar" class="editarCompuesto btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
        $estado = '<a title="Items" class="EscogerCompuesto btn btn-sm btn-warning" style="margin: 5px 0px;" href="javascript:;"><i class="icon-basket"></i></a>';
    }
    if ($valores1 === "3") {
        $eliminar = '<a title="Eliminar" class="eliminarCompuesto btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
    }
    if ($valores1 === "5") {
        $disabledAttribute = false;
    }
}
$lista = $client10->getAllCompuesto($busquedaT, $compuestoT);
$data = [];
$text = $editar . " " . $eliminar . " " . $estado . " " . $reset;
function crearSwitch($id, $estadoValor, $etiquetasOnOff,$disabledAttribute2)
{
    $estadoChecked = ($estadoValor === "S" || $estadoValor === "A") ? 'checked' : '';
    $estadoTexto = ($estadoValor === "S" || $estadoValor === "A") ? $etiquetasOnOff['on'] : $etiquetasOnOff['off'];
    $disabledText = ($disabledAttribute2) ? 'disabled' : '';

    return <<<HTML
    <div class="form-group">
        <label class="switch switch-green">
            <input type="checkbox" class="switch-input" id="$id" $estadoChecked $disabledText>
            <span class="switch-label" data-on="{$etiquetasOnOff['on']}" data-off="{$etiquetasOnOff['off']}"></span>
            <span class="switch-handle"></span>
            <span id="estado" class="esconder"> $estadoTexto </span>
        </label>
    </div>
HTML;
}
foreach ($lista as $key) :
    $est2 = crearSwitch("boxCE", $key->estado, ['on' => 'ON', 'off' => 'OFF'], $key->estado,$disabledAttribute);
    $est3 = crearSwitch("boxCEV", $key->estado_venta, ['on' => 'ON', 'off' => 'OFF'], $key->estado_venta,$disabledAttribute);
    $data[] = array($key->id_compuesto, $key->id_grupo, $key->nombre_grupo, $key->nombre, $key->descripcion, $key->precio, $key->tipo,$key->cantidad, $est2, $est3, $text);

endforeach;
$dataT['data'] = $data;
echo json_encode($dataT, JSON_PRETTY_PRINT);
    ?>
    <?php
    $transport->close();
    ?>
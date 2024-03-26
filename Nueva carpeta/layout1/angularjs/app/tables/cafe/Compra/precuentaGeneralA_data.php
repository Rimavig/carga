<?php
include("../../../conect.php");
include("../../../conect_cafe.php");
include("../../../autenticacion.php");
header("Content-type: application/json");
$re = $client->getPerfilRol($_SESSION["id"], "93");
$resultado = "" . $re;
$usuarios1 = explode(',', $resultado);
$editar = "";
$eliminar = "";
$estado = "";
$reset = "";
foreach ($usuarios1 as $llave => $valores1) {
    if ($valores1 === "2") {
        //$editar = '<a title="Editar" class="editarPrecuentaGeneral btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
        $estado = '<a title="Items" class="EscogerPrecuentaGeneral btn btn-sm btn-warning" style="margin: 5px 0px;" href="javascript:;"><i class="icon-basket"></i></a>';
        $estadoB = '<a title="Items" class="EscogerPrecuentaGeneralB btn btn-sm btn-warning" style="margin: 5px 0px;" href="javascript:;"><i class="icon-basket"></i></a>';

    }
    if ($valores1 === "3") {
        $eliminar = '<a title="Eliminar" class="eliminarPrecuentaGeneral btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
    }
}
$precuentaT->tipo = "G";
$precuentaT->estado = "A";
$lista = $client10->getAllPrecuenta($busquedaT, $precuentaT);
$data = [];
$text = $editar . " " . $eliminar . " " . $estado . " " . $reset;
$text1 = $editar . " " . $estadoB . " " . $reset;
foreach ($lista as $key) :

    $estado = ($key->estado === "A") ? 'checked' : '';
    $estadoT = ($key->estado === "A") ? 'ON' : 'OFF';
    $est1 = '<div class="form-group">
        <label class="switch switch-green">
            <input type="checkbox" class="switch-input" id="boxO"  ' . $estado . ' disabled>
            <span class="switch-label" data-on="On" data-off="Off"></span>
            <span class="switch-handle"></span>
            <span id="estado" class="esconder"> ' . $estadoT . ' </span>
        </label>
    </div>';
    if ($key->estado === "A") {
        $data[] = array($key->id_precuenta,  $key->descripcion,$key->usuario_creacion,round($key->efectivo, 3),round($key->tarjeta_credito, 3),round($key->donacion, 3),round($key->descuento, 3),round($key->canjeados, 3),round($key->total, 3),round($key->total_pagado, 3), $key->fecha_creacion,  $est1,$text1);
    }else{
        $data[] = array($key->id_precuenta,  $key->descripcion,$key->usuario_creacion,round($key->efectivo, 3),round($key->tarjeta_credito, 3),round($key->donacion, 3),round($key->descuento, 3),round($key->canjeados, 3),round($key->total, 3),round($key->total_pagado, 3), $key->fecha_creacion,  $est1,$text);
    }
endforeach;
$dataT['data'] = $data;
echo json_encode($dataT, JSON_PRETTY_PRINT);
    ?>
    <?php
    $transport->close();
    ?>
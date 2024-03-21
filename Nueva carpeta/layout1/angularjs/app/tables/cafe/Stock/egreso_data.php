<?php
include("../../../conect.php");
include("../../../conect_cafe.php");
include("../../../autenticacion.php");
header("Content-type: application/json");
$re = $client->getPerfilRol($_SESSION["id"], "92");
$resultado = "" . $re;
$usuarios1 = explode(',', $resultado);
$editarI = "";
$eliminarI = "";
$editarC = "";
$eliminarC = "";
$estado = "";
$reset = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fechaInicial = isset($_POST['fechaInicial']) ? $_POST['fechaInicial'] : null;
    $fechaFinal = isset($_POST['fechaFinal']) ? $_POST['fechaFinal'] : null;
    $busquedaT->fecha_inicio = $fechaInicial;
    $busquedaT->fecha_termino = $fechaFinal;
}
foreach ($usuarios1 as $llave => $valores1) {
    if ($valores1 === "2") {
        //$editarI = '<a title="Editar" class="editarEgresoItem btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
        //$editarC = '<a title="Editar" class="editarEgresoCompuesto btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
    }
    if ($valores1 === "3") {
        $eliminarI = '<a title="Eliminar" class="eliminarEgresoItem btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
        $eliminarC = '<a title="Eliminar" class="eliminarEgresoCompuesto btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
    }
}
$busquedaT->tipo = "E";
$lista = $client10->getAllIngreso($busquedaT, $ingresoT);
$data = [];
$textI = $editarI . " " . $eliminarI;
$textC = $editarC . " " . $eliminarC;

foreach ($lista as $key) :

    $estado = ($key->estado === "A") ? 'checked' : '';
    $estadoT = ($key->estado === "A") ? 'ON' : 'OFF';
    if ($key->tipo === "I") {
        $est1 = '<div class="form-group">
        <label class="switch switch-green">
            <input type="checkbox" class="switch-input" id="boxI"  ' . $estado . '>
            <span class="switch-label" data-on="On" data-off="Off"></span>
            <span class="switch-handle"></span>
            <span id="estado" class="esconder"> ' . $estadoT . ' </span>
        </label>
    </div>';
        $data[] = array($key->id_ingreso, $key->nombre_item, "ITEM", $key->descripcion, $key->cantidad, $key->fecha_creacion, $textI);
    } else {
        $est1 = '<div class="form-group">
        <label class="switch switch-green">
                <input type="checkbox" class="switch-input" id="boxC"  ' . $estado . '>
                <span class="switch-label" data-on="On" data-off="Off"></span>
                <span class="switch-handle"></span>
                <span id="estado" class="esconder"> ' . $estadoT . ' </span>
            </label>
        </div>';
        $data[] = array($key->id_ingreso, $key->nombre_compuesto, "COMPUESTO", $key->descripcion, $key->cantidad, $key->fecha_creacion, $textC);
    }
endforeach;
$dataT['data'] = $data;
echo json_encode($dataT, JSON_PRETTY_PRINT);
    ?>
    <?php
    $transport->close();
    ?>
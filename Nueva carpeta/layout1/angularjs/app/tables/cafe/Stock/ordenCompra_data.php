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
        $editar = '<a title="Editar" class="editarOrdenCompra btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
        $estado = '<a title="Items" class="EscogerOrdenCompra btn btn-sm btn-warning" style="margin: 5px 0px;" href="javascript:;"><i class="icon-basket"></i></a>';
    }
    if ($valores1 === "3") {
        $eliminar = '<a title="Eliminar" class="eliminarOrdenCompra btn btn-sm btn-danger" style="margin: 5px 0px;  " href="javascript:;"><i class="icon-trash"></i></a>';
    }
}
$lista = $client10->getAllOrdenCompra($busquedaT, $ordenCompraT);
$data = [];
$text = $editar . " " . $eliminar . " " . $estado . " " . $reset;
$text1 = $editar . " " . $estado . " " . $reset;
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
        $data[] = array($key->id_orden_compra, $key->id_proveedor, $key->nombre_proveedor, $key->ruc_proveedor, $key->factura, $key->precio_compra, $key->descripcion, $key->fecha_creacion,  $est1,$text1);
    }else{
        $data[] = array($key->id_orden_compra, $key->id_proveedor, $key->nombre_proveedor, $key->ruc_proveedor, $key->factura, $key->precio_compra, $key->descripcion, $key->fecha_creacion,  $est1,$text);
    }
endforeach;
$dataT['data'] = $data;
echo json_encode($dataT, JSON_PRETTY_PRINT);
    ?>
    <?php
    $transport->close();
    ?>
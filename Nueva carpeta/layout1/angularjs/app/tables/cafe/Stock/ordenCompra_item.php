<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
include("../../../directorio.php");

$re = $client->getPerfilRol($_SESSION["id"], "93");
$resultado = "" . $re;
$usuarios = explode(',', $resultado);
$crear = "hide";
$editar = "hide";
$eliminar = "hide";
$exportar = "no-descargar";
if ($resultado == "") {
?>
    <a href="#" ng-click="reload()"></a>
<?php
}
foreach ($usuarios as $llave => $valores1) {
    switch ($valores1) {
        case "1":
            $crear = "";
            break;
        case "2":
            $editar = "";
            break;
        case "3":
            $eliminar = "";
            break;
        case "6":
            $exportar = "";
            break;
    }
}
$text = "";
if (isset($_GET["id"])) {
    $var1 = $_GET['id'];
    $ordenCompraT->id_orden_compra = $var1;
    $busquedaT->tipo = "general";
    $promocionG = $client10->getOrdenCompra($busquedaT, $ordenCompraT);
    if ($promocionG->estado === "A") {
        $text = "hide";
        $crear = "hide";
    }
}
    ?>
    <div class="row">
        <div class="col-md-3">
            <div class="form-group">
                <label class="control-label">Proveedor</label>
                <select class="form-control form-white" data-placeholder="Escoga proveedor" name="proveedor">
                    <option value="<?php echo $promocionG->id_proveedor ?>" data-ruc="<?php echo $promocionG->ruc_proveedor ?>">
                        <?php echo $promocionG->nombre_proveedor ?>
                    </option>

                </select>
            </div>
        </div>
        <div class="col-md-3 form-group">
            <label class="control-label">Ruc</label>
            <input class="form-control form-white" placeholder="Ingrese RUC" value="<?php echo $promocionG->ruc_proveedor; ?>" type="text" name="ruc" disabled />
        </div>
        <div class="col-md-3 form-group">
            <label class="control-label">Factura</label>
            <input class="form-control form-white" placeholder="Ingrese factura" value="<?php echo $promocionG->factura; ?>" type="text" name="factura" disabled />
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label class="control-label">Total Factura</label>
                <input class="form-control input-sm" type="number" value="<?php echo $promocionG->precio_compra; ?>" step="0.5" name="precioT" placeholder="Total de compra" disabled>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 form-group">
            <label class="control-label">Descripción</label>
            <textarea class="form-control form-white" placeholder="Ingrese descripción" name="descripcion" disabled><?php echo $promocionG->descripcion; ?></textarea>
        </div>
    </div>
    <div class="btn-group <?php echo $crear; ?>">
        <button class="crearOrdenCompraItem btn-sm btn-dark " href="javascript:;"><i class="fa fa-plus"></i> item </button>
    </div>
    <table class="table table-dynamic table-ordenCompra_item " data-table-name="item-ordenCompra_item" id="table-ordenCompra_item">
        <thead>
            <tr>
                <th>id_orden_compra_item</th>
                <th>id_item</th>
                <th>id_orden_compra </th>
                <th>Nombre Item </th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Descripción</th>
                <th class="text-right">Editar</th>
            </tr>
        </thead>
    </table>
    <div class="modal-footer text-center">
        <button type="button" class="btn btn-default btn-embossed regresar" data-dismiss="modal">Salir</button>
        <button type="button" class="btn btn-primary btn-embossed cerrar_compra <?php echo $text; ?>" data-dismiss="modal">Finalizar Compra</button>
    </div>
    <?php
    $transport->close();
    ?>
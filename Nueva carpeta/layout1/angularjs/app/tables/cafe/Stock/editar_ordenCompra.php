<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$var1 = "";
$crear = "";
$bloquear = "";
if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $ordenCompraT->id_orden_compra = $var1;
    $busquedaT->tipo = "general";
    $promocionG = $client10->getOrdenCompra($busquedaT, $ordenCompraT);
    if ($promocionG->estado === "A") {
        $bloquear = "disabled";
    }
}

?>
<div class="modal-dialog modal-mantenimiento ">
    <div class="modal-content  ">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
            <h4 class="modal-title"><strong>Editar</strong> Orden Compra</h4>
            <input type="text" id="EidOrdenCompra" class="esconder" value="<?php echo $var1; ?>" disabled>

        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Proveedor</label>
                        <select class="form-control form-white" id="proveedor" data-placeholder="Escoga proveedor" name="proveedor">
                            <option value="<?php echo $promocionG->id_proveedor ?>" data-ruc="<?php echo $promocionG->ruc_proveedor ?>">
                                <?php echo $promocionG->nombre_proveedor ?>
                            </option>

                        </select>
                    </div>
                </div>
                <div class="col-md-6 form-group">
                    <label class="control-label">Ruc</label>
                    <input class="form-control form-white" placeholder="Ingrese RUC" value="<?php echo $promocionG->ruc_proveedor; ?>" type="text" id="ruc" name="ruc" disabled />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 form-group">
                    <label class="control-label">Factura</label>
                    <input class="form-control form-white" placeholder="Ingrese factura" value="<?php echo $promocionG->factura; ?>" type="text" id="factura" name="factura" />
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Total Factura</label>
                        <input class="form-control input-sm" type="number" id="precioT" value="<?php echo $promocionG->precio_compra; ?>" step="0.5" name="precioT" placeholder="Total de compra" <?php echo $bloquear; ?>>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <label class="control-label">Descripción</label>
                    <textarea class="form-control form-white" placeholder="Ingrese descripción" id="descripcion" name="descripcion"><?php echo $promocionG->descripcion; ?></textarea>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer text-center">
        <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-danger btn-embossed editar_ordenCompra <?php echo $crear; ?>">Editar</button>
    </div>
</div>
<?php
$transport->close();
$transport10->close();
?>
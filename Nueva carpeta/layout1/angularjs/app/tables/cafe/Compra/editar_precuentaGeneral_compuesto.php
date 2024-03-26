<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$var1 = "";
$crear = "";
if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $pedidoICT->id = $var1;
    $pedidoICT->tipo = "GC";
    $promocionG = $client10->getPedidoIC($busquedaT, $pedidoICT);
}
?>
<div class="modal-dialog modal-mantenimiento ">
    <div class="modal-content  ">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
            <h4 class="modal-title"><strong>Editar</strong> Compuesto </h4>
            <input type="text" id="EidPrecuentaGeneralCompuesto" class="esconder" value="<?php echo $var1; ?>" disabled>

        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="control-label">Compuesto</label>
                        <select class="form-control form-white" id="grupoC" data-placeholder="Escoga compuesto" name="compuesto">
                            <option value="<?php echo $promocionG->id_enlace ?>" data-precio="<?php echo $promocionG->precio_unitario ?>">
                                <?php echo $promocionG->nombre ?>
                            </option>

                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Cantidad</label>
                        <input class="form-control input-sm" type="number" id="cantidad" value="<?php echo $promocionG->cantidad; ?>" step="1" name="cantidad" placeholder="Ingrese cantidad" required>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Precio Unitario</label>
                        <input class="form-control input-sm" type="number" id="precioU" value="0" step="0.5" disabled>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Precio Total</label>
                        <input class="form-control input-sm" type="number" id="precioT" value="0" step="0.5" disabled>
                    </div>
                </div>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Salir</button>
                <button type="button" class="btn btn-danger btn-embossed editar_precuentaGeneral_compuesto <?php echo $crear; ?>">Guardar</button>
            </div>
        </div>
    </div>

</div>
<?php
$transport->close();
$transport10->close();
?>
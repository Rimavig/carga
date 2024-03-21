<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$var1 = "";
$crear = "";
if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $promocionT->id_promocion = $var1;
    $busquedaT->tipo = "I";
    $promocionG = $client10->getPromocion($busquedaT, $promocionT);
}

?>
<div class="modal-dialog modal-mantenimiento ">
    <div class="modal-content  ">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
            <h4 class="modal-title"><strong>Editar</strong> Promoción Item</h4>
            <input type="text" id="EidPromocionItem" class="esconder" value="<?php echo $var1; ?>" disabled>

        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Nombre</label>
                        <input class="form-control form-white" id="nombre" value="<?php echo $promocionG->nombre; ?>" placeholder="Ingrese nombre" type="text" name="nombre" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Item</label>
                        <select class="form-control form-white" id="grupoC" data-placeholder="Escoga item" name="item">
                            <option value="<?php echo $promocionG->id_item ?>" data-precio="<?php echo $promocionG->precio_objeto ?>">
                                <?php echo $promocionG->nombre_item ?>
                            </option>

                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Tipo</label>
                        <select class="form-control form-white" id="tipoC" name="tipo">
                            <option value="D" <?php echo ($promocionG->tipo === "D") ? 'selected' : ''; ?>>Descuento</option>
                            <option value="P" <?php echo ($promocionG->tipo === "P") ? 'selected' : ''; ?>>Precio</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Descuento</label>
                        <input class="form-control input-sm" type="number" id="descuento" value="<?php echo $promocionG->descuento; ?>" value="0" step="0.5" name="descuento" placeholder="Ingrese descuento" required>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Precio Total</label>
                        <input class="form-control input-sm" type="number" id="precioT" value="<?php echo $promocionG->precio_final; ?>" step="0.5" name="precioT" placeholder="Precio calculado" disabled>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="form-group ">
                        <label class="control-label">Precio</label>
                        <input class="form-control input-sm" type="number" id="precio" value="<?php echo $promocionG->precio; ?>" step="0.5" name="precio" placeholder="Ingrese precio" required>

                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="form-group ">
                        <label class="control-label">Precio Item</label>
                        <input class="form-control input-sm" type="number" id="precioC" value="<?php echo $promocionG->precio_objeto; ?>" step="0.5" name="precioC" placeholder="Precio real" disabled>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Fecha Inicio</label>
                        <input class="form-control form-white" id="fechaInicio" value="<?php echo $promocionG->fecha_inicio; ?>" placeholder="Ingrese fecha inicio" type="date" name="fechaInicio" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Fecha Final</label>
                        <input class="form-control form-white" id="fechaFinal" value="<?php echo $promocionG->fecha_final; ?>" placeholder="Ingrese fecha final" type="date" name="fecha_final" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer text-center">
        <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-danger btn-embossed editar_promocionItem <?php echo $crear; ?>">Editar</button>
    </div>
</div>
</div>
<?php
$transport->close();
$transport10->close();
?>
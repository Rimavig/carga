<?php
include("../../../conect_cafe.php");
include("../../../autenticacion.php");
$crear = "";
$var1 = "";
if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $promocionT->id_promocion = $var1;
    $busquedaT->tipo = "G";
    $promocionG = $client10->getPromocion($busquedaT, $promocionT);
}

?>
<div class="modal-dialog modal-mantenimiento ">
    <div class="modal-content  ">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
            <h4 class="modal-title"><strong>Editar</strong> Promoción</h4>
            <input type="text" id="EidPromocion" class="esconder" value="<?php echo $var1; ?>" disabled>

        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Nombre</label>
                        <input class="form-control form-white" id="nombre" value="<?php echo $promocionG->nombre; ?>" placeholder="Ingrese nombre" type="text" name="nombre" />
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label class="control-label">Grupo</label>
                        <select class="form-control form-white" id="grupoC" data-placeholder="Escoga grupo" name="grupo">
                            <option value="<?php echo $promocionG->id_grupo ?>">
                                <?php echo $promocionG->nombre_grupo ?>
                            </option>

                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label class="control-label">Descuento</label>
                        <input class="form-control input-sm" type="number" id="descuento" value="<?php echo $promocionG->descuento; ?>" value="0" step="0.5" name="descuento" placeholder="Ingrese descuento" required>
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
        <div class="modal-footer text-center">
            <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger btn-embossed editar_promocion <?php echo $crear; ?>">Editar</button>
        </div>
    </div>
</div>
<?php
$transport10->close();
?>
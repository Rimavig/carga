<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$var1 = "";
$crear = "";
$bloquear = "";
if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $precuentaT->id_precuenta = $var1;
    $precuentaT->tipo = "G";
    $busquedaT->tipo = "simple";
    $precuentaG = $client10->getPrecuenta($busquedaT, $precuentaT);
    if ($precuentaG->estado === "A") {
        $bloquear = "disabled";
        $crear = "";
    }
}

?>
<div class="modal-dialog modal-mantenimiento ">
    <div class="modal-content  ">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
            <h4 class="modal-title"><strong>Editar</strong> Precuenta General</h4>
            <input type="text" id="EidPrecuentaGeneral" class="esconder" value="<?php echo $var1; ?>" disabled>

        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-12 form-group">
                    <label class="control-label">Descripción</label>
                    <textarea class="form-control form-white" placeholder="Ingrese descripción" id="descripcion" name="descripcion"><?php echo $precuentaG->descripcion; ?></textarea>
                </div>
            </div>
        </div>
        <div class="modal-footer text-center">
            <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger btn-embossed editar_precuentaGeneral <?php echo $crear; ?>">Editar</button>
        </div>
    </div>

</div>
<?php
$transport->close();
$transport10->close();
?>
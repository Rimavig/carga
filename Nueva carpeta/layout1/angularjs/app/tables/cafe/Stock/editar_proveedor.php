<?php
include ("../../../conect_cafe.php");
include ("../../../autenticacion.php");
$var1 = "";
$crear = "";
if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $proveedorT->id_proveedor=$var1;
    $proveedorG = $client10->getProveedor($busquedaT,$proveedorT);
}

?>
<div class="modal-dialog modal-mantenimiento ">
    <div class="modal-content  ">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
            <h4 class="modal-title"><strong>Editar</strong> Proveedor</h4>
            <input type="text"  id="EidProveedor" class="esconder"  value="<?php echo $var1; ?>" disabled>    

        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6 form-group">
                    <label class="control-label">Nombre</label>
                    <input class="form-control form-white" placeholder="Ingrese nombre" value="<?php echo $proveedorG->nombre; ?>" type="text" id="nombreP" name="nombreP" />
                </div>
                <div class="col-md-6 form-group">
                    <label class="control-label">Ruc</label>
                    <input class="form-control form-white" placeholder="Ingrese RUC" value="<?php echo $proveedorG->ruc; ?>" type="text" id="rucP" name="rucP" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 form-group">
                    <label class="control-label">Dirección</label>
                    <input class="form-control form-white" placeholder="Ingrese dirección" value="<?php echo $proveedorG->direccion; ?>" type="text" id="direccionP" name="direccionP" />
                </div>
                <div class="col-md-6 form-group">
                    <label class="control-label">Correo</label>
                    <input class="form-control form-white" placeholder="Ingrese correo" value="<?php echo $proveedorG->correo; ?>" type="email" id="correoP" name="correoP" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <label class="control-label">Descripción</label>
                    <textarea class="form-control form-white" placeholder="Ingrese descripción"  id="descripcionP" name="descripcionP"><?php echo $proveedorG->descripcion; ?></textarea>
                </div>
            </div>
        </div>
        <div class="modal-footer text-center">
            <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger btn-embossed editar_proveedor <?php echo $crear; ?>">Editar</button>
        </div>
    </div>
</div>
<?php
$transport10->close();
?>
<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$re = $client->getPerfilRol($_SESSION["id"], "87");
$resultado = "" . $re;
$usuarios = explode(',', $resultado);
$crear = "hide";
$exportar = "no-descargar";

foreach ($usuarios as $llave => $valores1) {
    if ($valores1 === "1") {
        $crear = "";
    }
}

    ?>
    <div class="modal-dialog modal-mantenimiento ">
        <div class="modal-content  ">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
                <h4 class="modal-title"><strong>Crear</strong> Proveedor</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6 form-group">
                        <label class="control-label">Nombre</label>
                        <input class="form-control form-white" placeholder="Ingrese nombre" type="text" id="nombreP" name="nombreP" />
                    </div>
                    <div class="col-md-6 form-group">
                        <label class="control-label">Ruc</label>
                        <input class="form-control form-white" placeholder="Ingrese RUC" type="text" id="rucP" name="rucP" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 form-group">
                        <label class="control-label">Dirección</label>
                        <input class="form-control form-white" placeholder="Ingrese dirección" type="text" id="direccionP" name="direccionP" />
                    </div>
                    <div class="col-md-6 form-group">
                        <label class="control-label">Correo</label>
                        <input class="form-control form-white" placeholder="Ingrese correo" type="email" id="correoP" name="correoP" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group">
                        <label class="control-label">Descripción</label>
                        <textarea class="form-control form-white" placeholder="Ingrese descripción" id="descripcionP" name="descripcionP"></textarea>
                    </div>
                </div>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Salir</button>
                <button type="button" class="btn btn-danger btn-embossed crear_proveedor <?php echo $crear; ?>">Guardar</button>
            </div>
        </div>
    </div>
    <?php
    $transport->close();
    $transport10->close();
    ?>
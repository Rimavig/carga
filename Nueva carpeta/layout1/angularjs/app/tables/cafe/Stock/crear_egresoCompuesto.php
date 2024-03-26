<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$re = $client->getPerfilRol($_SESSION["id"], "92");
$compuestoT->tipo="S";
$lista = $client10->getAllCompuesto($busquedaT, $compuestoT);
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
                <h4 class="modal-title"><strong>Crear</strong> Egreso Compuesto</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12 form-group">
                        <label class="control-label">Descripción</label>
                        <textarea class="form-control form-white" placeholder="Ingrese descripción" id="descripcion" name="descripcion"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Compuesto</label>
                            <select class="form-control form-white" id="grupoC" data-placeholder="Escoga compuesto" name="compuesto">
                                <?php foreach ($lista as $key) :
                                    if ($key->estado==="A") {
                                        ?>
                                        <option value="<?php echo $key->id_compuesto ?>" data-precio="<?php echo $key->precio ?>">
                                            <?php echo $key->nombre ?>
                                        </option>
                                        <?php
                                    }
                                    
                                endforeach; ?>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Cantidad</label>
                            <input class="form-control input-sm" type="number" id="cantidad" value="0" step="0.5" name="cantidad" placeholder="Ingrese cantidad" required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Salir</button>
                <button type="button" class="btn btn-danger btn-embossed crear_egresoCompuesto <?php echo $crear; ?>">Guardar</button>
            </div>
        </div>
    </div>
    <?php
    $transport->close();
    $transport10->close();
    ?>
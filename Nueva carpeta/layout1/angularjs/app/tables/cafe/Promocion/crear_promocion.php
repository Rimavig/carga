<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$re = $client->getPerfilRol($_SESSION["id"], "88");
$busquedaT->tipo = "T";
$lista = $client10->getAllGrupo($busquedaT, $grupoT);
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
                <h4 class="modal-title"><strong>Crear</strong> Promoción General</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Nombre</label>
                            <input class="form-control form-white" id="nombre" placeholder="Ingrese nombre" type="text" name="nombre" />
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label class="control-label">Grupo</label>
                            <select class="form-control form-white" id="grupoC" data-placeholder="Escoga grupo" name="grupo">
                                <?php foreach ($lista as $key) :
                                    if ($key->estado === "A") {
                                ?>
                                        <option value="<?php echo $key->id_grupo ?>">
                                            <?php echo $key->nombre ?>
                                        </option>
                                <?php
                                    }

                                endforeach; ?>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label class="control-label">Descuento</label>
                            <input class="form-control input-sm" type="number" id="descuento" value="0" step="0.5" name="descuento" placeholder="Ingrese descuento" required>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Fecha Inicio</label>
                            <input class="form-control form-white" id="fechaInicio" placeholder="Ingrese fecha inicio" type="date" name="fechaInicio" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Fecha Final</label>
                            <input class="form-control form-white" id="fechaFinal" placeholder="Ingrese fecha final" type="date" name="fecha_final" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Salir</button>
                <button type="button" class="btn btn-danger btn-embossed crear_promocion <?php echo $crear; ?>">Guardar</button>
            </div>
        </div>
    </div>
    <?php
    $transport->close();
    $transport10->close();
    ?>
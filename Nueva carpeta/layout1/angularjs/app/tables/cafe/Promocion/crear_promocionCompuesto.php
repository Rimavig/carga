<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$re = $client->getPerfilRol($_SESSION["id"], "95");
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
                <h4 class="modal-title"><strong>Crear</strong> Promoción Compuesto</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Nombre</label>
                            <input class="form-control form-white" id="nombre" placeholder="Ingrese nombre" type="text" name="nombre" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Compuesto</label>
                            <select class="form-control form-white" id="grupoC" data-placeholder="Escoga compuesto" name="compuesto">
                                <?php foreach ($lista as $key) :
                                    if ($key->estado === "A") {
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
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Tipo</label>
                            <select class="form-control form-white" id="tipoC" data-placeholder="Escoga tipo" name="tipo">
                                <option value="D" selected>Descuento</option>
                                <option value="P">Precio</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Descuento</label>
                            <input class="form-control input-sm" type="number" id="descuento" value="0" step="0.5" name="descuento" placeholder="Ingrese descuento" required>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Precio Total</label>
                            <input class="form-control input-sm" type="number" id="precioT" value="0" step="0.5" name="precioT" placeholder="Precio calculado" disabled>
                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="form-group ">
                            <label class="control-label">Precio</label>
                            <input class="form-control input-sm" type="number" id="precio" value="0" step="0.5" name="precio" placeholder="Ingrese precio" required>

                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="form-group ">
                            <label class="control-label">Precio Compuesto</label>
                            <input class="form-control input-sm" type="number" id="precioC" value="0" step="0.5" name="precioC" placeholder="Precio real" disabled>
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
                <button type="button" class="btn btn-danger btn-embossed crear_promocionCompuesto <?php echo $crear; ?>">Guardar</button>
            </div>
        </div>
    </div>
    <?php
    $transport->close();
    $transport10->close();
    ?>
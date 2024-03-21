<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$re = $client->getPerfilRol($_SESSION["id"], "89");
$busquedaT->tipo = "N";
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
                <h4 class="modal-title"><strong>Crear</strong> Item</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Nombre</label>
                            <input class="form-control form-white" id="nombreC" placeholder="Ingrese nombre" type="text" name="nombre" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Grupo</label>
                            <select class="form-control form-white" id="grupoC" data-placeholder="Escoga grupo" name="grupo">
                                <?php
                                foreach ($lista as $key) :
                                    if ($key->estado === "A") {
                                ?>
                                        <option value="<?php echo $key->id_grupo ?>"><?php echo $key->nombre  ?></option>
                                <?php
                                    }
                                endforeach;
                                ?>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="control-label">Descripción</label>
                            <textarea class="form-control form-white" id="descripcionC" placeholder="Ingrese descripción" name="descripcion"></textarea>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Precio</label>
                            <input class="form-control input-sm" type="number" id="precioC" value="0" step="0.05" name="precio" placeholder="Ingrese precio" required>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Tipo</label>
                            <select class="form-control form-white" id="tipoC" data-placeholder="Escoga tipo" name="tipo">
                                <option value="B">Bar</option>
                                <option value="C">Cocina</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="field-1" class="control-label">Inventario</label>
                            <div class="form-group ">
                                <label class="switch switch-green">
                                    <input type="checkbox" class="switch-input" id="boxI" checked disabled>
                                    <span class="switch-label" data-on="SI" data-off="NO"></span>
                                    <span class="switch-handle"></span>
                                    <span id="inventarioC" class="esconder">SI</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Cantidad</label>
                            <input class="form-control form-white" id="cantidadC" step="0.05" value="0" placeholder="Ingrese cantidad" type="number" name="cantidad" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Unidad Medida</label>
                            <input class="form-control form-white" id="medida" placeholder="Ingrese medida" type="text" name="medida" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Salir</button>
                <button type="button" class="btn btn-danger btn-embossed crear_item <?php echo $crear; ?>">Guardar</button>
            </div>
        </div>
    </div>
    <?php
    $transport->close();
    $transport10->close();
    ?>
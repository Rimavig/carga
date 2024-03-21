<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$busquedaT->tipo = "N";
$lista = $client10->getAllGrupo($busquedaT, $grupoT);
$var1 = "";
$crear = "";
if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $itemT->id_item = $var1;
    $itemG = $client10->getItem($busquedaT, $itemT);
}

?>
<div class="modal-dialog modal-mantenimiento ">
    <div class="modal-content  ">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
            <h4 class="modal-title"><strong>Crear</strong> Item</h4>
            <input type="text" id="EidItem" class="esconder" value="<?php echo $var1; ?>" disabled>

        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Nombre</label>
                        <input class="form-control form-white" id="nombreC" value="<?php echo $itemG->nombre; ?>" placeholder="Ingrese nombre" type="text" name="nombre" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Grupo</label>
                        <select class="form-control form-white" id="grupoC" data-placeholder="Escoga grupo" name="grupo">
                            <?php foreach ($lista as $key) : ?>
                                <option value="<?php echo $key->id_grupo ?>" <?php echo ($key->id_grupo === $itemG->id_grupo) ? 'selected' : ''; ?>>
                                    <?php echo $key->nombre ?>
                                </option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="control-label">Descripción</label>
                        <textarea class="form-control form-white" id="descripcionC" placeholder="Ingrese descripción" name="descripcion"><?php echo $itemG->descripcion; ?></textarea>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Precio</label>
                        <input class="form-control input-sm" type="number" id="precioC" value="<?php echo $itemG->precio; ?>" step="0.05" name="precio" placeholder="Ingrese precio" required>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Tipo</label>
                        <select class="form-control form-white" id="tipoC" name="tipo">
                            <option value="B" <?php echo ($itemG->tipo === "B") ? 'selected' : ''; ?>>Bar</option>
                            <option value="C" <?php echo ($itemG->tipo === "C") ? 'selected' : ''; ?>>Cocina</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Cantidad</label>
                        <input class="form-control form-white" id="cantidadC" step="0.05" value="<?php echo $itemG->cantidad; ?>" placeholder="Ingrese cantidad" type="number" name="cantidad" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Unidad Medida</label>
                        <input class="form-control form-white" id="medida" value="<?php echo $itemG->medida; ?>" placeholder="Ingrese medida" type="text" name="medida" />
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer text-center">
            <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger btn-embossed editar_item <?php echo $crear; ?>">Editar</button>
        </div>
    </div>
</div>
<?php
$transport->close();
$transport10->close();
?>
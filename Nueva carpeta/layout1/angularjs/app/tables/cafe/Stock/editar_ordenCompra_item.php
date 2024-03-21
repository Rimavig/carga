<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
$var1 = "";
$crear = "";
if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $ordenCompraItemT->id_orden_compra_item = $var1;
    $promocionG = $client10->getOrdenCompraItem($busquedaT, $ordenCompraItemT);
}
    ?>
    <div class="modal-dialog modal-mantenimiento ">
        <div class="modal-content  ">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
                <h4 class="modal-title"><strong>Editar</strong> Item de orden Compra</h4>
                <input type="text" id="EidOrdenCompraItem" class="esconder" value="<?php echo $var1; ?>" disabled>

            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Item</label>
                            <select class="form-control form-white" id="item" data-placeholder="Escoga item" name="item">
                            <option value="<?php echo $promocionG->id_item ?>">
                                <?php echo $promocionG->nombre_item ?>
                            </option>

                        </select>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Precio Total</label>
                            <input class="form-control input-sm" type="number" id="precio"value="<?php echo $promocionG->precio; ?>" step="0.5" name="precio" placeholder="Ingrese precio" required>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label">Cantidad Total</label>
                            <input class="form-control input-sm" type="number" id="cantidad" value="<?php echo $promocionG->cantidad; ?>" step="0.5" name="cantidad" placeholder="Ingrese cantidad" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group">
                        <label class="control-label">Descripción</label>
                        <textarea class="form-control form-white" placeholder="Ingrese descripción" id="descripcion" name="descripcion"><?php echo $promocionG->descripcion; ?></textarea>
                    </div>
                </div>                    
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Salir</button>
                <button type="button" class="btn btn-danger btn-embossed editar_ordenCompra_item <?php echo $crear; ?>">Guardar</button>
            </div>
        </div>
    </div>
    <?php
    $transport->close();
    $transport10->close();
    ?>
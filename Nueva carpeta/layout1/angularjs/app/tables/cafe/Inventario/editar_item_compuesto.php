<?php
include ("../../../conect_cafe.php");
include ("../../../conect.php");
include ("../../../autenticacion.php");
$lista = $client10->getAllItem($busquedaT,$itemT);
$var1="";
$crear = "";
if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $compuestoItemT->id_item_compuesto=$var1;
    $itemG = $client10->getCompuestoItem($busquedaT,$compuestoItemT);
}

?>
<div class="modal-dialog modal-mantenimiento ">
    <div class="modal-content  ">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
            <h4 class="modal-title"><strong>Editar</strong> Item-Compuesto</h4>
            <input type="text"  id="EidItemCompuesto" class="esconder"  value="<?php echo $var1; ?>" disabled>    

        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Item</label>
                        <input class="form-control form-white" id="nombreC" value="<?php echo $itemG->nombre_item; ?>" placeholder="Ingrese nombre" type="text" name="nombre" disabled/>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label class="control-label">Cantidad</label>
                        <input class="form-control form-white" id="cantidadC" step="0.05" value="<?php echo $itemG->cantidad; ?>" placeholder="Ingrese cantidad" type="number" name="cantidad" />
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer text-center">
            <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger btn-embossed editar_item_compuesto <?php echo $crear; ?>">Editar</button>
        </div>
    </div>
</div>
<?php
$transport->close();
$transport10->close();
?>
<?php
include ("../../../conect_cafe.php");
include ("../../../conect.php");
include ("../../../autenticacion.php");
$re = $client->getPerfilRol($_SESSION["id"],"86");
$lista = $client10->getAllItem($busquedaT,$itemT);
$resultado = "".$re;
$usuarios= explode(',',$resultado);
$crear="hide";
$exportar="no-descargar";
foreach($usuarios as $llave => $valores1) {
    if($valores1==="1"){
        $crear="";
    }
}

?>
<div class="modal-dialog modal-mantenimiento ">
    <div class="modal-content  ">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
            <h4 class="modal-title"><strong>Crear</strong> Item-Compuesto</h4>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Item</label>
                        <select class="form-control form-white" id="itemC" data-placeholder="Escoga item" name="item">
                        <?php
                        foreach ($lista as $key ) :
                            if ($key->estado==="A") {
                                ?>
                                <option value="<?php echo $key->id_item ?>" ><?php echo $key->nombre  ?></option>
                                <?php
                            }
                        endforeach;
                        ?> 
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label class="control-label">Cantidad</label>
                        <input class="form-control form-white" id="cantidadC" step="0.05" value="0" placeholder="Ingrese cantidad" type="number" name="cantidad" />
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer text-center">
            <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Salir</button>
            <button type="button" class="btn btn-danger btn-embossed crear_item_compuesto <?php echo $crear; ?>">Guardar</button>
        </div>
    </div>
</div>
<?php
$transport->close();
$transport10->close();
?>
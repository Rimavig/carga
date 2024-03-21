<?php
include ("../../../conect_cafe.php");
include ("../../../conect.php");
include ("../../../autenticacion.php");
$re = $client->getPerfilRol($_SESSION["id"],"74");
$resultado = "".$re;
$usuarios= explode(',',$resultado);
$crear="hide";
$exportar="no-descargar";
if($resultado==""){
    ?>
    <a ng-click="reload()">
    <?php
}
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
            <h4 class="modal-title"><strong>Crear</strong> Grupo</h4>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="control-label">Nombre</label>
                        <input class="form-control form-white" id="nombreG" placeholder="Ingrese nombre" type="text" name="nombre" />
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer text-center">
            <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Salir</button>
            <button type="button" class="btn btn-danger btn-embossed crear_grupo <?php echo $crear; ?>">Guardar</button>
        </div>
    </div>
</div>
<?php
$transport->close();
$transport10->close();
?>
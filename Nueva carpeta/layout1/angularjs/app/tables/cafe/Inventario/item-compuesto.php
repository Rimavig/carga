
<?php
include ("../../../conect_cafe.php");
include ("../../../conect.php");
include ("../../../autenticacion.php");
include ("../../../directorio.php");
$re = $client->getPerfilRol($_SESSION["id"],"45");
$resultado = "".$re;
$usuarios= explode(',',$resultado);
$crear="hide";
$editar="hide";
$eliminar="hide";
$exportar="no-descargar";
if($resultado==""){
    ?>
    <a ng-click="reload()">
    <?php
}
foreach ($usuarios as $llave => $valores1) {
    switch ($valores1) {
        case "1":
            $crear = "";
            break;
        case "2":
            $editar = "";
            break;
        case "3":
            $eliminar = "";
            break;
    }
}

?>
<div class="btn-group <?php echo $crear; ?>">
    <button class="crearItemCompuesto btn-sm btn-dark "  href="javascript:;"><i class="fa fa-plus"></i> Item-Compuesto</button>
</div>
<table class="table table-dynamic table-item-compuesto " data-table-name="item" id="table-item-compuesto" >
    <thead>
        <tr>
            <th>Id_item_compuesto</th>
            <th>id_item</th>
            <th>Id_compuesto </th>
            <th>Nombre Item </th>
            <th>Nombre Compuesto</th>
            <th>Cantidad</th>
            <th>Estado</th>
            <th class="text-right">Editar</th>
        </tr>
    </thead>
</table>
<div class="modal-footer text-center">
    <button type="button" class="btn btn-default btn-embossed regresar" data-dismiss="modal">Salir</button>
</div>
<?php
$transport->close();
?>
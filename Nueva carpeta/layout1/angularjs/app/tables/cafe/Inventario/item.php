<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
include("../../../directorio.php");

$re = $client->getPerfilRol($_SESSION["id"], "89");
$resultado = "" . $re;
$usuarios = explode(',', $resultado);
$crear = "hide";
$editar = "hide";
$eliminar = "hide";
$exportar = "no-descargar";
if ($resultado == "") {
?>
    <a href="#" ng-click="reload()"></a>
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
        case "6":
            $exportar = "";
            break;
    }
}

?>
<div class="btn-group <?php echo $crear; ?>">
    <button class="crearItem btn-sm btn-dark " href="javascript:;"><i class="fa fa-plus"></i> Item</button>
</div>
<table class="table table-dynamic table-item <?php echo $exportar; ?>" data-table-name="item" id="table-item">
    <thead>
        <tr>
            <th>Id_item</th>
            <th>Id_grupo</th>
            <th>Nombre_grupo </th>
            <th>Nombre </th>
            <th>Descripción</th>
            <th>Precio ($)</th>
            <th>Precio Ultima Compra($)</th>
            <th>Total ($)</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Medida</th>
            <th>Estado</th>
            <th>Estado_venta</th>
            <th class="text-right">Editar</th>
        </tr>
    </thead>
</table>
<?php
$transport->close();
?>
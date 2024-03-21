
<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
include("../../../directorio.php");

$re = $client->getPerfilRol($_SESSION["id"], "87");
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
    <button class="crearProveedor btn-sm btn-dark "  href="javascript:;"><i class="fa fa-plus"></i> Proveedor</button>
</div>
<table class="table table-dynamic table-proveedor <?php echo $exportar; ?>" data-table-name="proveedor" id="table-proveedor" style="table-layout: fixed;">
    <thead>
        <tr>
            <th>Id_proveedor</th>
            <th>Nombre </th>
            <th>Ruc </th>
            <th>Dirección </th>
            <th>Correo </th>
            <th>Descripción </th>
            <th>Estado</th>
            <th class="text-right">Editar</th>
        </tr>
    </thead>
</table>
<?php
$transport->close();
?>
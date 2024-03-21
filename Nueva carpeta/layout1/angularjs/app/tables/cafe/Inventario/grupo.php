<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
include("../../../directorio.php");
$re = $client->getPerfilRol($_SESSION["id"], "86");
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
    <button class="crearGrupo btn-sm btn-dark " href="javascript:;"><i class="fa fa-plus"></i> Grupo</button>
</div>
<table class="table table-dynamic table-grupo <?php echo $exportar; ?>" data-table-name="grupo" id="table-grupo" style="table-layout: fixed;">
    <thead>
        <tr>
            <th>Id_grupo</th>
            <th>Nombre </th>
            <th>Estado</th>
            <th class="text-right">Editar</th>
        </tr>
    </thead>
</table>
<?php
$transport->close();
?>
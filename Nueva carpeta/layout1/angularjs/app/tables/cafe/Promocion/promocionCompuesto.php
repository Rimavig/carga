<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
include("../../../directorio.php");
$re = $client->getPerfilRol($_SESSION["id"], "95");
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
    <button class="crearPromocionCompuesto btn-sm btn-dark " href="javascript:;"><i class="fa fa-plus"></i> Compuesto</button>
</div>
<table class="table table-dynamic table-promocionCompuesto   <?php echo $exportar; ?>" data-table-name="promocionCompuesto" id="table-promocionCompuesto">
    <thead>
        <tr>
            <th>Id_promocion</th>
            <th>Promoción </th>
            <th>Nombre Compuesto </th>
            <th>Tipo </th>
            <th>Descuento </th>
            <th>Precio </th>
            <th>Precio Compuesto </th>
            <th>Precio Final </th>
            <th>Fecha_inicio </th>
            <th>Fecha_final </th>
            <th>Estado</th>
            <th class="text-right">Editar</th>
        </tr>
    </thead>
</table>
<?php
$transport->close();
?>
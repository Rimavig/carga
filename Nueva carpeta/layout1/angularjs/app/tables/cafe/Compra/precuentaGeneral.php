
<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
include("../../../directorio.php");

$re = $client->getPerfilRol($_SESSION["id"], "93");
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
    <button class="crearPrecuentaGeneral btn-sm btn-dark "  href="javascript:;"><i class="fa fa-plus"></i> Precuenta General</button>
</div>
<table class="table table-dynamic table-precuentaGeneral <?php echo $exportar; ?>" data-table-name="precuentaGeneral" id="table-precuentaGeneral" >
    <thead>
        <tr>
            <th>Id_precuenta_general</th>
            <th>Cliente </th>
            <th>Usuario </th>
            <th>Efectivo </th>
            <th>Tarjeta </th>
            <th>Donacion </th>
            <th>Descuento </th>
            <th>Dolares Canjeados </th>
            <th>Total </th>
            <th>Total Pagado </th>
            <th>Fecha creación </th>
            <th>Estado</th>
            <th class="text-right">Editar</th>
        </tr>
    </thead>
</table>
<?php
$transport->close();
?>
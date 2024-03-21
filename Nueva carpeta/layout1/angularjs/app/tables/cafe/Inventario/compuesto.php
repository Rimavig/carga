<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
include("../../../directorio.php");
$re = $client->getPerfilRol($_SESSION["id"], "90");
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
        <button class="crearCompuesto btn-sm btn-dark " href="javascript:;"><i class="fa fa-plus"></i> Compuesto</button>
    </div>
    <table class="table table-dynamic table-compuesto <?php echo $exportar; ?> " data-table-name="compuesto" id="table-compuesto">
        <thead>
            <tr>
                <th>Id_compuesto</th>
                <th>Id_grupo</th>
                <th>Nombre_grupo </th>
                <th>Nombre </th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Tipo</th>
                <th>Cantidad</th>
                <th>Estado</th>
                <th>Estado_venta</th>
                <th class="text-right">Editar</th>
            </tr>
        </thead>
    </table>
    <?php
    $transport->close();
    ?>
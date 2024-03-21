<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
include("../../../directorio.php");

$re = $client->getPerfilRol($_SESSION["id"], "91");
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
    <div class="row text-center" style="padding-bottom: 40px;">
        <div class="col-lg-3 col-md-4 col-xs-6 text-center">
            <button class="crearIngresoItem btn-sm btn-dark " href="javascript:;"><i class="fa fa-plus"></i> Item</button>
            <button class="crearIngresoCompuesto btn-sm btn-dark " href="javascript:;"><i class="fa fa-plus"></i> Compuesto</button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 text-center">
            <label for="field-1" class="control-label">Fecha Inicial</label>
            <input type="date" name="fechaII" class="form-control " id="fechaII" style="padding: 0px 5px; width:150px;" value="<?php echo date("Y-m-d", strtotime(date('Y-m-d') . "- 1 month")); ?>" placeholder="07/08/1995" required>
        </div>
        <div class="col-lg-3 col-md-4  col-xs-6 text-center">
            <label for="field-1" class="control-label">Fecha Final</label>
            <input type="date" name="fechaFI" class="form-control" id="fechaFI" style="padding: 0px 5px; width:150px;" value="<?php echo date("Y-m-d", strtotime("+7 day")); ?>" placeholder="07/08/1995" required>
        </div>
        <div class="col-md-2  col-xs-12 ">
            <button type="button" class="btn btn-primary btn-embossed bnt-square buscarI" style="padding: 0px 10px;"> Buscar</button>
        </div>
    </div>
    <table class="table table-dynamic table-ingreso <?php echo $exportar; ?> " data-table-name="ingreso" data-table-fechaf="<?php echo date("Y-m-d", strtotime("+7 day")); ?>"  data-table-fechai="<?php echo date("Y-m-d", strtotime(date('Y-m-d')."- 1 month")); ?>" id="table-ingreso">
        <thead>
            <tr>
                <th>Id_Ingreso</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Descripción </th>
                <th>Cantidad </th>
                <th>Fecha Ingreso</th>
                <th class="text-right">Editar</th>
            </tr>
        </thead>
    </table>
    <?php
    $transport->close();
    ?>
<?php
include("../../../conect_cafe.php");
include("../../../autenticacion.php");
include("../../../directorio.php");
include("../../../conect.php");
$CVStockProveedor = "hide";
$CVStockIngreso = "hide";
$CVStockEgreso = "hide";
$CVStockOrdenCompra = "hide";
$txt1 = "";
$txt2 = "";
$txt3 = "";
$txt4 = "";
$re = $client->getAllPerfilRol($_SESSION["id"]);
$resultado = "" . $re;
$usuarios = explode(',', $resultado);
$txt = 'active="isActive" ng-init="isActive = true"';
$band = true;
foreach ($usuarios as $llave => $valores1) {
    if ($valores1 === "87") {
        $CVStockProveedor = "";
        $modulo5 = false;
        if ($band) {
            $txt1 = $txt;
            $band = false;
        }
    }
    if ($valores1 === "91") {
        $CVStockIngreso = "";
        $modulo5 = false;
        if ($band) {
            $txt2 = $txt;
            $band = false;
        }
    }
    if ($valores1 === "92") {
        $CVStockEgreso = "";
        $modulo5 = false;
        if ($band) {
            $txt3 = $txt;
            $band = false;
        }
    }
    if ($valores1 === "93") {
        $CVStockOrdenCompra = "";
        $modulo5 = false;
        if ($band) {
            $txt4 = $txt;
            $band = false;
        }
    }
}
?>
<div>
    <div class="row  ">
        <div class="col-lg-12 portlets">
            <div class="panel ">
                <div class="panel-header panel-controls">
                    <h3><i class="fa fa-table"></i>VENTAS-FACTURACIÓN</strong> </h3>
                </div>

                <div class="panel-content pagination2 table-responsive inventario">
                    <tabset class="tab-fade-in">
                        <tab class="<?php echo $CVStockOrdenCompra; ?>" <?php echo $txt1; ?>>
                            <tab-heading>
                                FACTURACIÓN GENERAL (PENDIENTE)
                            </tab-heading>
                            <div class="cafe_precuentaGeneral" id="cafe_precuentaGeneral">
                            </div>
                        </tab>
                        <tab class="<?php echo $CVStockProveedor; ?>" <?php echo $txt2; ?>>
                            <tab-heading>
                                FACTURACIÓN GENERAL (ACTIVAS)
                            </tab-heading>
                            <div class="cafe_precuentaGeneralA" id="cafe_precuentaGeneralA">
                            </div>
                        </tab>

                    </tabset>

                </div>
                <div class="panel-content infoG hide">

                </div>

            </div>

        </div>

    </div>

    <div class="modal fade  MCafe" data-keyboard="false" data-backdrop="static" id="MCafe" aria-hidden="true">
    </div>
    <div class="alerta" id="alerta">
    </div>
    <div class="footer">
        <p class="copyright">
            <span>Copyright © 2022 </span><span> Teatro Sanchez Aguilar </span><span>- Powered by Vion IoT Solutions. All rights reserved.</span>
        </p>
    </div>
</div>
<?php
$transport10->close();
?>
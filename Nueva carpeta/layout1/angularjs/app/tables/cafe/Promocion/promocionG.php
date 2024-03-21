
<?php
include ("../../../conect_cafe.php");
include ("../../../autenticacion.php");
include ("../../../directorio.php");
include("../../../conect.php");
$CVPromocionesGeneral="hide";
$CVPromocionesItem="hide";
$CVPromocionesCompuesto="hide";
$txt1="";
$txt2="";
$txt3="";
$re = $client->getAllPerfilRol($_SESSION["id"]);
$resultado = "".$re;
$usuarios= explode(',',$resultado);
$txt='active="isActive" ng-init="isActive = true"';
$band=true;
foreach($usuarios as $llave => $valores1) { 
    if($valores1==="88"){
        $CVPromocionesGeneral="";
        $modulo5=false;
        if($band){
            $txt1=$txt;
            $band=false;
        }
    }
    if($valores1==="94"){
        $CVPromocionesItem="";
        $modulo5=false;
        if($band){
            $txt2=$txt;
            $band=false;
        }
    }
    if($valores1==="95"){
        $CVPromocionesCompuesto="";
        $modulo5=false;
        if($band){
            $txt3=$txt;
            $band=false;
        }
    }
}   
?>
<div>
    <div class="row  " >
        <div class="col-lg-12 portlets">
            <div class="panel ">
                <div class="panel-header panel-controls">
                    <h3><i class="fa fa-table"></i>PROMOCIONES</strong> </h3>
                </div>
                
                <div class="panel-content pagination2 table-responsive inventario">
                    <tabset class="tab-fade-in" >
                        <tab class="<?php echo $CVPromocionesGeneral; ?>"  <?php echo $txt1; ?>>
                            <tab-heading>
                               Promociones Generales
                            </tab-heading>
                            <div class="cafe_promocion" id="cafe_promocion">

                            </div>
                        </tab>
                        <tab class="<?php echo $CVPromocionesItem; ?>"  <?php echo $txt2; ?>> 
                            <tab-heading>
                                Promociones Item
                            </tab-heading>
                            <div class="cafe_promocionItem" id="cafe_promocionItem">

                            </div>
                        </tab>
                        <tab class="<?php echo $CVPromocionesCompuesto; ?>"  <?php echo $txt3; ?>> 
                            <tab-heading>
                                Promociones Compuesto
                            </tab-heading>
                            <div class="cafe_promocionCompuesto" id="cafe_promocionCompuesto">

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
    <div class="alerta" id="alerta" >
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

<?php
include ("../../../conect_cafe.php");
include ("../../../autenticacion.php");
include ("../../../directorio.php");
include("../../../conect.php");
$CVInventarioGrupo="hide";
$CVInventarioItem="hide";
$CVInventarioCompuesto="hide";
$txt1="";
$txt2="";
$txt3="";
$re = $client->getAllPerfilRol($_SESSION["id"]);
$resultado = "".$re;
$usuarios= explode(',',$resultado);
$txt='active="isActive" ng-init="isActive = true"';
$band=true;
foreach($usuarios as $llave => $valores1) { 
    if($valores1==="86"){
        $CVInventarioGrupo="";
        $modulo5=false;
        if($band){
            $txt1=$txt;
            $band=false;
        }
    }
    if($valores1==="89"){
        $CVInventarioItem="";
        $modulo5=false;
        if($band){
            $txt2=$txt;
            $band=false;
        }
    }
    if($valores1==="90"){
        $CVInventarioCompuesto="";
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
                    <h3><i class="fa fa-table"></i>INVENTARIO</strong> </h3>
                </div>
                
                <div class="panel-content pagination2 table-responsive inventario">
                    <tabset class="tab-fade-in" >
                    <tab class="<?php echo $CVInventarioGrupo; ?>"  <?php echo $txt1; ?>>
                            <tab-heading>
                               Grupo
                            </tab-heading>
                            <div class="cafe_grupo" id="cafe_grupo">

                            </div>
                        </tab>
                        <tab class="<?php echo $CVInventarioItem; ?>"  <?php echo $txt2; ?>>
                            <tab-heading>
                               Item
                            </tab-heading>
                            <div class="cafe_item" id="cafe_item">

                            </div>
                        </tab>
                        <tab class="<?php echo $CVInventarioCompuesto; ?>"  <?php echo $txt3; ?>> 
                            <tab-heading>
                                Compuesto
                            </tab-heading>
                            <div class="cafe_compuesto" id="cafe_compuesto">
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
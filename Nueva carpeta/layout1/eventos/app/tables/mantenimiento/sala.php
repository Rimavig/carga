<?php
include ("../../conect.php");
include ("../../autenticacion.php");
$tipo="Sala";
$tipo2="sala";
$nombreT="la sala";
$re = $client->getPerfilRol($_SESSION["id"],"10");
$resultado = "".$re;
$usuarios= explode(',',$resultado);
$crear="hide";
$exportar="no-descargar";
if($resultado==""){
    ?>
    <a ng-click="reload()">
    <?php
}
foreach($usuarios as $llave => $valores1) {
    if($valores1==="1"){
        $crear="";
    }
    if($valores1==="6"){
        $exportar="";
    }
}
?>
<div>
    <div class="row">
        <div class="col-lg-12 portlets">
            <div class="panel">
                <div class="panel-header panel-controls">
                    <h3><i class="fa fa-table"></i> Tabla de <strong><?php echo $tipo; ?></strong> </h3>
                </div>
                <div class="panel-content pagination2 table-responsive">
                    <input type="text" name="tipo" id="tipo" class="esconder"  value="<?php echo $tipo2; ?>" disabled>
                    <input type="text" name="nombreT" id="nombreT" class="esconder"  value="<?php echo $nombreT; ?>" disabled> 
                    <table class="table filter-footer sala_data <?php echo $exportar; ?> table-dynamic table-tools " data-table-name="<?php echo $tipo; ?>" id="table-editable">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombres</th>
                                <th>Sala</th>
                                <th>Estado</th>
                                <th class="text-right">Editar</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade categoria"  data-keyboard="false" data-backdrop="static" id="categoria" aria-hidden="true">
    </div>
    <div class="modal fade Ecategoria"  data-keyboard="false" data-backdrop="static" id="Ecategoria" aria-hidden="true">
    </div>
    <div class="modal fade verMapa" id="verMapa" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-mantenimiento">
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12">
                        <button data-dismiss="modal" aria-hidden="true">
                            <div class="fileinput fileinput-new" data-provides="fileinput">
                                <div class="fileinput-new thumbnail">
                                    <img id="imagen1" data-src="" src="" class="img-responsive" alt="gallery 3">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="alerta" id="alerta" >
    </div>
    <div class="footer">
        <p class="copyright">
            <span>Copyright © 2022 </span><span> VION IoT Solutions</span>.<span>Todos los derechos reservados.</span>
        </p>
    </div>
</div>
<?php
include ("../../../conect_cafe.php");
include ("../../../autenticacion.php");
$var1="";
$crear = "";
if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $grupoT->id_grupo=$var1;
    $grupoG = $client10->getGrupo($busquedaT,$grupoT);
}

?>
<div class="modal-dialog modal-mantenimiento ">
    <div class="modal-content  ">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button>
            <h4 class="modal-title"><strong>Editar</strong> Grupo</h4>
            <input type="text"  id="EidGrupo" class="esconder"  value="<?php echo $var1; ?>" disabled>    

        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="control-label">Nombre</label>
                        <input class="form-control form-white" id="nombreG" placeholder="Ingrese nombre" value="<?php echo $grupoG->nombre; ?>" type="text" name="nombre" />
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer text-center">
            <button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger btn-embossed editar_grupo <?php echo $crear; ?>">Editar</button>
        </div>
    </div>
</div>
<?php
$transport10->close();
?>
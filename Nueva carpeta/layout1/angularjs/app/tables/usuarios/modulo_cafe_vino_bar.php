<?php
include ("../../conect.php");
include ("../../autenticacion.php");
$lista=array("CVIG","CVII","CVIC","CVSP","CVSI","CVSE","CVSC","CVPG","CVPI","CVPC");
foreach($lista as $llave => $valores) {
    ${"crear".$valores}="";
    ${"editar".$valores}="";
    ${"eliminar".$valores}="";
    ${"estado".$valores}="";
    ${"exportar".$valores}="";
}

if (isset($_POST["var1"])) {
    $var1 = $_POST['var1'];
    $re = $client->getPerfil($var1);
    $resultado = "".$re;
    $usuarios= explode(';;',$resultado);
    foreach($usuarios as $llave => $valores) {
        $usuario =explode(':',$valores);
        $tipo=""; 
        if (isset($usuario[1])) {
            if($usuario[0]==="86"){
                $tipo="CVIG";
            }
            if($usuario[0]==="89"){
                $tipo="CVII";
            }
            if($usuario[0]==="90"){
                $tipo="CVIC";
            }
            if($usuario[0]==="87"){
                $tipo="CVSP";
            }
            if($usuario[0]==="91"){
                $tipo="CVSI";
            }
            if($usuario[0]==="92"){
                $tipo="CVSE";
            }
            if($usuario[0]==="93"){
                $tipo="CVSC";
            }
            if($usuario[0]==="88"){
                $tipo="CVPG";
            }
            if($usuario[0]==="94"){
                $tipo="CVPI";
            }
            if($usuario[0]==="95"){
                $tipo="CVPC";
            }
            if($tipo!=""){
                $accion =explode(',',$usuario[1]);
                foreach($accion as $llave => $valores1) {
                    if($valores1==="1"){
                        ${"crear".$tipo}="checked";
                    }
                    if($valores1==="2"){
                        ${"editar".$tipo}="checked";
                    }
                    if($valores1==="3"){
                        ${"eliminar".$tipo}="checked";
                    }
                    if($valores1==="5"){
                        ${"estado".$tipo}="checked";
                    }
                    if($valores1==="6"){
                        ${"exportar".$tipo}="checked";
                    }
                }   
            }
             
        }   
    } 
}
?>
<div class="panel-body">
<div class="row">  
    <div class="col-md-2 col-sm-3 col-xs-6" style ="margin-bottom: 30px!important;">
        <div class="form-group">
            <p><label><input type="checkbox" class="CVInventarioGrupo" id="CVInventarioGrupo" data-checkbox="icheckbox_minimal-red"><strong>INVENTARIO GRUPO</strong></p>
            <div class="input-group">
                <div class="icheck-list">
                    <label><input type="checkbox" id="exportarCVIG" <?php echo $exportarCVIG; ?> data-checkbox="icheckbox_flat-blue"> Exportar</label>
                    <label><input type="checkbox" id="crearCVIG" <?php echo $crearCVIG; ?> data-checkbox="icheckbox_flat-blue"> Crear</label>
                    <label><input type="checkbox" id="editarCVIG" <?php echo $editarCVIG; ?> data-checkbox="icheckbox_flat-blue"> Editar</label>
                    <label> <input type="checkbox" id="eliminarCVIG" <?php echo $eliminarCVIG; ?> data-checkbox="icheckbox_flat-blue"> Eliminar</label>
                    <label> <input type="checkbox" id="estadoCVIG" <?php echo $estadoCVIG; ?> data-checkbox="icheckbox_flat-blue"> Estado (ON/OFF)</label>
                </div>
            </div>
        </div>       
    </div>
    <div class="col-md-2 col-sm-3 col-xs-6" style ="margin-bottom: 30px!important;">
        <div class="form-group">
            <p><label><input type="checkbox" class="CVInventarioItem" id="CVInventarioItem" data-checkbox="icheckbox_minimal-red"><strong>INVENTARIO ITEM</strong></p>
            <div class="input-group">
                <div class="icheck-list">
                    <label><input type="checkbox" id="exportarCVII" <?php echo $exportarCVII; ?> data-checkbox="icheckbox_flat-blue"> Exportar</label>
                    <label><input type="checkbox" id="crearCVII" <?php echo $crearCVII; ?> data-checkbox="icheckbox_flat-blue"> Crear</label>
                    <label><input type="checkbox" id="editarCVII" <?php echo $editarCVII; ?> data-checkbox="icheckbox_flat-blue"> Editar</label>
                    <label> <input type="checkbox" id="eliminarCVII" <?php echo $eliminarCVII; ?> data-checkbox="icheckbox_flat-blue"> Eliminar</label>
                    <label> <input type="checkbox" id="estadoCVII" <?php echo $estadoCVII; ?> data-checkbox="icheckbox_flat-blue"> Estado (ON/OFF)</label>
                </div>
            </div>
        </div>       
    </div>
    <div class="col-md-2 col-sm-3 col-xs-6" style ="margin-bottom: 30px!important;">
        <div class="form-group">
            <p><label><input type="checkbox" class="CVInventarioCompuesto" id="CVInventarioCompuesto" data-checkbox="icheckbox_minimal-red"><strong>INVENTARIO COMPUESTO</strong></p>
            <div class="input-group">
                <div class="icheck-list">
                    <label><input type="checkbox" id="exportarCVIC" <?php echo $exportarCVIC; ?> data-checkbox="icheckbox_flat-blue"> Exportar</label>
                    <label><input type="checkbox" id="crearCVIC" <?php echo $crearCVIC; ?> data-checkbox="icheckbox_flat-blue"> Crear</label>
                    <label><input type="checkbox" id="editarCVIC" <?php echo $editarCVIC; ?> data-checkbox="icheckbox_flat-blue"> Editar</label>
                    <label> <input type="checkbox" id="eliminarCVIC" <?php echo $eliminarCVIC; ?> data-checkbox="icheckbox_flat-blue"> Eliminar</label>
                    <label> <input type="checkbox" id="estadoCVIC" <?php echo $estadoCVIC; ?> data-checkbox="icheckbox_flat-blue"> Estado (ON/OFF)</label>
                </div>
            </div>
        </div>       
    </div>
    <div class="col-md-2 col-sm-3 col-xs-6" style ="margin-bottom: 30px!important;">
        <div class="form-group">
            <p><label><input type="checkbox" class="CVStockProveedor" id="CVStockProveedor" data-checkbox="icheckbox_minimal-red"><strong>STOCK PROVEEDORES</strong></p>
            <div class="input-group">
                <div class="icheck-list">
                    <label><input type="checkbox" id="exportarCVSP" <?php echo $exportarCVSP; ?> data-checkbox="icheckbox_flat-blue"> Exportar</label>
                    <label><input type="checkbox" id="crearCVSP" <?php echo $crearCVSP; ?> data-checkbox="icheckbox_flat-blue"> Crear</label>
                    <label><input type="checkbox" id="editarCVSP" <?php echo $editarCVSP; ?> data-checkbox="icheckbox_flat-blue"> Editar</label>
                    <label> <input type="checkbox" id="eliminarCVSP" <?php echo $eliminarCVSP; ?> data-checkbox="icheckbox_flat-blue"> Eliminar</label>
                    <label> <input type="checkbox" id="estadoCVSP" <?php echo $estadoCVSP; ?> data-checkbox="icheckbox_flat-blue"> Estado (ON/OFF)</label>
                </div>
            </div>
        </div>       
    </div>
    <div class="col-md-2 col-sm-3 col-xs-6" style ="margin-bottom: 30px!important;">
        <div class="form-group">
            <p><label><input type="checkbox" class="CVStockIngreso" id="CVStockIngreso" data-checkbox="icheckbox_minimal-red"><strong>STOCK INGRESO</strong></p>
            <div class="input-group">
                <div class="icheck-list">
                    <label><input type="checkbox" id="exportarCVSI" <?php echo $exportarCVSI; ?> data-checkbox="icheckbox_flat-blue"> Exportar</label>
                    <label><input type="checkbox" id="crearCVSI" <?php echo $crearCVSI; ?> data-checkbox="icheckbox_flat-blue"> Crear</label>
                    <label> <input type="checkbox" id="eliminarCVSI" <?php echo $eliminarCVSI; ?> data-checkbox="icheckbox_flat-blue"> Eliminar</label>
                </div>
            </div>
        </div>       
    </div>
    
    <div class="col-md-2 col-sm-3 col-xs-6" style ="margin-bottom: 30px!important;">
        <div class="form-group">
            <p><label><input type="checkbox" class="CVStockEgreso" id="CVStockEgreso" data-checkbox="icheckbox_minimal-red"><strong>STOCK EGRESO(MERMAS)</strong></p>
            <div class="input-group">
                <div class="icheck-list">
                    <label><input type="checkbox" id="exportarCVSE" <?php echo $exportarCVSE; ?> data-checkbox="icheckbox_flat-blue"> Exportar</label>
                    <label><input type="checkbox" id="crearCVSE" <?php echo $crearCVSE; ?> data-checkbox="icheckbox_flat-blue"> Crear</label>
                    <label> <input type="checkbox" id="eliminarCVSE" <?php echo $eliminarCVSE; ?> data-checkbox="icheckbox_flat-blue"> Eliminar</label>
                </div>
            </div>
        </div>       
    </div>
    <div class="col-md-2 col-sm-3 col-xs-6" style ="margin-bottom: 30px!important;">
        <div class="form-group">
            <p><label><input type="checkbox" class="CVStockOrdenCompra" id="CVStockOrdenCompra" data-checkbox="icheckbox_minimal-red"><strong>STOCK EGRESO(MERMAS)</strong></p>
            <div class="input-group">
                <div class="icheck-list">
                    <label><input type="checkbox" id="exportarCVSC" <?php echo $exportarCVSC; ?> data-checkbox="icheckbox_flat-blue"> Exportar</label>
                    <label><input type="checkbox" id="crearCVSC" <?php echo $crearCVSC; ?> data-checkbox="icheckbox_flat-blue"> Crear</label>
                    <label><input type="checkbox" id="editarCVSC" <?php echo $editarCVSC; ?> data-checkbox="icheckbox_flat-blue"> Editar</label>
                    <label> <input type="checkbox" id="eliminarCVSC" <?php echo $eliminarCVSC; ?> data-checkbox="icheckbox_flat-blue"> Eliminar</label>
                </div>
            </div>
        </div>       
    </div>
</div>
<div class="row">  
    <div class="col-md-2 col-sm-3 col-xs-6" style ="margin-bottom: 30px!important;">
        <div class="form-group">
            <p><label><input type="checkbox" class="CVPromocionesGeneral" id="CVPromocionesGeneral" data-checkbox="icheckbox_minimal-red"><strong>PROMOCIONES GENERALES</strong></p>
            <div class="input-group">
                <div class="icheck-list">
                <label><input type="checkbox" id="exportarCVPG" <?php echo $exportarCVPG; ?>  data-checkbox="icheckbox_flat-blue"> Exportar</label>
                    <label><input type="checkbox" id="crearCVPG" <?php echo $crearCVPG; ?>  data-checkbox="icheckbox_flat-blue"> Crear</label>
                    <label><input type="checkbox" id="editarCVPG" <?php echo $editarCVPG; ?>  data-checkbox="icheckbox_flat-blue"> Editar</label>
                    <label> <input type="checkbox" id="eliminarCVPG" <?php echo $eliminarCVPG; ?>  data-checkbox="icheckbox_flat-blue"> Eliminar</label>
                    <label> <input type="checkbox" id="estadoCVPG" <?php echo $estadoCVPG; ?>  data-checkbox="icheckbox_flat-blue"> Estado (ON/OFF)</label>
                </div>
            </div>
        </div>       
    </div>
    <div class="col-md-2 col-sm-3 col-xs-6" style ="margin-bottom: 30px!important;">
        <div class="form-group">
            <p><label><input type="checkbox" class="CVPromocionesItem" id="CVPromocionesItem" data-checkbox="icheckbox_minimal-red"><strong>PROMOCIONES ITEMS</strong></p>
            <div class="input-group">
                <div class="icheck-list">
                    <label><input type="checkbox" id="exportarCVPI" <?php echo $exportarCVPI; ?> data-checkbox="icheckbox_flat-blue"> Exportar</label>
                    <label><input type="checkbox" id="crearCVPI" <?php echo $crearCVPI; ?> data-checkbox="icheckbox_flat-blue"> Crear</label>
                    <label><input type="checkbox" id="editarCVPI" <?php echo $editarCVPI; ?> data-checkbox="icheckbox_flat-blue"> Editar</label>
                    <label> <input type="checkbox" id="eliminarCVPI" <?php echo $eliminarCVPI; ?> data-checkbox="icheckbox_flat-blue"> Eliminar</label>
                    <label> <input type="checkbox" id="estadoCVPI" <?php echo $estadoCVPI; ?> data-checkbox="icheckbox_flat-blue"> Estado (ON/OFF)</label>
                </div>
            </div>
        </div>       
    </div>
    <div class="col-md-2 col-sm-3 col-xs-6" style ="margin-bottom: 30px!important;">
        <div class="form-group">
            <p><label><input type="checkbox" class="CVPromocionesCompuesto" id="CVPromocionesCompuesto" data-checkbox="icheckbox_minimal-red"><strong>PROMOCIONES COMPUESTOS</strong></p>
            <div class="input-group">
                <div class="icheck-list">
                <label><input type="checkbox" id="exportarCVPC" <?php echo $exportarCVPC; ?> data-checkbox="icheckbox_flat-blue"> Exportar</label>
                    <label><input type="checkbox" id="crearCVPC" <?php echo $crearCVPC; ?> data-checkbox="icheckbox_flat-blue"> Crear</label>
                    <label><input type="checkbox" id="editarCVPC" <?php echo $editarCVPC; ?> data-checkbox="icheckbox_flat-blue"> Editar</label>
                    <label> <input type="checkbox" id="eliminarCVPC" <?php echo $eliminarCVPC; ?> data-checkbox="icheckbox_flat-blue"> Eliminar</label>
                    <label> <input type="checkbox" id="estadoCVPC" <?php echo $estadoCVPC; ?> data-checkbox="icheckbox_flat-blue"> Estado (ON/OFF)</label>
                </div>
            </div>
        </div>       
    </div>
</div>
</div>
<?php
$transport->close();
?>
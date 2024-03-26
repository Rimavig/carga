<?php
include("../../../autenticacion.php");
include("../../../conect_cafe.php");
$var1 = "";
$totalPG = "0";
$saldo = "0";
$crear = "";
$bancoG = $client10->getAllBanco($busquedaT, $bancoT);
$tarjetaG = $client10->getAllTarjeta($busquedaT, $tarjetaT);
if (isset($_GET["id"])) {
    $var1 = $_GET['id'];
    $precuentaT->id_precuenta = $var1;
    $precuentaT->tipo = "G";
    $busquedaT->tipo = "simple";
    $precuentaG = $client10->getPrecuenta($busquedaT, $precuentaT);
    $totalPG =$precuentaG->total+$precuentaG->donacion-$precuentaG->canjeados-$precuentaG->descuento;
    $saldo =$totalPG-$precuentaG->total_pagado;
    if ($precuentaG->estado === "A") {
        $crear = "hide";
    }
}
?>
<div class="row">

    <div class="col-md-3">
        <div class="form-group">
            <label for="field-3" class="control-label">SubTotal</label>
            <input type="text" id="subtotal" value="<?php echo  round($precuentaG->total, 3);  ?>" class="form-control" placeholder="0.0" minlength="5" disabled>
        </div>
    </div>
    <div class="col-md-3">
        <div class="form-group">
            <label for="field-3" class="control-label">Donación</label>
            <input type="text" id="donacionG" value="<?php echo  round($precuentaG->donacion, 3);   ?>" class="form-control" placeholder="0.0" minlength="5" disabled>
        </div>
    </div>
    <div class="col-md-3">
        <div class="form-group">
            <label for="field-3" class="control-label">Dolares Canjeados</label>
            <input type="text" id="dolaresG" value="<?php echo  round($precuentaG->canjeados, 3);  ?>" class="form-control" placeholder="0.0" minlength="5" disabled>
        </div>
    </div>
    <div class="col-md-3">
        <div class="form-group">
            <label for="field-3" class="control-label">Descuento Total</label>
            <input type="text" id="descuentoT" value="<?php echo  round($precuentaG->descuento, 3);  ?>" class="form-control" placeholder="0.0" minlength="5" disabled>
        </div>
    </div>
    <div class="col-md-3">
        <div class="form-group">
            <label for="field-3" class="control-label">Total a Pagar</label>
            <input type="text" id="totalG" value="<?php echo  round($totalPG, 3);  ?>" class="form-control" placeholder="0.0" minlength="5" disabled>
        </div>
    </div>
    <div class="col-md-3">
        <div class="form-group">
            <label for="field-1" class="control-label">Total Pagado</label>
            <input type="text" id="totalPG" value="<?php echo round($precuentaG->total_pagado, 3);  ?>" class="form-control" placeholder="0.0" minlength="5" disabled>
        </div>
    </div>
    <div class="col-md-3">
        <div class="form-group">
            <label for="field-1" class="control-label">Saldo</label>
            <input type="text" id="saldo" value="<?php echo  round($saldo, 3) ; ?>" class="form-control" placeholder="0.0" minlength="5" disabled>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-3 <?php echo $crear; ?>">
        <div class="form-group">
            <label for="field-1" class="control-label">Forma de Pago</label>
            <select class="form-control" id="FpagoG" style="width:100%;">
                <option value="efectivo" selectec>Efectivo</option>
                <option value="tarjetaD">Tarjeta Débito</option>
                <option value="tarjetaC">Tarjeta Crédito</option>
            </select>

        </div>
    </div>
    <div class="col-md-3 Ttarjeta hide">
        <div class="form-group">
            <label for="field-1" class="control-label">Tipo de Tarjeta</label>
            <select class="form-control" style="width:100%;" id="Ttarjeta">
                <?php foreach ($tarjetaG as $key) :
                    if ($key->estado === "A") {
                ?>
                        <option value="<?php echo $key->id_tarjeta ?>" >
                            <?php echo $key->nombre ?>
                        </option>
                <?php
                    }

                endforeach; ?>
            </select>
        </div>
    </div>
    <div class="col-md-3 Tbanco hide">
        <div class="form-group">
            <label for="field-1" class="control-label">Banco</label>
            <select class="form-control" style="width:100%;" id="Tbanco">
            <?php foreach ($bancoG as $key) :
                    if ($key->estado === "A") {
                ?>
                        <option value="<?php echo $key->id_banco ?>" >
                            <?php echo $key->nombre ?>
                        </option>
                <?php
                    }

                endforeach; ?>
            </select>
        </div>
    </div>
    <div class="col-md-3 lote hide">
        <div class="form-group">
            <label for="field-1" class="control-label">Lote</label>
            <input type="text" name="" id="lote" class="form-control" placeholder="" minlength="5">
        </div>
    </div>
    <div class="col-md-3 <?php echo $crear; ?>">
        <div class="form-group">
            <label for="field-1" class="control-label">Monto</label>
            <input class="form-control input-sm" id="monto" type="number" value="0" name="duracionE" placeholder="">
        </div>
    </div>
    <div class="col-md-1">
        <div class="form-group">
            <label for="field-1" class="control-label"></label>
            <a type="submit" class="agregarPago btn btn-primary btn-embossed bnt-square <?php echo $crear; ?>"><i class="fa fa-plus"></i> Agregar Pago</a>
        </div>
    </div>
</div>


<?php
$transport10->close();
?>
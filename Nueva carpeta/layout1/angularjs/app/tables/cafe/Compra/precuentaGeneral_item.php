<?php
include("../../../conect_cafe.php");
include("../../../conect.php");
include("../../../autenticacion.php");
include("../../../directorio.php");
include("../../../conect_taquilla.php");


$re = $client3->getPerfilRol($_SESSION["id"], "40");
$resultado = "" . $re;
$usuarios = explode(',', $resultado);
$exportar = "no-descargar";

foreach ($usuarios as $llave => $valores1) {
    if ($valores1 === "6") {
        $exportar = "";
    }
}
$re = $client3->getPerfilRol($_SESSION["id"], "2");
$resultado = "" . $re;
$usuarios1 = explode(',', $resultado);
$crear1 = "";
$exportar1 = "no-descargar";
foreach ($usuarios1 as $llave => $valores1) {
    if ($valores1 === "1") {
        $crear1 = "";
    }
    if ($valores1 === "6") {
        $exportar1 = "";
    }
}
?>


<div class="row CompraT  " id="CompraT">
    <div class="col-lg-12 portlets">
        <div class="panel">
            <div class="panel-content pagination2 ">
                <div class="col-md-10">
                    <div class="btn-group">
                        <button class="seleccionarG btn btn-sm btn-dark" href="javascript:;"><i class="fa fa-plus"></i> Seleccionar cliente</button>
                    </div>
                    <div class="btn-group">
                        <button class="donacion btn btn-sm btn-blue" href="javascript:;"><i class="fa fa-plus"></i> Donación/Amigos Teatro</button>
                    </div>
                    <div class="btn-group">
                        <button class="promociones btn btn-sm btn-primary" href="javascript:;"><i class="fa fa-plus"></i> Promociones</button>
                    </div>
                    <div class="btn-group">
                        <button class="seleccionarCF btn btn-sm btn-dark" href="javascript:;"><i class="fa fa-plus"></i> Consumidor Final</button>
                    </div>
                </div>
                <div class="UsuarioCaja " id="UsuarioCaja">
                    <div class="row">
                        <input type="text" id="idFacturacionG" class="esconder" disabled>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="field-1" class="control-label">Tipo</label>
                                <select name="tipoG" class="form-control" style="width:100%;" id="tipo">
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="field-1" class="control-label">Nombres</label>
                                <div class="form-group prepend-icon">
                                    <input type="text" name="nombres" id="nombresG" class="form-control" placeholder="Teatro Sanchez Aguilar" disabled>
                                    <i class="icon-user"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 ">
                            <div class="form-group">
                                <label for="field-3" class="control-label">Identificación</label>
                                <input type="text" name="cedula" class="form-control" id="cedulaG" placeholder="0911111111" disabled>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="field-1" class="control-label">Correo Fáctura</label>
                                <div class="form-group prepend-icon">
                                    <input type="email" name="correo" id="correoG" class="form-control" placeholder="tsa@hotmail.com" minlength="5" disabled>
                                    <i class="icon-map"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="field-1" class="control-label">Dirección</label>
                                <div class="form-group prepend-icon">
                                    <input type="text" name="direccion" id="direccionG" class="form-control" placeholder="Samborondom" minlength="5" disabled>
                                    <i class="icon-map"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-12 portlets">
        <div class="panel">
            <div class="row text-center" style="padding-bottom: 10px;">
                <div class="col-lg-3 col-md-4 col-xs-6 text-center">
                    <button class="crearPrecuentaGeneralItem btn-sm btn-dark " href="javascript:;"><i class="fa fa-plus"></i> Item</button>
                    <button class="crearPrecuentaGeneralCompuesto btn-sm btn-dark " href="javascript:;"><i class="fa fa-plus"></i> Compuesto</button>
                </div>
            </div>
            <div class="panel-content pagination2 table-responsive tablaReserva " id="tablaReserva">
                <table class="table table-dynamic table-precuentaGeneral_item " style="width: 100%;" data-table-name="Tabla de Reservas" id="table-precuentaGeneral_item">
                    <thead>
                        <tr>
                            <th>id_tipo</th>
                            <th>id_precuenta_general</th>
                            <th>Nombre Producto</th>
                            <th>Tipo</th>
                            <th>Precio Unitario</th>
                            <th>Cantidad</th>
                            <th>Descuento</th>
                            <th>Total</th>
                            <th class="text-right">Editar</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    <div class="col-lg-12 portlets hide">
        <div class="panel">
            <div class="panel-content pagination2 table-responsive tablaReservaP " id="tablaReservaP">
                <table class="table reserva_dataP" style="width: 100%;" data-table-name="Tabla de Promoción Reservas" id="table-reservasP">
                    <thead>
                        <tr>
                            <th>Id_reserva_promo</th>
                            <th>Id_reserva</th>
                            <th>Evento</th>
                            <th>Promoción</th>
                            <th>Tipo</th>
                            <th>SubTotal($)</th>
                            <th>Descuento (%)</th>
                            <th>Descuento total($)</th>
                            <th>Total($)</th>
                            <th class="text-right">Editar</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    <div class="col-lg-12  portlets hide  tabEventos" id="tabEventos">
        <div class="panel">
            <div class="panel-content pagination2 ">
                <tabset class="tab-fade-in">
                    <tab>
                        <tab-heading>
                            Descuento promocional
                        </tab-heading>
                        <div class="codigo" id="codigo">
                        </div>
                    </tab>
                    <tab>
                        <tab-heading>
                            Factor de Compra/Pago
                        </tab-heading>
                        <div class="compra" id="compra">
                        </div>
                    </tab>
                    <tab>
                        <tab-heading>
                            Boletos
                        </tab-heading>
                        <div class="pago" id="pago">

                        </div>
                    </tab>
                    <tab>
                        <tab-heading>
                            Forma de Pago
                        </tab-heading>
                        <div class="tarjeta" id="tarjeta">
                        </div>
                    </tab>
                    <tab>
                        <tab-heading>
                            Eventos Cruzados
                        </tab-heading>
                        <div class="cruzados" id="cruzados">
                        </div>
                    </tab>
                </tabset>
                <div class="modal-footer text-center">
                    <button type="button" class="btn btn-embossed btn-default cancelarP " data-dismiss="modal" aria-hidden="true">Cancelar Promoción</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-12 portlets">
        <div class="panel">
            <div class="panel-content pagination2 totalCaja " id="totalCaja">
            </div>
            <div class="panel-content pagination2 table-responsive ">
                <table class="table table-dynamic table-pagos " style="width: 100%;" data-table-name="Tabla de Pagos" id="table-pagos">
                    <thead>
                        <tr>
                            <th>id_espera_pago</th>
                            <th>Forma de Pago</th>
                            <th>Banco</th>
                            <th>Tarjeta</th>
                            <th>Lote</th>
                            <th>Monto</th>
                            <th class="text-right">Editar</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        <div class="modal-footer text-center">
            <button type="button" class="btn btn-default btn-embossed regresar" data-dismiss="modal">Salir</button>
            <button type="button" class="btn btn-primary btn-embossed insertCompra <?php echo $text; ?>" data-dismiss="modal">Finalizar Compra</button>
        </div>
    </div>

</div>
<div class="row hide clientes ">
    <div class="col-lg-12 portlets">
        <div class="panel">
            <div class="panel-content pagination2 table-responsive">
                <div class="m-b-20 ">
                    <div class="btn-group">
                        <button class="crearC btn btn-sm btn-dark <?php echo $crear1; ?>" href="javascript:;"><i class="fa fa-plus"></i> Agregar Usuario</button>
                    </div>
                    <div class="btn-group">
                        <button class="salir btn btn-sm btn-danger" href="javascript:;"><i class="fa fa-remove"></i> Cancelar</button>
                    </div>
                </div>
                <div class="row text-center" style="padding-bottom: 10px;">
                    <div class="col-lg-3 col-md-6 col-xs-6 text-center">
                        <input type="text" name="busquedaF" class="form-control " id="busquedaF" value="buscar" placeholder="busqueda" required>
                    </div>
                    <div class="col-lg-2 col-md-2 col-xs-2 text-center">
                        <button type="button" class="btn btn-primary btn-embossed bnt-square buscarRPC"> Buscar</button>
                    </div>
                </div>
                <table class="table filter-footer clientes_dataR2  <?php echo $exportar1; ?> table-dynamic table-tools1 " data-table-fechai="<?php echo "buscar"; ?>" data-table-name="Usuarios" id="table-editable" style="table-layout: fixed;">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Usuario</th>
                            <th>Cedula</th>
                            <th>Correo</th>
                            <th>Celular</th>
                            <th>Estado</th>
                            <th class="text-right">Editar</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="row factura hide" id="factura">
</div>
<?php
$transport->close();
?>
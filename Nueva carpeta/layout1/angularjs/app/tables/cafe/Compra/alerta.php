<?php
include("../../../conect_cafe.php");
include("../../../autenticacion.php");
include("../../../directorio.php");
$tabla = "";

$resultado = "";
$tipoR = "";
$tipo = "";
$id = "";
$tipo2 = "";
if (isset($_POST["tipo"])) {
    $tipo = $_POST["tipo"];
    $id = $_POST["id"] ?? null; // Utiliza el operador de fusión null para simplificar
    $id_item = $_POST["id_item"] ?? null;
    $id_compuesto = $_POST["id_compuesto"] ?? null;
    $nombre = $_POST["nombre"] ?? null;
    $grupo = $_POST["grupo"] ?? null;
    $descripcion = $_POST["descripcion"] ?? null;
    $precio = $_POST["precio"] ?? null;
    $factura = $_POST["factura"] ?? null;
    $precioT = $_POST["precioT"] ?? null;
    $tipoG = $_POST["tipoG"] ?? null;
    $cantidad = $_POST["cantidad"] ?? null;
    $estado = $_POST["estado"] ?? null;
    $tipo2 = $_POST["tipo2"] ?? null;
    $ruc = $_POST["ruc"] ?? null;
    $direccion = $_POST["direccion"] ?? null;
    $correo = $_POST["correo"] ?? null;
    $compuesto = $_POST["compuesto"] ?? null;
    $item = $_POST["item"] ?? null;
    $descuento = $_POST["descuento"] ?? null;
    $tipoG = $_POST["tipoG"] ?? null;
    $id_precuenta = $_POST["id_precuenta"] ?? 0;
    $id_precuenta_general = $_POST["id_precuenta_general"] ?? 0;
    $FpagoG = $_POST["FpagoG"] ?? null;
    $Ttarjeta = $_POST["Ttarjeta"] ?? null;
    $Tbanco = $_POST["Tbanco"] ?? null;
    $lote = $_POST["lote"] ?? null;
    $monto = $_POST["monto"] ?? null;
    $donacion = $_POST["donacion"] ?? null;
    $canjeados = $_POST["canjeados"] ?? null;
    $id_reserva = $_POST["id_reserva"] ?? null;
    $email = $_POST["email"] ?? null;
    $id_facturacion = $_POST["id_facturacion"] ?? null;
    $id_usuario_cliente = $_POST["id_usuario_cliente"] ?? null;
    // Preparación del objeto grupoT


    if (in_array($tipo, ["crear_precuentaGeneral", "editar_precuentaGeneral", "estadoPrecuentaGeneral", "eliminarPrecuentaGeneral"])) {
        $precuentaT->tipo = 'G';
        $precuentaT->usuario_modificacion = $_SESSION["usuario"];
        $precuentaT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarPrecuentaGeneral") {
            $precuentaT->descripcion = $descripcion;
            if ($tipo !== "crear_precuentaGeneral") {
                $precuentaT->id_precuenta = $id;
                if ($tipo === "estadoPrecuentaGeneral") {
                    $precuentaT->estado = "A";
                }
            }
        } else {
            $precuentaT->id_precuenta = $id;
        }

        $tabla = "precuentaGeneral";
    }
    if (in_array($tipo, ["crear_precuentaGeneral_item", "editar_precuentaGeneral_item", "eliminarPrecuentaGeneralItem"])) {
        $pedidoICT->tipo = 'GI';
        $pedidoICT->usuario_modificacion = $_SESSION["usuario"];
        $pedidoICT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarPrecuentaGeneralItem") {
            $pedidoICT->id_enlace = $id_item;
            $pedidoICT->id_precuenta_general = $id_precuenta_general;
            $pedidoICT->cantidad = $cantidad;
            if ($tipo !== "crear_precuentaGeneral_item") {
                $pedidoICT->id = $id;
            }
        } else {
            $pedidoICT->id = $id;
        }

        $tabla = "precuentaGeneral_item";
    }
    if (in_array($tipo, ["crear_precuentaGeneral_compuesto", "editar_precuentaGeneral_compuesto", "eliminarPrecuentaGeneralCompuesto"])) {
        $pedidoICT->tipo = 'GC';
        $pedidoICT->usuario_modificacion = $_SESSION["usuario"];
        $pedidoICT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarPrecuentaGeneralCompuesto") {
            $pedidoICT->id_enlace = $id_compuesto;
            $pedidoICT->id_precuenta_general = $id_precuenta_general;
            $pedidoICT->cantidad = $cantidad;
            if ($tipo !== "crear_precuentaGeneral_compuesto") {
                $pedidoICT->id = $id;
            }
        } else {
            $pedidoICT->id = $id;
        }

        $tabla = "precuentaGeneral_item";
    }
    if (in_array($tipo, ["agregarPago", "eliminarPago"])) {
        $compraTarjetaT->tipo = 'G';
        $compraTarjetaT->usuario_modificacion = $_SESSION["usuario"];
        $compraTarjetaT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarPago") {
            $compraTarjetaT->tipo_pago = $FpagoG;
            $compraTarjetaT->id_tarjeta = $Ttarjeta;
            $compraTarjetaT->id_banco = $Tbanco;
            $compraTarjetaT->lote = $lote;
            $compraTarjetaT->total = $monto;
            $compraTarjetaT->id_precuenta_general = $id_precuenta_general;
            if ($tipo !== "agregarPago") {
                $compraTarjetaT->id_precuenta_general_pago = $id;
            }
        } else {
            $compraTarjetaT->id_precuenta_general_pago = $id;
        }

        $tabla = "pagos";
    }
    if (in_array($tipo, ["puntosAD", "puntosAD2"])) {
        if ($tipo !== "puntosAD2") {
            $precuentaT->tipo = 'Puntos';
        } else {
            $precuentaT->tipo = 'PuntosT';
        }
        $precuentaT->usuario_modificacion = $_SESSION["usuario"];
        $precuentaT->usuario_creacion = $_SESSION["usuario"];
        $precuentaT->donacion = $donacion;
        $precuentaT->id_reserva = $id_reserva;
        $precuentaT->id_precuenta = $id_precuenta;
        $precuentaT->canjeados = $canjeados;
        $tabla = "pagos";
    }
    if (in_array($tipo, ["insertCompra"])) {
        $compraT->tipo = 'G';
        $compraT->usuario_modificacion = $_SESSION["usuario"];
        $compraT->usuario_creacion = $_SESSION["usuario"];
        $compraT->email = $email;
        $compraT->id_facturacion = $id_facturacion;
        $compraT->id_usuario_cliente = $id_usuario_cliente;
        $compraT->id_precuenta_general = $id_precuenta_general;
        $tabla = "precuentaGeneral";
    }
    // Ejecución de la acción correspondiente
    switch ($tipo) {

        case "crear_precuentaGeneral":
            $re = $client10->insertPrecuenta($busquedaT, $precuentaT);
            break;
        case "editar_precuentaGeneral":
            $re = $client10->updatePrecuenta($busquedaT, $precuentaT);
            break;
        case "estadoPrecuentaGeneral":
            $re = $client10->updateEstadoPrecuenta($busquedaT, $precuentaT);
            break;
        case "eliminarPrecuentaGeneral":
            $re = $client10->deletePrecuenta($busquedaT, $precuentaT);
            break;
        case "crear_precuentaGeneral_item":
        case "crear_precuentaGeneral_compuesto":
            $re = $client10->insertPedidoIC($busquedaT, $pedidoICT);
            break;
        case "editar_precuentaGeneral_item":
        case "editar_precuentaGeneral_compuesto":
            $re = $client10->updatePedidoIC($busquedaT, $pedidoICT);
            break;
        case "eliminarPrecuentaGeneralItem":
        case "eliminarPrecuentaGeneralCompuesto":
            $re = $client10->deletePedidoIC($busquedaT, $pedidoICT);
            break;
        case "eliminarPrecuentaGeneralCompuesto":
            $re = $client10->deletePedidoIC($busquedaT, $pedidoICT);
            break;
        case "agregarPago":
            $re = $client10->insertCompraTarjeta($busquedaT, $compraTarjetaT);
            break;
        case "eliminarPago":
            $re = $client10->deleteCompraTarjeta($busquedaT, $compraTarjetaT);
            break;
        case "puntosAD":
        case "puntosAD2":
            $re = $client10->updatePrecuenta($busquedaT, $precuentaT);
            break;
        case "insertCompra":
            $re = $client10->insertCompra($busquedaT, $compraT);
            break;
    }

    $resultado = $re ?? "false"; // Asume 'false' si $re no está definido
}

$tipoNotificacion = "warning";
if ($resultado != "false") {
    if ($tipo === "insertCompra") {
        if ($resultado != "true") {
            $mensaje = $resultado;
            $tipoNotificacion = "warning";
        } else {
            $mensaje = "Se realizó correctamente";
            $tipoNotificacion = "success";
            // $(".inventario").removeClass("hide");
            //$(".infoG").addClass("hide");
            // $(".infoG").empty();
        }
    } else {
        $mensaje = "Se realizó correctamente";
        $tipoNotificacion = "success";
    }
} else {
    $mensaje = "Error, no se pudo realizar la operación";
    $tipoNotificacion = "warning";
}

// Script de notificación
?>
<script type="text/javascript">
    var n = noty({
        text: '<div class="alert alert-<?php echo $tipoNotificacion; ?>"><p><strong><?php echo $mensaje; ?></p></div>',
        layout: 'topCenter',
        theme: 'made',
        type: 'error',
        maxVisible: 5,
        animation: {
            open: 'animated bounceIn',
            close: 'animated bounceOut'
        },
        timeout: 3000,
    });

    $('.page-spinner-loader').removeClass('hide');
    $(".<?php echo $tipo; ?>").prop("disabled", false);
    var table = $('#table-<?php echo $tabla; ?>').DataTable();
    table.ajax.reload();


    if ("<?php echo $tipoNotificacion; ?>" === "success") {
        $('#MCafe').modal('hide');
        if ("<?php echo $tipo; ?>" === "insertCompra") {
            $(".inventario").removeClass("hide");
            $(".infoG").addClass("hide");
            $(".infoG").empty();
        }else{
            $('#totalCaja').load('./tables/cafe/Compra/total.php?id=' + <?php echo $id_precuenta_general; ?>, function() {});
        }
    }
</script>
<?php
$transport10->close();
?>
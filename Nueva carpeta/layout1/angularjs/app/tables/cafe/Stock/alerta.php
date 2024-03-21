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
    $proveedor = $_POST["proveedor"] ?? null;
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
    $id_orden_compra = $_POST["id_orden_compra"] ?? null;
    // Preparación del objeto grupoT
    if (in_array($tipo, ["crear_ingresoCompuesto", "editar_ingresoCompuesto", "estadoIngresoCompuesto", "eliminarIngresoCompuesto"])) {
        $busquedaT->tipo = "IC";
        $ingresoT->usuario_modificacion = $_SESSION["usuario"];
        $ingresoT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarIngresoCompuesto") {
            $ingresoT->id_compuesto = $compuesto;
            $ingresoT->cantidad = $cantidad;
            $ingresoT->descripcion = $descripcion;
            if ($tipo !== "crear_ingresoCompuesto") {
                $ingresoT->id_ingreso = $id;
                if ($tipo === "estadoIngresoCompuesto") {
                    $ingresoT->estado = $estado;
                }
            }
        } else {
            $ingresoT->id_ingreso = $id;
        }

        $tabla = "ingreso";
    }
    if (in_array($tipo, ["crear_ingresoItem", "editar_ingresoItem", "estadoIngresoItem", "eliminarIngresoItem"])) {
        $busquedaT->tipo = "II";
        $ingresoT->usuario_modificacion = $_SESSION["usuario"];
        $ingresoT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarIngresoItem") {
            $ingresoT->id_item = $item;
            $ingresoT->cantidad = $cantidad;
            $ingresoT->descripcion = $descripcion;
            if ($tipo !== "crear_ingresoItem") {
                $ingresoT->id_ingreso = $id;
                if ($tipo === "estadoIngresoItem") {
                    $ingresoT->estado = $estado;
                }
            }
        } else {
            $ingresoT->id_ingreso = $id;
        }

        $tabla = "ingreso";
    }
    if (in_array($tipo, ["crear_egresoCompuesto", "editar_egresoCompuesto", "estadoEgresoCompuesto", "eliminarEgresoCompuesto"])) {
        $busquedaT->tipo = "EC";
        $ingresoT->usuario_modificacion = $_SESSION["usuario"];
        $ingresoT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarEgresoCompuesto") {
            $ingresoT->id_compuesto = $compuesto;
            $ingresoT->cantidad = $cantidad;
            $ingresoT->descripcion = $descripcion;
            if ($tipo !== "crear_egresoCompuesto") {
                $ingresoT->id_ingreso = $id;
                if ($tipo === "estadoEgresoCompuesto") {
                    $ingresoT->estado = $estado;
                }
            }
        } else {
            $ingresoT->id_ingreso = $id;
        }

        $tabla = "egreso";
    }
    if (in_array($tipo, ["crear_egresoItem", "editar_egresoItem", "estadoEgresoItem", "eliminarEgresoItem"])) {
        $busquedaT->tipo = "EI";
        $ingresoT->usuario_modificacion = $_SESSION["usuario"];
        $ingresoT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarEgresoItem") {
            $ingresoT->id_item = $item;
            $ingresoT->cantidad = $cantidad;
            $ingresoT->descripcion = $descripcion;
            if ($tipo !== "crear_egresoItem") {
                $ingresoT->id_ingreso = $id;
                if ($tipo === "estadoEgresoItem") {
                    $ingresoT->estado = $estado;
                }
            }
        } else {
            $ingresoT->id_ingreso = $id;
        }

        $tabla = "egreso";
    }
    if (in_array($tipo, ["crear_proveedor", "editar_proveedor", "estadoProveedor", "eliminarProveedor"])) {
        $proveedorT->usuario_modificacion = $_SESSION["usuario"];
        $proveedorT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarProveedor") {
            $proveedorT->nombre = $nombre;
            $proveedorT->ruc = $ruc;
            $proveedorT->direccion = $direccion;
            $proveedorT->correo = $correo;
            $proveedorT->descripcion = $descripcion;
            if ($tipo !== "crear_proveedor") {
                $proveedorT->id_proveedor = $id;
                if ($tipo === "estadoProveedor") {
                    $busquedaT->tipo = $tipo2;
                    $proveedorT->estado = $estado;
                }
            }
        } else {
            $proveedorT->id_proveedor = $id;
        }

        $tabla = "proveedor";
    }
    if (in_array($tipo, ["crear_ordenCompra", "editar_ordenCompra", "estadoOrdenCompra", "eliminarOrdenCompra"])) {
        $ordenCompraT->usuario_modificacion = $_SESSION["usuario"];
        $ordenCompraT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarOrdenCompra") {
            $ordenCompraT->factura = $factura;
            $ordenCompraT->id_proveedor = $proveedor;
            $ordenCompraT->descripcion = $descripcion;
            $ordenCompraT->precio_compra = $precioT;
            if ($tipo !== "crear_ordenCompra") {
                $ordenCompraT->id_orden_compra = $id;
                if ($tipo === "estadoOrdenCompra") {
                    $ordenCompraT->estado = "A";
                }
            }
        } else {
            $ordenCompraT->id_orden_compra = $id;
        }

        $tabla = "ordenCompra";
    }
    if (in_array($tipo, ["crear_ordenCompra_item", "editar_ordenCompra_item", "eliminarOrdenCompraItem"])) {
        $ordenCompraItemT->usuario_modificacion = $_SESSION["usuario"];
        $ordenCompraItemT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarOrdenCompraItem") {
            $ordenCompraItemT->id_item = $id_item;
            $ordenCompraItemT->id_orden_compra = $id_orden_compra;
            $ordenCompraItemT->cantidad = $cantidad;
            $ordenCompraItemT->descripcion = $descripcion;
            $ordenCompraItemT->precio = $precio;
            if ($tipo !== "crear_ordenCompra_item") {
                $ordenCompraItemT->id_orden_compra_item = $id;
            }
        } else {
            $ordenCompraItemT->id_orden_compra_item = $id;
        }

        $tabla = "ordenCompra_item";
    }
    // Ejecución de la acción correspondiente
    switch ($tipo) {
        case "crear_ingresoCompuesto":
        case "crear_ingresoItem":
        case "crear_egresoCompuesto":
        case "crear_egresoItem":
            $re = $client10->insertIngreso($busquedaT, $ingresoT);
            break;
        case "eliminarIngresoItem":
        case "eliminarIngresoCompuesto":
        case "eliminarEgresoItem":
        case "eliminarEgresoCompuesto":
            $re = $client10->deleteIngreso($busquedaT, $ingresoT);
            break;
        case "crear_proveedor":
            $re = $client10->insertProveedor($busquedaT, $proveedorT);
            break;
        case "editar_proveedor":
            $re = $client10->updateProveedor($busquedaT, $proveedorT);
            break;
        case "estadoProveedor":
            $re = $client10->updateEstadoProveedor($busquedaT, $proveedorT);
            break;
        case "eliminarProveedor":
            $re = $client10->deleteProveedor($busquedaT, $proveedorT);
            break;
        case "crear_ordenCompra":
            $re = $client10->insertOrdenCompra($busquedaT, $ordenCompraT);
            break;
        case "editar_ordenCompra":
            $re = $client10->updateOrdenCompra($busquedaT, $ordenCompraT);
            break;
        case "estadoOrdenCompra":
            $re = $client10->updateEstadoOrdenCompra($busquedaT, $ordenCompraT);
            break;
        case "eliminarOrdenCompra":
            $re = $client10->deleteOrdenCompra($busquedaT, $ordenCompraT);
            break;
        case "crear_ordenCompra_item":
            $re = $client10->insertOrdenCompra_item($busquedaT, $ordenCompraItemT);
            break;
        case "editar_ordenCompra_item":
            $re = $client10->updateOrdenCompra_item($busquedaT, $ordenCompraItemT);
            break;
        case "eliminarOrdenCompraItem":
            $re = $client10->deleteOrdenCompra_item($busquedaT, $ordenCompraItemT);
            break;
    }

    $resultado = $re ?? "false"; // Asume 'false' si $re no está definido
}

$tipoNotificacion = "warning";
if ($resultado != "false") {
    if ($tipo === "estadoOrdenCompra") {
        if ($resultado != "true") {
            $mensaje = $resultado;
            $tipoNotificacion = "warning";
        }else{
            $mensaje = "Se realizó correctamente";
            $tipoNotificacion = "success";
            // $(".inventario").removeClass("hide");
            //$(".infoG").addClass("hide");
            // $(".infoG").empty();
        } 
    }else{
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

    $('#MCafe').modal('hide');
    if ("<?php echo $tipoNotificacion; ?>"==="success"){
        if ("<?php echo $tipo; ?>"==="estadoOrdenCompra"){
            $(".inventario").removeClass("hide");
            $(".infoG").addClass("hide");
            $(".infoG").empty();
        }
    }

</script>
<?php
$transport10->close();
?>
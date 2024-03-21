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
    $tipoG = $_POST["tipoG"] ?? null;
    $cantidad = $_POST["cantidad"] ?? null;
    $inventario = $_POST["inventario"] ?? null;
    $estado = $_POST["estado"] ?? null;
    $tipo2 = $_POST["tipo2"] ?? null;
    $ruc = $_POST["ruc"] ?? null;
    $direccion = $_POST["direccion"] ?? null;
    $correo = $_POST["correo"] ?? null;
    $compuesto = $_POST["compuesto"] ?? null;
    $item = $_POST["item"] ?? null;
    $descuento = $_POST["descuento"] ?? null;
    $tipoG = $_POST["tipoG"] ?? null;
    $fechaInicio = $_POST["fechaInicio"] ?? null;
    $fechaFinal = $_POST["fechaFinal"] ?? null;
    // Preparación del objeto grupoT
    if (in_array($tipo, ["crear_promocionCompuesto", "editar_promocionCompuesto", "estadoPromocionCompuesto", "eliminarPromocionCompuesto"])) {
        $busquedaT->tipo = $tipo2;
        $promocionT->usuario_modificacion = $_SESSION["usuario"];
        $promocionT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarPromocionCompuesto") {
            $promocionT->nombre = $nombre;
            $promocionT->id_compuesto = $compuesto;
            $promocionT->descuento = $descuento;
            $promocionT->precio = $precio;
            $promocionT->tipo = $tipoG;
            $promocionT->fecha_inicio = $fechaInicio;
            $promocionT->fecha_final = $fechaFinal;
            if ($tipo !== "crear_promocionCompuesto") {
                $promocionT->id_promocion = $id;
                if ($tipo === "estadoPromocionCompuesto") {

                    $promocionT->estado = $estado;
                }
            }
        } else {
            $promocionT->id_promocion = $id;
        }

        $tabla = "promocionCompuesto";
    }
    if (in_array($tipo, ["crear_promocionItem", "editar_promocionItem", "estadoPromocionItem", "eliminarPromocionItem"])) {
        $busquedaT->tipo = $tipo2;
        $promocionT->usuario_modificacion = $_SESSION["usuario"];
        $promocionT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarPromocionItem") {
            $promocionT->nombre = $nombre;
            $promocionT->id_item = $item;
            $promocionT->descuento = $descuento;
            $promocionT->precio = $precio;
            $promocionT->tipo = $tipoG;
            $promocionT->fecha_inicio = $fechaInicio;
            $promocionT->fecha_final = $fechaFinal;
            if ($tipo !== "crear_promocionItem") {
                $promocionT->id_promocion = $id;
                if ($tipo === "estadoPromocionItem") {
                    $promocionT->estado = $estado;
                }
            }
        } else {
            $promocionT->id_promocion = $id;
        }

        $tabla = "promocionItem";
    }
    if (in_array($tipo, ["crear_promocion", "editar_promocion", "estadoPromocion", "eliminarPromocion"])) {
        $busquedaT->tipo = $tipo2;
        $promocionT->usuario_modificacion = $_SESSION["usuario"];
        $promocionT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarPromocion") {
            $promocionT->nombre = $nombre;
            $promocionT->descuento = $descuento;
            $promocionT->id_grupo = $grupo;
            $promocionT->precio = "0";
            $promocionT->tipo = $tipoG;
            $promocionT->fecha_inicio = $fechaInicio;
            $promocionT->fecha_final = $fechaFinal;
            if ($tipo !== "crear_promocion") {
                $promocionT->id_promocion = $id;
                if ($tipo === "estadoPromocion") {
                    $promocionT->estado = $estado;
                }
            }
        } else {
            $promocionT->id_promocion = $id;
        }

        $tabla = "promocion";
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
    // Ejecución de la acción correspondiente
    switch ($tipo) {
        case "crear_promocionCompuesto":
        case "crear_promocion":
        case "crear_promocionItem":
            $re = $client10->insertPromocion($busquedaT, $promocionT);
            break;
        case "editar_promocionCompuesto":
        case "editar_promocion":
        case "editar_promocionItem":
            $re = $client10->updatePromocion($busquedaT, $promocionT);
            break;
        case "estadoPromocion":
        case "estadoPromocionItem":
        case "estadoPromocionCompuesto":
            $re = $client10->updateEstadoPromocion($busquedaT, $promocionT);
            break;
        case "eliminarPromocion":
        case "eliminarPromocionItem":
        case "eliminarPromocionCompuesto":
            $re = $client10->deletePromocion($busquedaT, $promocionT);
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
    }

    $resultado = $re ?? "false"; // Asume 'false' si $re no está definido
}

// Procesamiento del resultado
if ($resultado != "false") {
    $mensaje = "Se realizó correctamente";
    $tipoNotificacion = "success";
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
</script>
<?php
$transport10->close();
?>
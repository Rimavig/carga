<?php
include ("../../../conect_cafe.php");
include ("../../../autenticacion.php");
include ("../../../directorio.php");
$tabla="";

$resultado="";
$tipoR="";
$tipo="";
$id="";
$tipo2="";
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
    $medida = $_POST["medida"] ?? null;


    // Preparación del objeto grupoT
    if (in_array($tipo, ["crear_grupo", "editar_grupo", "estadoGrupo", "eliminarGrupo"])) {
        $grupoT->usuario_modificacion = $_SESSION["usuario"];
        $grupoT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarGrupo") {
            $grupoT->nombre = $nombre;
            if ($tipo !== "crear_grupo") {
                $grupoT->id_grupo = $id;
                if ($tipo === "estadoGrupo") {
                    $grupoT->estado = $estado;
                }
            }
        } else {
            $grupoT->id_grupo = $id;
        }
        $tabla="grupo";
    }
    if (in_array($tipo, ["crear_item", "editar_item", "estadoItem", "eliminarItem"])) {
        $itemT->usuario_modificacion = $_SESSION["usuario"];
        $itemT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarItem") {
            $itemT->nombre = $nombre;
            $itemT->descripcion = $descripcion;
            $itemT->id_grupo = $grupo;
            $itemT->precio = $precio;
            $itemT->tipo = $tipoG;
            $itemT->cantidad = $cantidad;
            $itemT->medida = $medida;
            $itemT->inventario = $inventario;
            if ($tipo !== "crear_item") {
                $itemT->id_item = $id;
                if ($tipo === "estadoItem") {
                    $busquedaT->tipo = $tipo2;
                    $itemT->estado = $estado;
                }
            }
        } else {
            $itemT->id_item = $id;
        }
        
        $tabla="item";
    }
    if (in_array($tipo, ["crear_item_compuesto", "editar_item_compuesto", "estadoItemCompuesto", "eliminarItemCompuesto"])) {
        $compuestoItemT->usuario_modificacion = $_SESSION["usuario"];
        $compuestoItemT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarItemCompuesto") {
            $compuestoItemT->id_compuesto = $id_compuesto;
            $compuestoItemT->id_item = $id_item;
            $compuestoItemT->cantidad = $cantidad;
            if ($tipo !== "crear_item_compuesto") {
                $compuestoItemT->id_item_compuesto = $id;
                if ($tipo === "estadoItemCompuesto") {
                    $busquedaT->tipo = $tipo2;
                    $compuestoItemT->estado = $estado;
                }
            }
        } else {
            $compuestoItemT->id_item_compuesto = $id;
        }
        
        $tabla="item-compuesto";
    }
    if (in_array($tipo, ["crear_compuesto", "editar_compuesto", "estadoCompuesto", "eliminarCompuesto"])) {
        $compuestoT->usuario_modificacion = $_SESSION["usuario"];
        $compuestoT->usuario_creacion = $_SESSION["usuario"];
        if ($tipo !== "eliminarCompuesto") {
            $compuestoT->nombre = $nombre;
            $compuestoT->descripcion = $descripcion;
            $compuestoT->id_grupo = $grupo;
            $compuestoT->precio = $precio;
            $compuestoT->tipo = $tipoG;
            $compuestoT->cantidad = $cantidad;
            $compuestoT->inventario = $inventario;
            if ($tipo !== "crear_compuesto") {
                $compuestoT->id_compuesto = $id;
                if ($tipo === "estadoCompuesto") {
                    $busquedaT->tipo = $tipo2;
                    $compuestoT->estado = $estado;
                }
            }
        } else {
            $compuestoT->id_compuesto = $id;
        }
        
        $tabla="compuesto";
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
        
        $tabla="proveedor";
    }
    // Ejecución de la acción correspondiente
    switch ($tipo) {
        case "crear_grupo":
            $re = $client10->insertGrupo($busquedaT, $grupoT);
            break;
        case "editar_grupo":
            $re = $client10->updateGrupo($busquedaT, $grupoT);
            break;
        case "estadoGrupo":
            $re = $client10->updateEstadoGrupo($busquedaT, $grupoT);
            break;
        case "eliminarGrupo":
            $re = $client10->deleteGrupo($busquedaT, $grupoT);
            break;
        case "crear_item":
            $re = $client10->insertItem($busquedaT, $itemT);
            break;
        case "editar_item":
            $re = $client10->updateItem($busquedaT, $itemT);
            break;
        case "estadoItem":
            $re = $client10->updateEstadoItem($busquedaT, $itemT);
            break;
        case "eliminarItem":
            $re = $client10->deleteItem($busquedaT, $itemT);
            break;
        case "crear_compuesto":
            $re = $client10->insertCompuesto($busquedaT, $compuestoT);
            break;
        case "editar_compuesto":
            $re = $client10->updateCompuesto($busquedaT, $compuestoT);
            break;
        case "estadoCompuesto":
            $re = $client10->updateEstadoCompuesto($busquedaT, $compuestoT);
            break;
        case "eliminarCompuesto":
            $re = $client10->deleteCompuesto($busquedaT, $compuestoT);
            break;
        case "crear_item_compuesto":
            $re = $client10->insertCompuestoItem($busquedaT, $compuestoItemT);
            break;
        case "editar_item_compuesto":
            $re = $client10->updateCompuestoItem($busquedaT, $compuestoItemT);
            break;
        case "estadoItemCompuesto":
            $re = $client10->updateEstadoCompuestoItem($busquedaT, $compuestoItemT);
            break;
        case "eliminarItemCompuesto":
            $re = $client10->deleteCompuestoItem($busquedaT, $compuestoItemT);
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

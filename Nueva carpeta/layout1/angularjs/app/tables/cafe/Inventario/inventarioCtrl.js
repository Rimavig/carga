"use strict";

angular.module("newApp").controller("inventarioCtrl", [
  "$scope",
  "pluginsService",
  function ($scope, pluginsService) {
    $(document).ready(function () {
      // Función para inicializar o recargar una tabla específica con DataTable
      function initOrReloadTable(tipo, columnDefs = []) {
        
        $("#cafe_" + tipo).load(
          "./tables/cafe/Inventario/" + tipo + ".php",
          function () {
            var shouldShowDownloadButtons = !$("#table-" + tipo).hasClass(
              "no-descargar"
            );
            var buttonsConfig = shouldShowDownloadButtons
              ? [
                  {
                    extend: "excelHtml5",
                    title: "Tabla " + tipo,
                    className: "btn btn-default",
                  },
                  {
                    extend: "pdfHtml5",
                    title: "Tabla " + tipo,
                    className: "btn btn-default",
                  },
                  {
                    text: '<i class="fa fa-refresh"></i>',
                    className: "btn btn-default",
                    action: function (e, dt) {
                      dt.ajax.reload();
                    },
                  },
                  // Agregar más botones según sea necesario
                ]
              : [
                  {
                    text: '<i class="fa fa-refresh"></i>',
                    className: "btn btn-default",
                    action: function (e, dt) {
                      dt.ajax.reload();
                    },
                  },
                ];
            // Verifica si DataTables ya está inicializado
            if ($.fn.DataTable.isDataTable("#table-" + tipo)) {
              // Recarga la tabla si ya está inicializada
              $("#table-" + tipo).DataTable().ajax.reload();
            } else {
              // Inicializa DataTables con la configuración
              $("#table-" + tipo).DataTable({
                language: {
                  url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
                },
                ajax: "tables/cafe/Inventario/" + tipo + "_data.php", // Asume una convención de nomenclatura para simplificar
                ordering: true,
                autoWidth: false,
                destroy: true, // Esta opción ya está implícita al usar .DataTable() en un selector previamente inicializado
                dom:
                  "<'row'<'col-12 col-md-4'l><'col-12 col-md-4 text-center'B><'col-12 col-md-4'f>>" +
                  "<'row'<'col-12'tr>>" +
                  "<'row'<'col-12 col-md-5'i><'col-12 col-md-7'p>>",
                buttons: buttonsConfig,
                aoColumnDefs: columnDefs,
              });
            }
          }
        );
      }

      // Función mejorada para recargar las tablas
      function reloadTables() {
        // Define las configuraciones específicas de columnas para cada tabla
        let groupColumnDefs = [
          {
            targets: [0],
            createdCell: function (td) {
              $(td).attr("id", "idGrupo");
            },
            className: "hide_column",
          },
        ];

        let itemColumnDefs = [
          {
            targets: [0, 1],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idItem");
              }
            },
            className: "hide_column",
          },
        ];
        let compuestoColumnDefs = [
          {
            targets: [0, 1],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idCompuesto");
              }
            },
            className: "hide_column",
          },
        ];

        // Inicializa o recarga las tablas
        initOrReloadTable("grupo", groupColumnDefs);
        initOrReloadTable("item", itemColumnDefs);
        initOrReloadTable("compuesto", compuestoColumnDefs);
      }

      // Llama a la función cuando sea necesario recargar la tabla
      reloadTables();
    });
    $scope.reload = function () {
      location.reload();
    };
    $scope.$on("$viewContentLoaded", function () {
      function mostrarNotificacion(texto, tipo = "error") {
        new noty({
          text: `<div class="alert alert-warning"><p><strong>${texto}</strong></p></div>`,
          layout: "topCenter",
          theme: "made",
          type: tipo,
          maxVisible: 5,
          animation: {
            open: "animated bounceIn",
            close: "animated bounceOut",
          },
          timeout: 3000,
        });
      }
      function cargarModal(selector, url, data = {}) {
        $(".page-spinner-loader").removeClass("hide");
        $("#MCafe").load(url, data, function () {
          $(".page-spinner-loader").addClass("hide");
          $("#MCafe").modal("show");
        });
      }
      function initOrReloadTableSecundaria(tipo, columnDefs = [], id) {
        $(".infoG").removeClass("hide");
        $(".inventario").addClass("hide");
        $(".infoG").load(
          "./tables/cafe/Inventario/" + tipo + ".php",
          function () {
            // Verifica si DataTables ya está inicializado
            if ($.fn.DataTable.isDataTable("#table-" + tipo)) {
              // Recarga la tabla si ya está inicializada
              $("#table-" + tipo)
                .DataTable()
                .ajax.reload();
            } else {
              // Inicializa DataTables con la configuración
              $("#table-" + tipo).DataTable({
                language: {
                  url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
                },
                ajax: {
                  url: "tables/cafe/Inventario/" + tipo + "_data.php",
                  type: "POST", // Usar POST o GET según sea necesario
                  data: {
                    id_compuesto: id,
                  },
                },
                ordering: false,
                autoWidth: false,
                destroy: true, // Esta opción ya está implícita al usar .DataTable() en un selector previamente inicializado
                dom:
                  "<'row'<'col-12 col-md-4'l><'col-12 col-md-4 text-center'B><'col-12 col-md-4'f>>" +
                  "<'row'<'col-12'tr>>" +
                  "<'row'<'col-12 col-md-5'i><'col-12 col-md-7'p>>",
                buttons: [
                  {
                    text: '<i class="fa fa-refresh"></i>',
                    className: "btn btn-default",
                    action: function (e, dt) {
                      dt.ajax.reload();
                    },
                  },
                ],
                aoColumnDefs: columnDefs,
              });
              $("#table-" + tipo).attr("data-id_compuesto", id);
            }
          }
        );
      }
      $(document).on("click", ".crearGrupo", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Inventario/crear_grupo.php", {
          tipo: "grupo",
        });
      });
      $(document).on("click", ".editarGrupo", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idGrupo").text();
        cargarModal(this, "./tables/cafe/Inventario/editar_grupo.php", {
          var1: id,
        });
      });
      $(document).on("click", ".crear_grupo, .editar_grupo", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var esCrear = $(this).hasClass("crear_grupo");
        var nombre = $(this).parents().find("#nombreG")[0].value;
        var id = esCrear ? null : $(this).parents().find("#EidGrupo")[0].value;
        var url = "./tables/cafe/Inventario/alerta.php";
        var data = esCrear
          ? { tipo: "crear_grupo", nombre: nombre }
          : { tipo: "editar_grupo", id: id, nombre: nombre };
        if (nombre.length < 2) {
          mostrarNotificacion("Ingrese nombre correcto");
          $(this).prop("disabled", false);
          return;
        }

        $(".page-spinner-loader").removeClass("hide");
        $("#alerta").load(
          url,
          data,
          function () {
            $(".page-spinner-loader").addClass("hide");
            // Re-habilitar el botón una vez que se complete la operación asíncrona
            $(this).prop("disabled", false);
          }.bind(this)
        );
      });

      $(document).on("click", ".crearItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Inventario/crear_item.php", {
          tipo: "item",
        });
      });
      $(document).on("click", ".editarItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idItem").text();
        cargarModal(this, "./tables/cafe/Inventario/editar_item.php", {
          var1: id,
        });
      });
      $(document).on("click", ".crear_item, .editar_item", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var esCrear = $(this).hasClass("crear_item");
        var nombre = $("#nombreC").val();
        var grupo = $("#grupoC").val();
        var descripcion = $("#descripcionC").val();
        var precio = $("#precioC").val();
        var medida = $("#medida").val();
        var tipoG = $("#tipoC").val();
        var cantidad = $("#cantidadC").val();
        var inventario = $("#boxI").is(":checked") ? "S" : "N";
        var id = esCrear ? null : $(this).parents().find("#EidItem")[0].value;
        var url = "./tables/cafe/Inventario/alerta.php";
        var data = esCrear
          ? {
              tipo: "crear_item",
              nombre: nombre,
              grupo: grupo,
              descripcion: descripcion,
              precio: precio,
              medida: medida,
              tipoG: tipoG,
              cantidad: cantidad,
              inventario: inventario,
            }
          : {
              tipo: "editar_item",
              id: id,
              nombre: nombre,
              grupo: grupo,
              descripcion: descripcion,
              precio: precio,
              medida: medida,
              tipoG: tipoG,
              cantidad: cantidad,
              inventario: inventario,
            };
        if (nombre.length < 2) {
          mostrarNotificacion("Ingrese nombre correcto");
          $(this).prop("disabled", false);
          return;
        }
        if (medida.length < 1) {
          mostrarNotificacion("Ingrese unidad de medida");
          $(this).prop("disabled", false);
          return;
        }
        if (descripcion.length < 1) {
          mostrarNotificacion("Ingrese descripción");
          $(this).prop("disabled", false);
          return;
        }
        if (isNaN(precio) || isNaN(cantidad)) {
          mostrarNotificacion("Precio y cantidad deben ser valores numéricos");
          return false;
        }
        precio = parseFloat(precio);
        cantidad = parseFloat(cantidad);
        if (precio < 0) {
          mostrarNotificacion("Ingrese precio");
          $(this).prop("disabled", false);
          return;
        }
        if (cantidad < 0) {
          mostrarNotificacion("Ingrese cantidad");
          $(this).prop("disabled", false);
          return;
        }
        $(".page-spinner-loader").removeClass("hide");
        $("#alerta").load(
          url,
          data,
          function () {
            $(".page-spinner-loader").addClass("hide");
            // Re-habilitar el botón una vez que se complete la operación asíncrona
            $(this).prop("disabled", false);
          }.bind(this)
        );
      });

      $(document).on("click", ".crearCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Inventario/crear_compuesto.php", {
          tipo: "compuesto",
        });
      });
      $(document).on("click", ".editarCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idCompuesto").text();
        cargarModal(this, "./tables/cafe/Inventario/editar_compuesto.php", {
          var1: id,
        });
      });
      $(document).on("click", ".EscogerCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        let itemCompuestoColumnDefs = [
          {
            targets: [0, 1, 2],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idItemCompuesto");
              }
            },
            className: "hide_column",
          },
        ];
        var id = $(this).closest("tr").find("#idCompuesto").text();
        initOrReloadTableSecundaria(
          "item-compuesto",
          itemCompuestoColumnDefs,
          id
        );
      });
      $(document).on("click", ".regresar", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".inventario").removeClass("hide");
        $(".infoG").addClass("hide");
        $(".infoG").empty();
      });
      $(document).on(
        "click",
        ".crear_compuesto, .editar_compuesto",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_compuesto");
          var nombre = $("#nombreC").val();
          var grupo = $("#grupoC").val();
          var descripcion = $("#descripcionC").val();
          var precio = $("#precioC").val();
          var tipoG = $("#tipoC").val();
          var inventario = $("#boxI").is(":checked") ? "S" : "N";
          var id = esCrear
            ? null
            : $(this).parents().find("#EidCompuesto")[0].value;
          var url = "./tables/cafe/Inventario/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_compuesto",
                nombre: nombre,
                grupo: grupo,
                descripcion: descripcion,
                precio: precio,
                tipoG: tipoG,
                inventario: inventario,
              }
            : {
                tipo: "editar_compuesto",
                id: id,
                nombre: nombre,
                grupo: grupo,
                descripcion: descripcion,
                precio: precio,
                tipoG: tipoG,
                inventario: inventario,
              };
          if (nombre.length < 2) {
            mostrarNotificacion("Ingrese nombre correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (descripcion.length < 1) {
            mostrarNotificacion("Ingrese descripción");
            $(this).prop("disabled", false);
            return;
          }
          if (isNaN(precio)) {
            mostrarNotificacion("Precio deben ser valores numéricos");
            return false;
          }
          precio = parseFloat(precio);
          if (precio < 0) {
            mostrarNotificacion("Ingrese precio");
            $(this).prop("disabled", false);
            return;
          }
          $(".page-spinner-loader").removeClass("hide");
          $("#alerta").load(
            url,
            data,
            function () {
              $(".page-spinner-loader").addClass("hide");
              // Re-habilitar el botón una vez que se complete la operación asíncrona
              $(this).prop("disabled", false);
            }.bind(this)
          );
        }
      );

      $(document).on("click", ".crearItemCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Inventario/crear_item_compuesto.php", {
          tipo: "itemCompuesto",
        });
      });

      $(document).on("click", ".editarItemCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idItemCompuesto").text();
        cargarModal(
          this,
          "./tables/cafe/Inventario/editar_item_compuesto.php",
          { var1: id }
        );
      });
      $(document).on(
        "click",
        ".crear_item_compuesto, .editar_item_compuesto",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_item_compuesto");
          var id_item = $("#itemC").val();
          var id_compuesto = $("#table-item-compuesto").attr(
            "data-id_compuesto"
          );
          var cantidad = $("#cantidadC").val();
          var id = esCrear
            ? null
            : $(this).parents().find("#EidItemCompuesto")[0].value;
          var url = "./tables/cafe/Inventario/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_item_compuesto",
                id_item: id_item,
                id_compuesto: id_compuesto,
                cantidad: cantidad,
              }
            : {
                tipo: "editar_item_compuesto",
                id: id,
                id_compuesto: id_compuesto,
                cantidad: cantidad,
              };

          if (isNaN(cantidad)) {
            mostrarNotificacion("Cantidad deben ser valores numéricos");
            return false;
          }
          cantidad = parseFloat(cantidad);
          if (cantidad < 0) {
            mostrarNotificacion("Ingrese cantidad");
            $(this).prop("disabled", false);
            return;
          }
          $(".page-spinner-loader").removeClass("hide");
          $("#alerta").load(
            url,
            data,
            function () {
              $(".page-spinner-loader").addClass("hide");
              // Re-habilitar el botón una vez que se complete la operación asíncrona
              $(this).prop("disabled", false);
            }.bind(this)
          );
        }
      );

      function cambiarEstado(checkbox, tipo, tipo2, tipoEntidad) {
        var confirmacion;
        var esEstado =
          tipo2 !== "deleteItem" &&
          tipo2 !== "deleteCompuesto" &&
          tipo2 !== "deleteItemCompuesto" &&
          tipo2 !== "deleteGrupo" &&
          tipo2 !== "deleteProveedor"; // esEstado es true si tipo2 no es 'deleteItem'
        var idSelector =
          tipoEntidad === "Item"
            ? "#idItem"
            : tipoEntidad === "Compuesto"
            ? "#idCompuesto"
            : tipoEntidad === "Proveedor"
            ? "#idProveedor"
            : tipoEntidad === "Grupo"
            ? "#idGrupo"
            : "#idItemCompuesto";
        var id = checkbox.closest("tr").find(idSelector).text();
        var estado = "A"; // Estado por defecto

        if (esEstado) {
          confirmacion = "¿Estás seguro de cambiar el " + tipo + "?";
          if (tipo2 === "boxIv") {
            estado = checkbox.is(":checked") ? "S" : "N";
          } else {
            estado = checkbox.is(":checked") ? "A" : "I";
          }
        } else {
          confirmacion = "¿Estás seguro de eliminar este elemento?";
        }

        if (!confirm(confirmacion)) {
          if (esEstado) {
            // Revertir el cambio si el usuario no confirma y no es un cambio forzado por clic en span, y es un cambio de estado
            checkbox.prop("checked", !checkbox.prop("checked"));
          }
          return;
        }

        var url = "./tables/cafe/Inventario/alerta.php";
        var data = esEstado
          ? {
              tipo:
                tipoEntidad === "Item"
                  ? "estadoItem"
                  : tipoEntidad === "Compuesto"
                  ? "estadoCompuesto"
                  : tipoEntidad === "Proveedor"
                  ? "estadoProveedor"
                  : tipoEntidad === "Grupo"
                  ? "estadoGrupo"
                  : "estadoItemCompuesto",
              id: id,
              tipo2: tipo2,
              estado: estado,
            }
          : {
              tipo:
                tipoEntidad === "Item"
                  ? "eliminarItem"
                  : tipoEntidad === "Compuesto"
                  ? "eliminarCompuesto"
                  : tipoEntidad === "Grupo"
                  ? "eliminarGrupo"
                  : tipoEntidad === "Proveedor"
                  ? "eliminarProveedor"
                  : "eliminarItemCompuesto",
              id: id,
            };

        // Mostrar spinner/loader y enviar datos al servidor
        $(".page-spinner-loader").removeClass("hide");
        $("#alerta").load(url, data, function () {
          $(".page-spinner-loader").addClass("hide");
          if (!esEstado) {
            checkbox.closest("tr").remove(); // Eliminar la fila si la eliminación fue exitosa
          }
        });
      }

      $(document).on("click", ".eliminarGrupo", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteGrupo", "Grupo");
      });
      $(document).on("change", "#boxG", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "boxG", "Grupo");
      });

      $(document).on("click", ".eliminarProveedor", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteProveedor", "Proveedor");
      });
      $(document).on("change", "#boxP", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "boxP", "Proveedor");
      });

      $(document).on("click", ".eliminarItem", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteItem", "Item");
      });
      $(document).on("change", "#boxE", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "boxE", "Item");
      });
      $(document).on("change", "#boxEV", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado de venta", "boxEV", "Item");
      });
      $(document).on("change", "#boxIv", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado de inventario", "boxIv", "Item");
      });

      $(document).on("click", ".eliminarCompuesto", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteCompuesto", "Compuesto");
      });
      $(document).on("change", "#boxCE", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "boxCE", "Compuesto");
      });
      $(document).on("change", "#boxCEV", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado de venta", "boxCEV", "Compuesto");
      });
      $(document).on("change", "#boxCIv", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado de inventario", "boxCIv", "Compuesto");
      });

      $(document).on("click", ".eliminarItemCompuesto", function (e) {
        e.preventDefault();
        cambiarEstado(
          $(this),
          "estado",
          "deleteItemCompuesto",
          "ItemCompuesto"
        );
      });
      $(document).on("change", "#boxIC", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "boxIC", "ItemCompuesto");
      });
    });
    $scope.$on("$destroy", function () {
      // Destruye todas las instancias de CKEDITOR
      let editor = window["CKEDITOR"];
      for (var name in editor.instances) {
        if (editor.instances.hasOwnProperty(name)) {
          editor.instances[name].destroy(true);
        }
      }

      // Destruye todas las instancias de DataTables
      var tables = $.fn.dataTable.fnTables(true);
      $(tables).each(function () {
        $(this).dataTable().fnDestroy();
      });

      $(document).off("click");
      $(document).off("change");
    });
  },
]);

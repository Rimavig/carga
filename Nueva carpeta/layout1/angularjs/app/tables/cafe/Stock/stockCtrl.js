"use strict";

angular.module("newApp").controller("stockCtrl", [
  "$scope",
  "pluginsService",
  function ($scope, pluginsService) {
    $(document).ready(function () {
      // Función para inicializar o recargar una tabla específica con DataTable
      function initOrReloadTable(
        tipo,
        columnDefs = [],
        customCellStyling = null
      ) {
        $("#cafe_" + tipo).load(
          "./tables/cafe/Stock/" + tipo + ".php",
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
            var ajaxUrl = "tables/cafe/Stock/" + tipo + "_data.php";
            var order = [];
            if (tipo === "ingreso" || tipo === "egreso") {
              order = [[5, "desc"]];
            }
            if (tipo === "ordenCompra") {
              order = [[7, "desc"]];
            }
            var ajaxData = function (d) {
              if (tipo === "ingreso") {
                // Extiende el objeto d con las fechas inicial y final
                $.extend(d, {
                  fechaInicial: $("#fechaII").val(),
                  fechaFinal: $("#fechaFI").val(),
                });
              }
              if (tipo === "egreso") {
                // Extiende el objeto d con las fechas inicial y final
                $.extend(d, {
                  fechaInicial: $("#fechaIE").val(),
                  fechaFinal: $("#fechaFE").val(),
                });
              }
            };

            // Verifica si DataTables ya está inicializado
            if ($.fn.DataTable.isDataTable("#table-" + tipo)) {
              // Recarga la tabla si ya está inicializada
              var table = $("#table-" + tipo).DataTable();
              table.ajax.reload(null, false); // 'null' para mantener la posición de paginación, 'false' para que no haga reset
              // Llamar a columns.adjust() después de recargar los datos y cuando la tabla sea visible
              setTimeout(function () {
                table.columns.adjust().draw(); // draw() es opcional dependiendo de si necesitas redibujar la tabla
              }, 0);
            } else {
              // Inicializa DataTables con la configuración
              $("#table-" + tipo).DataTable({
                language: {
                  url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
                },
                ajax: {
                  url: ajaxUrl,
                  type: "POST",
                  data: ajaxData,
                },
                ordering: true,
                order: order,
                autoWidth: false,
                destroy: true, // Esta opción ya está implícita al usar .DataTable() en un selector previamente inicializado
                dom:
                  "<'row'<'col-12 col-md-4'l><'col-12 col-md-4 text-center'B><'col-12 col-md-4'f>>" +
                  "<'row'<'col-12'tr>>" +
                  "<'row'<'col-12 col-md-5'i><'col-12 col-md-7'p>>",
                  buttons: buttonsConfig,
                createdRow: function (row, data, dataIndex) {
                  if (typeof customCellStyling === "function") {
                    customCellStyling(row, data, dataIndex);
                  }
                },
                aoColumnDefs: columnDefs,
                initComplete: function (settings, json) {
                  // Ajustar las columnas una vez que DataTables haya sido inicializado y los datos cargados
                  this.api().columns.adjust();
                },
              });
            }
          }
        );
      }
      // Función mejorada para recargar las tablas
      function reloadTables() {
        // Define las configuraciones específicas de columnas para cada tabla
        let IngresoColumnDefs = [
          {
            targets: [0],
            createdCell: (td) => $(td).attr("id", "idIngreso"),
            className: "hide_column",
          },
        ];
        let proveedorColumnDefs = [
          {
            targets: [0],
            createdCell: (td) => $(td).attr("id", "idProveedor"),
            className: "hide_column",
          },
        ];
        let OrdenCompraColumnDefs = [
          {
            targets: [0,1],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idOrdenCompra");
              }
            },
            className: "hide_column",
          },
        ];
        // Inicializa o recarga las tablas
        initOrReloadTable("ordenCompra", OrdenCompraColumnDefs, null);
        initOrReloadTable("ingreso", IngresoColumnDefs, null);
        initOrReloadTable("egreso", IngresoColumnDefs, null);
        initOrReloadTable(
          "proveedor",
          proveedorColumnDefs,
          customCellStylingProveedor
        );
      }
      function customCellStylingProveedor(row, data, dataIndex) {
        var cell = $("td", row).eq(4); // Asumiendo que quieres estilizar la cuarta columna
        var content = cell.html();
        var scrollableDiv =
          '<div style="max-height:100px; overflow-y:auto;">' +
          content +
          "</div>";
        cell.html(scrollableDiv);
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
          var ruc = $("#proveedor").find("option:first").data("ruc");
          $("#ruc").val(ruc !== undefined ? ruc : 0);
          $("#proveedor").change(function () {
            var ruc = $(this)
              .find("option:selected")
              .data("ruc");
            $("#ruc").val(ruc || 0);
          });
        });
      }
      function initOrReloadTableSecundaria(tipo, columnDefs = [], id) {
        $(".infoG").removeClass("hide");
        $(".inventario").addClass("hide");
        $(".infoG").load(
          "./tables/cafe/Stock/" + tipo + ".php?id=" + id,
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
                  url: "tables/cafe/Stock/" + tipo + "_data.php",
                  type: "POST", // Usar POST o GET según sea necesario
                  data: {
                    id_ordenCompra: id,
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
              $("#table-" + tipo).attr("data-id_ordenCompra", id);
            }
          }
        );
      }
      $(document).on("click", ".buscarI", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var fechaInicial = $("#fechaII").val();
        var fechaFinal = $("#fechaFI").val();

        // Convierte las fechas a objetos Date para compararlas
        var fechaInicialDate = new Date(fechaInicial);
        var fechaFinalDate = new Date(fechaFinal);

        // Verifica si la fecha inicial es mayor que la fecha final
        if (fechaInicialDate > fechaFinalDate) {
          mostrarNotificacion("Ingrese fechas corrects");
          return; // Detiene la ejecución adicional
        }
        var table = $("#table-ingreso").DataTable();
        table.ajax.reload();
      });
      $(document).on("click", ".buscarE", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var fechaInicial = $("#fechaIE").val();
        var fechaFinal = $("#fechaFE").val();

        // Convierte las fechas a objetos Date para compararlas
        var fechaInicialDate = new Date(fechaInicial);
        var fechaFinalDate = new Date(fechaFinal);

        // Verifica si la fecha inicial es mayor que la fecha final
        if (fechaInicialDate > fechaFinalDate) {
          mostrarNotificacion("Ingrese fechas corrects");
          return; // Detiene la ejecución adicional
        }
        var table = $("#table-egreso").DataTable();
        table.ajax.reload();
      });
      $(document).on("click", ".crearProveedor", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Stock/crear_proveedor.php", {
          tipo: "proveedor",
        });
      });
      $(document).on("click", ".editarProveedor", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idProveedor").text();
        cargarModal(this, "./tables/cafe/Stock/editar_proveedor.php", {
          var1: id,
        });
      });
      $(document).on(
        "click",
        ".crear_proveedor, .editar_proveedor",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_proveedor");
          var nombre = $(this).parents().find("#nombreP")[0].value;
          var ruc = $(this).parents().find("#rucP")[0].value;
          var direccion = $(this).parents().find("#direccionP")[0].value;
          var correo = $(this).parents().find("#correoP")[0].value;
          var descripcion = $(this).parents().find("#descripcionP")[0].value;
          var id = esCrear
            ? null
            : $(this).parents().find("#EidProveedor")[0].value;
          var url = "./tables/cafe/Stock/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_proveedor",
                nombre: nombre,
                ruc: ruc,
                direccion: direccion,
                correo: correo,
                descripcion: descripcion,
              }
            : {
                tipo: "editar_proveedor",
                id: id,
                nombre: nombre,
                ruc: ruc,
                direccion: direccion,
                correo: correo,
                descripcion: descripcion,
              };
          if (nombre.length < 2) {
            mostrarNotificacion("Ingrese nombre correcto");
            $(this).prop("disabled", false);
            return;
          }
          var rucRegex = /^[0-9]{10,13}$/;
          if (!rucRegex.test(ruc)) {
            mostrarNotificacion("Ingrese un RUC correcto");
            $(this).prop("disabled", false);
            return;
          }
          var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!correoRegex.test(correo)) {
            mostrarNotificacion("Ingrese un correo electrónico válido");
            $(this).prop("disabled", false);
            return;
          }
          if (direccion.length < 2) {
            mostrarNotificacion("Ingrese una direccion adecuada");
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

      $(document).on("click", ".crearIngresoItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Stock/crear_ingresoItem.php", {
          tipo: "IngresoItem",
        });
      });
      $(document).on("click", ".editarIngresoItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idIngreso").text();
        cargarModal(this, "./tables/cafe/Stock/editar_ingresoItem.php", {
          var1: id,
        });
      });
      $(document).on(
        "click",
        ".crear_ingresoItem, .editar_ingresoItem",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_ingresoItem");
          var descripcion = $("#descripcion").val();
          var item = $("#grupoC").val();
          var cantidad = $("#cantidad").val();
          var tipo2 = "II";
          var id = esCrear
            ? null
            : $(this).parents().find("#EidIngreso")[0].value;
          var url = "./tables/cafe/Stock/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_ingresoItem",
                item: item,
                descripcion: descripcion,
                cantidad: cantidad,
                tipo2: tipo2,
              }
            : {
                tipo: "editar_ingresoItem",
                id: id,
                item: item,
                descripcion: descripcion,
                cantidad: cantidad,
                tipo2: tipo2,
              };
          if (descripcion.length < 2) {
            mostrarNotificacion("Ingrese descripción correcta");
            $(this).prop("disabled", false);
            return;
          }
          if (isNaN(cantidad)) {
            mostrarNotificacion("Cantidad deben ser valor numérico");
            return false;
          }
          cantidad = parseFloat(cantidad);
          if (cantidad <= 0) {
            mostrarNotificacion("Ingrese Cantidad correcta");
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
      $(document).on("click", ".crearIngresoCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Stock/crear_ingresoCompuesto.php", {
          tipo: "IngresoCompuesto",
        });
      });
      $(document).on("click", ".editarIngresoCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idIngreso").text();
        cargarModal(this, "./tables/cafe/Stock/editar_ingresoCompuesto.php", {
          var1: id,
        });
      });
      $(document).on(
        "click",
        ".crear_ingresoCompuesto, .editar_ingresoCompuesto",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_ingresoCompuesto");
          var descripcion = $("#descripcion").val();
          var compuesto = $("#grupoC").val();
          var cantidad = $("#cantidad").val();
          var tipo2 = "IC";
          var id = esCrear
            ? null
            : $(this).parents().find("#EidIngreso")[0].value;
          var url = "./tables/cafe/Stock/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_ingresoCompuesto",
                compuesto: compuesto,
                descripcion: descripcion,
                cantidad: cantidad,
                tipo2: tipo2,
              }
            : {
                tipo: "editar_ingresoCompuesto",
                id: id,
                compuesto: compuesto,
                descripcion: descripcion,
                cantidad: cantidad,
                tipo2: tipo2,
              };
          if (descripcion.length < 2) {
            mostrarNotificacion("Ingrese descripción correcta");
            $(this).prop("disabled", false);
            return;
          }
          if (isNaN(cantidad)) {
            mostrarNotificacion("Cantidad deben ser valor numérico");
            return false;
          }
          cantidad = parseFloat(cantidad);
          if (cantidad <= 0) {
            mostrarNotificacion("Ingrese Cantidad correcta");
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
      $(document).on("click", ".crearEgresoItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Stock/crear_egresoItem.php", {
          tipo: "EgresoItem",
        });
      });
      $(document).on("click", ".editarEgresoItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idEgreso").text();
        cargarModal(this, "./tables/cafe/Stock/editar_egresoItem.php", {
          var1: id,
        });
      });
      $(document).on(
        "click",
        ".crear_egresoItem, .editar_egresoItem",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_egresoItem");
          var descripcion = $("#descripcion").val();
          var item = $("#grupoC").val();
          var cantidad = $("#cantidad").val();
          var tipo2 = "II";
          var id = esCrear
            ? null
            : $(this).parents().find("#EidEgreso")[0].value;
          var url = "./tables/cafe/Stock/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_egresoItem",
                item: item,
                descripcion: descripcion,
                cantidad: cantidad,
                tipo2: tipo2,
              }
            : {
                tipo: "editar_egresoItem",
                id: id,
                item: item,
                descripcion: descripcion,
                cantidad: cantidad,
                tipo2: tipo2,
              };
          if (descripcion.length < 2) {
            mostrarNotificacion("Ingrese descripción correcta");
            $(this).prop("disabled", false);
            return;
          }
          if (isNaN(cantidad)) {
            mostrarNotificacion("Cantidad deben ser valor numérico");
            return false;
          }
          cantidad = parseFloat(cantidad);
          if (cantidad <= 0) {
            mostrarNotificacion("Ingrese Cantidad correcta");
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
      $(document).on("click", ".crearEgresoCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Stock/crear_egresoCompuesto.php", {
          tipo: "EgresoCompuesto",
        });
      });
      $(document).on("click", ".editarEgresoCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idEgreso").text();
        cargarModal(this, "./tables/cafe/Stock/editar_egresoCompuesto.php", {
          var1: id,
        });
      });
      $(document).on(
        "click",
        ".crear_egresoCompuesto, .editar_egresoCompuesto",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_egresoCompuesto");
          var descripcion = $("#descripcion").val();
          var compuesto = $("#grupoC").val();
          var cantidad = $("#cantidad").val();
          var tipo2 = "EC";
          var id = esCrear
            ? null
            : $(this).parents().find("#EidEgreso")[0].value;
          var url = "./tables/cafe/Stock/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_egresoCompuesto",
                compuesto: compuesto,
                descripcion: descripcion,
                cantidad: cantidad,
                tipo2: tipo2,
              }
            : {
                tipo: "editar_egresoCompuesto",
                id: id,
                compuesto: compuesto,
                descripcion: descripcion,
                cantidad: cantidad,
                tipo2: tipo2,
              };
          if (descripcion.length < 2) {
            mostrarNotificacion("Ingrese descripción correcta");
            $(this).prop("disabled", false);
            return;
          }
          if (isNaN(cantidad)) {
            mostrarNotificacion("Cantidad deben ser valor numérico");
            return false;
          }
          cantidad = parseFloat(cantidad);
          if (cantidad <= 0) {
            mostrarNotificacion("Ingrese Cantidad correcta");
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
      $(document).on("click", ".crearOrdenCompra", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Stock/crear_ordenCompra.php", {
          tipo: "ordenCompra",
        });
      });
      $(document).on("click", ".editarOrdenCompra", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idOrdenCompra").text();
        cargarModal(this, "./tables/cafe/Stock/editar_ordenCompra.php", {
          var1: id,
        });
      });
      $(document).on("click", ".EscogerOrdenCompra", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        let itemCompuestoColumnDefs = [
          {
            targets: [0, 1, 2],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idOrdenCompraItem");
              }
              if (col === 2) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idOrdenCompra");
              }
            },
            className: "hide_column",
          },
        ];
        var id = $(this).closest("tr").find("#idOrdenCompra").text();
        initOrReloadTableSecundaria(
          "ordenCompra_item",
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
      $(document).on("click", ".cerrar_compra", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
       // $(".inventario").removeClass("hide");
        //$(".infoG").addClass("hide");
       // $(".infoG").empty();
        cambiarEstado($(this), "finalizar la compra", "A", "OrdenCompra");
      });
      $(document).on(
        "click",
        ".crear_ordenCompra, .editar_ordenCompra",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_ordenCompra");
          var factura = $("#factura").val();
          var proveedor = $("#proveedor").val();
          var descripcion = $("#descripcion").val();
          var precioT = $("#precioT").val();
          var id = esCrear
            ? null
            : $(this).parents().find("#EidOrdenCompra")[0].value;
          var url = "./tables/cafe/Stock/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_ordenCompra",
                factura: factura,
                proveedor: proveedor,
                descripcion: descripcion,
                precioT: precioT,
              }
            : {
                tipo: "editar_ordenCompra",
                id: id,
                factura: factura,
                proveedor: proveedor,
                descripcion: descripcion,
                precioT: precioT,
              };
          if (factura.length < 2) {
            mostrarNotificacion("Ingrese factura correcta");
            $(this).prop("disabled", false);
            return;
          }
          if (descripcion.length < 1) {
            mostrarNotificacion("Ingrese descripción");
            $(this).prop("disabled", false);
            return;
          }
          if (isNaN(precioT)) {
            mostrarNotificacion("Total de compra deben ser valores numéricos");
            return false;
          }
          precioT = parseFloat(precioT);
          if (precioT <= 0) {
            mostrarNotificacion("Ingrese Total de compra");
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
      $(document).on("click", ".crearOrdenCompraItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Stock/crear_ordenCompra_item.php", {
          tipo: "OrdenCompraItem",
        });
      });

      $(document).on("click", ".editarOrdenCompraItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idOrdenCompraItem").text();
        cargarModal(
          this,
          "./tables/cafe/Stock/editar_ordenCompra_item.php",
          { var1: id }
        );
      });
      $(document).on(
        "click",
        ".crear_ordenCompra_item, .editar_ordenCompra_item",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_ordenCompra_item");
          var id_item = $("#itemC").val();
          var id_orden_compra = $("#table-ordenCompra_item").attr(
            "data-id_ordenCompra"
          );
          var cantidad = $("#cantidad").val();
          var precio = $("#precio").val();
          var descripcion = $("#descripcion").val();
          var id = esCrear
            ? null
            : $(this).parents().find("#EidOrdenCompraItem")[0].value;
          var url = "./tables/cafe/Stock/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_ordenCompra_item",
                id_item: id_item,
                id_orden_compra: id_orden_compra,
                cantidad: cantidad,
                precio: precio,
                descripcion: descripcion,
              }
            : {
                tipo: "editar_ordenCompra_item",
                id: id,
                id_orden_compra: id_orden_compra,
                cantidad: cantidad,
                precio: precio,
                descripcion: descripcion,
              };

          if (isNaN(cantidad) || isNaN(precio)) {
            mostrarNotificacion("Cantidad y Precio deben ser valores numéricos");
            return false;
          }
          cantidad = parseFloat(cantidad);
          if (cantidad <= 0) {
            mostrarNotificacion("Ingrese cantidad");
            $(this).prop("disabled", false);
            return;
          }
          precio = parseFloat(precio);
          if (precio <= 0) {
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
      function cambiarEstado(checkbox, tipo, tipo2, tipoEntidad) {
        var confirmacion;
        var esEstado =
          tipo2 !== "deleteIngresoItem" &&
          tipo2 !== "deleteIngresoCompuesto" &&
          tipo2 !== "deleteEgresoItem" &&
          tipo2 !== "deleteOrdenCompraItem" &&
          tipo2 !== "deleteOrdenCompra" &&
          tipo2 !== "deleteEgresoCompuesto" &&
          tipo2 !== "deleteProveedor"; // esEstado es true si tipo2 no es 'deleteIngresoItem'
        var idSelector =
          tipoEntidad === "IngresoItem" ||
          tipoEntidad === "EgresoItem" ||
          tipoEntidad === "IngresoCompuesto" ||
          tipoEntidad === "EgresoCompuesto"
            ? "#idIngreso"
            : tipoEntidad === "OrdenCompraItem"
            ? "#idOrdenCompraItem"
            : tipoEntidad === "OrdenCompra"
            ? "#idOrdenCompra"
            : "#idProveedor";
          if(tipoEntidad === "OrdenCompra"){
            if(tipo2 !== "deleteOrdenCompra"){
              var id = $("#table-ordenCompra_item").attr(
                "data-id_ordenCompra"
              );
            }else{
              var id = checkbox.closest("tr").find(idSelector).text();
            }
            
          }else{
            var id = checkbox.closest("tr").find(idSelector).text();
          }
          
        var estado = "A"; // Estado por defecto

        if (esEstado) {
          if(tipoEntidad === "OrdenCompra"){
            confirmacion = "¿Estás seguro finalizar la compra";
          }else{
            confirmacion = "¿Estás seguro de cambiar el " + tipo + "?";
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

        var url = "./tables/cafe/Stock/alerta.php";
        var data = esEstado
          ? {
              tipo:
                tipoEntidad === "IngresoItem"
                  ? "estadoIngresoItem"
                  : tipoEntidad === "IngresoCompuesto"
                  ? "estadoIngresoCompuesto"
                  : tipoEntidad === "Proveedor"
                  ? "estadoProveedor"
                  : tipoEntidad === "OrdenCompra"
                  ? "estadoOrdenCompra"
                  : "estadoIngreso",
              id: id,
              tipo2:
                tipoEntidad === "IngresoItem"
                  ? "I"
                  : tipoEntidad === "IngresoCompuesto"
                  ? "C"
                  : tipoEntidad === "Proveedor"
                  ? tipo2
                  : "G",
              estado: estado,
            }
          : {
              tipo:
                tipoEntidad === "IngresoItem"
                  ? "eliminarIngresoItem"
                  : tipoEntidad === "IngresoCompuesto"
                  ? "eliminarIngresoCompuesto"
                  : tipoEntidad === "EgresoItem"
                  ? "eliminarEgresoItem"
                  : tipoEntidad === "EgresoCompuesto"
                  ? "eliminarEgresoCompuesto"
                  : tipoEntidad === "OrdenCompraItem"
                  ? "eliminarOrdenCompraItem"
                  : tipoEntidad === "OrdenCompra"
                  ? "eliminarOrdenCompra"
                  : "eliminarProveedor",
              tipo2:
                tipoEntidad === "IngresoItem"
                  ? "I"
                  : tipoEntidad === "IngresoCompuesto"
                  ? "C"
                  : tipoEntidad === "Proveedor"
                  ? tipo2
                  : "G",
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

      $(document).on("click", ".eliminarIngreso", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteIngreso", "Ingreso");
      });
      $(document).on("click", ".eliminarEgreso", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteEgreso", "Egreso");
      });
      $(document).on("change", "#boxG", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "boxG", "Ingreso");
      });
      $(document).on("click", ".eliminarProveedor", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteProveedor", "Proveedor");
      });
      $(document).on("change", "#boxP", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "boxP", "Proveedor");
      });

      $(document).on("click", ".eliminarIngresoItem", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteIngresoItem", "IngresoItem");
      });
      $(document).on("click", ".eliminarEgresoItem", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteEgresoItem", "EgresoItem");
      });
      $(document).on("change", "#boxI", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "I", "IngresoItem");
      });

      $(document).on("click", ".eliminarIngresoCompuesto", function (e) {
        e.preventDefault();
        cambiarEstado(
          $(this),
          "estado",
          "deleteIngresoCompuesto",
          "IngresoCompuesto"
        );
      });
      $(document).on("click", ".eliminarEgresoCompuesto", function (e) {
        e.preventDefault();
        cambiarEstado(
          $(this),
          "estado",
          "deleteEgresoCompuesto",
          "EgresoCompuesto"
        );
      });
      $(document).on("click", ".eliminarOrdenCompraItem", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteOrdenCompraItem", "OrdenCompraItem");
      });
      $(document).on("click", ".eliminarOrdenCompra", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteOrdenCompra", "OrdenCompra");
      });
      $(document).on("change", "#boxC", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "C", "IngresoCompuesto");
      });
      $(document).on("change", "#boxPG", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "G", "Ingreso");
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

      // Desvincula todos los eventos 'click' de una sola vez
      $(document).off("click");
      $(document).off("change");
    });
  },
]);

"use strict";

angular.module("newApp").controller("compraCtrl", [
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
          "./tables/cafe/Compra/" + tipo + ".php",
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
            var ajaxUrl = "tables/cafe/Compra/" + tipo + "_data.php";
            var order = [];
            if (tipo === "ingreso" || tipo === "egreso") {
              order = [[5, "desc"]];
            }
            if (tipo === "precuentaGeneral" || tipo === "precuentaGeneralA") {
              order = [[10, "desc"]];
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
        /* let IngresoColumnDefs = [
          {
            targets: [0],
            createdCell: (td) => $(td).attr("id", "idIngreso"),
            className: "hide_column",
          },
        ]; */
        let precuentaGeneralColumnDefs = [
          {
            targets: [0],
            createdCell: (td) => $(td).attr("id", "idPrecuentaGeneral"),
            className: "hide_column",
          },
        ];
        /* let PrecuentaGeneralColumnDefs = [
          {
            targets: [0,1],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idPrecuentaGeneral");
              }
            },
            className: "hide_column",
          },
        ]; */
        // Inicializa o recarga las tablas
        initOrReloadTable("precuentaGeneral", precuentaGeneralColumnDefs, null);
        initOrReloadTable("precuentaGeneralA", precuentaGeneralColumnDefs, null);
        /*         initOrReloadTable(
          "proveedor",
          proveedorColumnDefs,
          customCellStylingProveedor
        ); */
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
      function calcularPrecioTotal() {
        // Obtiene los valores de los campos como números flotantes
        var precioBase = parseFloat($("#precioU").val());
        var cantidad = parseFloat($("#cantidad").val());

        // Calcula el precio total con la fórmula corregida
        var precioTotal = precioBase * cantidad;

        // Actualiza el valor del campo de Precio Total limitando a 2 decimales
        $("#precioT").val(precioTotal.toFixed(2));
      }
      function cargarModal(selector, url, data = {}) {
        $(".page-spinner-loader").removeClass("hide");
        $("#MCafe").load(url, data, function () {
          $(".page-spinner-loader").addClass("hide");
          $("#MCafe").modal("show");
          if (!url.includes("facturacion") || !url.includes("usuarios")) {
            inputSelect();
          }
          var precioInicial = $("#grupoC").find("option:first").data("precio");
          $("#precioU").val(
            precioInicial !== undefined
              ? parseFloat(precioInicial).toFixed(2)
              : "0.00"
          );
          calcularPrecioTotal(); // Asegúrate de llamarla aquí para actualizar al inicio

          // Actualiza el precio y recalcula el precio total cuando cambia la selección del compuesto
          $("#grupoC").change(function () {
            var precioSeleccionado = $(this)
              .find("option:selected")
              .data("precio");
            $("#precioU").val(
              parseFloat(precioSeleccionado).toFixed(2) || "0.00"
            );
            calcularPrecioTotal();
          });
          $("#cantidad").on("input change", calcularPrecioTotal);
        });
      }
      function initOrReloadTableSecundaria(tipo, columnDefs = [], id) {
        $(".infoG").removeClass("hide");
        $(".inventario").addClass("hide");
        $(".infoG").load(
          "./tables/cafe/Compra/" + tipo + ".php?id=" + id,
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
                  url: "tables/cafe/Compra/" + tipo + "_data.php",
                  type: "POST", // Usar POST o GET según sea necesario
                  data: {
                    id_precuentaGeneral: id,
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
              $("#table-" + tipo).attr("data-id_precuentaGeneral", id);

              $("#totalCaja").load(
                "./tables/cafe/Compra/total.php?id=" + id,
                function () {}
              );
            }
          }
        );
      }
      function initOrReloadTableSecundaria2(
        tipo,
        tipo2,
        columnDefs = [],
        columnDefs2 = [],
        id
      ) {
        $(".infoG").removeClass("hide");
        $(".inventario").addClass("hide");
        $(".infoG").load(
          "./tables/cafe/Compra/" + tipo + ".php?id=" + id,
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
                  url: "tables/cafe/Compra/" + tipo + "_data.php",
                  type: "POST", // Usar POST o GET según sea necesario
                  data: {
                    id_precuentaGeneral: id,
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
              $("#table-" + tipo).attr("data-id_precuentaGeneral", id);
              if (tipo === "precuentaGeneral_item_ver") {
                $("#UsuarioCaja").load(
                  "./tables/cafe/Compra/caja-usuario_general.php",
                  { var1: id },
                  function () {}
                );
              }

              $("#totalCaja").load(
                "./tables/cafe/Compra/total.php?id=" + id,
                function () {}
              );
            }
            if ($.fn.DataTable.isDataTable("#table-" + tipo2)) {
              // Recarga la tabla si ya está inicializada
              $("#table-" + tipo2)
                .DataTable()
                .ajax.reload();
            } else {
              // Inicializa DataTables con la configuración
              $("#table-" + tipo2).DataTable({
                language: {
                  url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
                },
                ajax: {
                  url: "tables/cafe/Compra/" + tipo2 + "_data.php",
                  type: "POST", // Usar POST o GET según sea necesario
                  data: {
                    id_precuentaGeneral: id,
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
                aoColumnDefs: columnDefs2,
              });
              $("#table-" + tipo2).attr("data-id_precuentaGeneral", id);
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
          $(this).prop("disabled", false);
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
          $(this).prop("disabled", false);
          return; // Detiene la ejecución adicional
        }
        var table = $("#table-egreso").DataTable();
        table.ajax.reload();
      });
      $(document).on("click", ".crearProveedor", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Compra/crear_proveedor.php", {
          tipo: "proveedor",
        });
      });
      $(document).on("click", ".editarProveedor", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idProveedor").text();
        cargarModal(this, "./tables/cafe/Compra/editar_proveedor.php", {
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
          var url = "./tables/cafe/Compra/alerta.php";
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

      $(document).on("click", ".crearPrecuentaGeneral", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Compra/crear_precuentaGeneral.php", {
          tipo: "precuentaGeneral",
        });
      });
      $(document).on("click", ".editarPrecuentaGeneral", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idPrecuentaGeneral").text();
        cargarModal(this, "./tables/cafe/Compra/editar_precuentaGeneral.php", {
          var1: id,
        });
      });
      $(document).on("click", ".EscogerPrecuentaGeneral", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        let itemCompuestoColumnDefs = [
          {
            targets: [0, 1],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idPrecuentaGeneralItem");
              }
              if (col === 1) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idPrecuentaGeneral");
              }
            },
            className: "hide_column",
          },
        ];
        let pagosColumnDefs = [
          {
            targets: [0],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idPago");
              }
            },
            className: "hide_column",
          },
        ];
        var id = $(this).closest("tr").find("#idPrecuentaGeneral").text();
        initOrReloadTableSecundaria2(
          "precuentaGeneral_item",
          "pagos",
          itemCompuestoColumnDefs,
          pagosColumnDefs,
          id
        );
      });
      $(document).on("click", ".EscogerPrecuentaGeneralB", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        let itemCompuestoColumnDefs = [
          {
            targets: [0, 1],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idPrecuentaGeneralItem");
              }
              if (col === 1) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idPrecuentaGeneral");
              }
            },
            className: "hide_column",
          },
        ];
        let pagosColumnDefs = [
          {
            targets: [0],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idPago");
              }
            },
            className: "hide_column",
          },
        ];
        var id = $(this).closest("tr").find("#idPrecuentaGeneral").text();
        initOrReloadTableSecundaria2(
          "precuentaGeneral_item_ver",
          "pagos",
          itemCompuestoColumnDefs,
          pagosColumnDefs,
          id
        );
      });
      $(document).on("click", ".regresar", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var table = $("#table-precuentaGeneral").DataTable();
        table.ajax.reload();
        $(".inventario").removeClass("hide");
        $(".infoG").addClass("hide");
        $(".infoG").empty();
      });
      $(document).on("click", ".insertCompra", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var idFacturacionG = $(this).parents().find("#idFacturacionG")[0].value;
        var correo = $(this).parents().find("#correoG")[0].value;
        var band = true;
        var id_precuenta_general = $("#table-precuentaGeneral_item").attr(
          "data-id_precuentaGeneral"
        );
        var emailRegex =
          /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test(correo)) {
          mostrarNotificacion("Ingrese correo correcto");
          $(this).prop("disabled", false);
          return;
        }
        if (idFacturacionG == "") {
          mostrarNotificacion("Seleccione un Cliente");
          $(this).prop("disabled", false);
          return;
        }
        if (band) {
          var idUsuario = $(this).parents().find("#idUsuario")[0].value;
          $(".page-spinner-loader").removeClass("hide");
          $("#alerta").load(
            "./tables/cafe/Compra/alerta.php",
            {
              tipo: "insertCompra",
              id_facturacion: idFacturacionG,
              id_usuario_cliente: idUsuario,
              email: correo,
              id_precuenta_general: id_precuenta_general,
            },
            function () {
              $(".page-spinner-loader").addClass("hide");
            }
          );
        } else {
          $(".page-spinner-loader").addClass("hide");
          $(this).prop("disabled", false);
        }
      });
      $(document).on(
        "click",
        ".crear_precuentaGeneral, .editar_precuentaGeneral",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_precuentaGeneral");
          var descripcion = $("#descripcion").val();
          var id = esCrear
            ? null
            : $(this).parents().find("#EidPrecuentaGeneral")[0].value;
          var url = "./tables/cafe/Compra/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_precuentaGeneral",
                descripcion: descripcion,
              }
            : {
                tipo: "editar_precuentaGeneral",
                id: id,
                descripcion: descripcion,
              };
          if (descripcion.length < 1) {
            mostrarNotificacion("Ingrese descripción");
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
      $(document).on("click", ".crearPrecuentaGeneralItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(
          this,
          "./tables/cafe/Compra/crear_precuentaGeneral_item.php",
          {
            tipo: "PrecuentaGeneralItem",
          }
        );
      });

      $(document).on("click", ".editarPrecuentaGeneralItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idPrecuentaGeneralItem").text();
        cargarModal(
          this,
          "./tables/cafe/Compra/editar_precuentaGeneral_item.php",
          { var1: id }
        );
      });
      $(document).on(
        "click",
        ".crear_precuentaGeneral_item, .editar_precuentaGeneral_item",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_precuentaGeneral_item");
          var id_item = $("#grupoC").val();
          var id_precuenta_general = $("#table-precuentaGeneral_item").attr(
            "data-id_precuentaGeneral"
          );
          var cantidad = $("#cantidad").val();
          var id = esCrear
            ? null
            : $(this).parents().find("#EidPrecuentaGeneralItem")[0].value;
          var url = "./tables/cafe/Compra/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_precuentaGeneral_item",
                id_item: id_item,
                id_precuenta_general: id_precuenta_general,
                cantidad: cantidad,
              }
            : {
                tipo: "editar_precuentaGeneral_item",
                id: id,
                id_precuenta_general: id_precuenta_general,
                cantidad: cantidad,
              };

          if (isNaN(cantidad)) {
            mostrarNotificacion("Cantidad deben ser valor numérico");
            $(this).prop("disabled", false);
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
      $(document).on("click", ".crearPrecuentaGeneralCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(
          this,
          "./tables/cafe/Compra/crear_precuentaGeneral_compuesto.php",
          {
            tipo: "PrecuentaGeneralCompuesto",
          }
        );
      });

      $(document).on("click", ".editarPrecuentaGeneralCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idPrecuentaGeneralItem").text();
        cargarModal(
          this,
          "./tables/cafe/Compra/editar_precuentaGeneral_compuesto.php",
          { var1: id }
        );
      });
      $(document).on(
        "click",
        ".crear_precuentaGeneral_compuesto, .editar_precuentaGeneral_compuesto",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_precuentaGeneral_compuesto");
          var id_compuesto = $("#grupoC").val();
          var id_precuenta_general = $("#table-precuentaGeneral_item").attr(
            "data-id_precuentaGeneral"
          );
          var cantidad = $("#cantidad").val();
          var id = esCrear
            ? null
            : $(this).parents().find("#EidPrecuentaGeneralCompuesto")[0].value;
          var url = "./tables/cafe/Compra/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_precuentaGeneral_compuesto",
                id_compuesto: id_compuesto,
                id_precuenta_general: id_precuenta_general,
                cantidad: cantidad,
              }
            : {
                tipo: "editar_precuentaGeneral_compuesto",
                id: id,
                id_precuenta_general: id_precuenta_general,
                cantidad: cantidad,
              };

          if (isNaN(cantidad)) {
            mostrarNotificacion("Cantidad deben ser valor numérico");
            $(this).prop("disabled", false);
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
      //nuevos botones
      $(document).on("click", ".seleccionarG", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        $(".clientes").removeClass("hide");
        $(".factura").addClass("hide");
        $(".tablaCajas").addClass("hide");
        $(".CompraT").addClass("hide");
        $(this).prop("disabled", false);
      });
      //boton principal
      $(document).on("click", ".editarC", function (e) {
        e.preventDefault();
        var estado = $(this).closest("tr").children("td").eq(0).text();
        cargarModal(this, "./tables/usuarios/editar_usuarioClientes.php", {
          var1: estado,
          tipo: "cliente",
        });
      });
      $(document).on("click", ".crearC", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/usuarios/crear_usuarioClientes.php", {
          tipo: "cliente",
        });
      });
      $(document).on("click", ".editar_usuarioC", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        $(".page-spinner-loader").removeClass("hide");
        var id = $(this).parents().find("#id")[0].value;
        var nombres = $(this).parents().find("#nombres")[0].value;
        var apellidos = $(this).parents().find("#apellidos")[0].value;
        var usuario = $(this).parents().find("#usuario")[0].value;
        var cedula = $(this).parents().find("#cedula")[0].value;
        var celular = $(this).parents().find("#celular")[0].value;
        var correo = $(this).parents().find("#correo")[0].value;
        var sexo = $(this).parents().find("#sexo")[0].value;
        var direccion = $(this).parents().find("#direccion")[0].value;
        var fecha = $(this).parents().find("#fecha")[0].value;
        var estado = $(this).parents().find("#boxA")[0];
        var amigos = "";

        if (estado.checked) {
          amigos = "S";
        } else {
          amigos = "N";
        }
        var band = true;
        if (nombres.length < 3) {
          mostrarNotificacion("Ingrese nombres correctos");
          $(this).prop("disabled", false);
          return;
        }
        if (apellidos.length < 3) {
          mostrarNotificacion("Ingrese apellidos correctos");
          $(this).prop("disabled", false);
          return;
        }
        if (usuario.length < 4) {
          mostrarNotificacion("Ingrese usuario correcto");
          $(this).prop("disabled", false);
          return;
        }
        if (cedula.length != 10) {
          mostrarNotificacion("Ingrese cédula correcta");
          $(this).prop("disabled", false);
          return;
        }
        if (celular.length != 10) {
          mostrarNotificacion("Ingrese celular correcto");
          $(this).prop("disabled", false);
          return;
        }
        if (fecha == "") {
          mostrarNotificacion("Ingrese fecha correcta");
          $(this).prop("disabled", false);
          return;
        }
        var emailRegex =
          /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test(correo)) {
          mostrarNotificacion("Ingrese correo correcto");
          $(this).prop("disabled", false);
          return;
        }
        if (band) {
          $("#alerta").load(
            "./tables/usuarios/alerta.php",
            {
              tipo: "editarC",
              id: id,
              nombres: nombres,
              apellidos: apellidos,
              usuario: usuario,
              cedula: cedula,
              celular: celular,
              correo: correo,
              sexo: sexo,
              direccion: direccion,
              fecha: fecha,
              amigos: amigos,
            },
            function () {
              $(".page-spinner-loader").addClass("hide");
            }
          );
        } else {
          $(".page-spinner-loader").addClass("hide");
          $(this).prop("disabled", false);
        }
      });
      $(document).on("click", ".crear_usuarioC", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        $(".page-spinner-loader").removeClass("hide");
        var nombres = $(this).parents().find("#nombres")[0].value;
        var apellidos = $(this).parents().find("#apellidos")[0].value;
        var usuario = $(this).parents().find("#usuario")[0].value;
        var cedula = $(this).parents().find("#cedula")[0].value;
        var celular = $(this).parents().find("#celular")[0].value;
        var correo = $(this).parents().find("#correo")[0].value;
        var sexo = $(this).parents().find("#sexo")[0].value;
        var direccion = $(this).parents().find("#direccion")[0].value;
        var fecha = $(this).parents().find("#fecha")[0].value;
        var estado = $(this).parents().find("#box")[0];
        var amigos = "";
        if (estado.checked) {
          amigos = "S";
        } else {
          amigos = "N";
        }
        var band = true;
        if (nombres.length < 3) {
          mostrarNotificacion("Ingrese nombres correctos");
          $(this).prop("disabled", false);
          return;
        }
        if (apellidos.length < 3) {
          mostrarNotificacion("Ingrese apellidos correctos");
          $(this).prop("disabled", false);
          return;
        }
        if (usuario.length < 4) {
          mostrarNotificacion("Ingrese usuario correcto");
          $(this).prop("disabled", false);
          return;
        }
        if (cedula.length != 10) {
          mostrarNotificacion("Ingrese cédula correcta");
          $(this).prop("disabled", false);
          return;
        }
        if (celular.length != 10) {
          mostrarNotificacion("Ingrese celular correcto");
          $(this).prop("disabled", false);
          return;
        }
        if (fecha == "") {
          mostrarNotificacion("Ingrese fecha correcta");
          $(this).prop("disabled", false);
          return;
        }
        var emailRegex =
          /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test(correo)) {
          mostrarNotificacion("Ingrese correo correcto");
          $(this).prop("disabled", false);
          return;
        }
        if (band) {
          $("#alerta").load(
            "./tables/usuarios/alerta.php",
            {
              tipo: "crearC",
              nombres: nombres,
              apellidos: apellidos,
              usuario: usuario,
              cedula: cedula,
              celular: celular,
              correo: correo,
              sexo: sexo,
              direccion: direccion,
              fecha: fecha,
              amigos: amigos,
            },
            function () {
              $(".page-spinner-loader").addClass("hide");
            }
          );
        } else {
          $(".page-spinner-loader").addClass("hide");
          $(this).prop("disabled", false);
        }

        //  $(this).prop("disabled",false);
      });
      //boton cancela la creación
      $(document).on("click", ".estadoC", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var id = $(this).closest("tr").children("td").eq(0).text();
        console.log(id);
        var estado = $(this).closest("tr").find("#box")[0];
        var nRow = $(this).closest("tr")[0];
        if (estado.checked) {
          if (confirm("Estas seguro de Inactivar?") == false) {
            $(this).prop("disabled", false);
            return;
          } else {
            $(".page-spinner-loader").removeClass("hide");
            $("#alerta").load(
              "./tables/usuarios/alerta.php",
              { tipo: "estadoC", estado: "I", id: id },
              function () {
                $(".page-spinner-loader").addClass("hide");
              }
            );
          }
        } else {
          if (confirm("Estas seguro de activar?") == false) {
            $(this).prop("disabled", false);
            return;
          } else {
            $(".page-spinner-loader").removeClass("hide");
            $("#alerta").load(
              "./tables/usuarios/alerta.php",
              { tipo: "estadoC", estado: "A", id: id },
              function () {
                $(".page-spinner-loader").addClass("hide");
                //  estado.checked = true;
                //  oTable.fnUpdate('<label class="switch switch-green"> <input type="checkbox" class="switch-input" id="box" checked disabled> <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> <span id="estado" class="esconder">On</span> </label>', nRow, 6, false);
                //  oTable.fnDraw();
              }
            );
          }
        }
      });
      //boton eliminar
      $(document).on("click", ".deleteC", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var id = $(this).closest("tr").children("td").eq(0).text();
        console.log(id);
        if (confirm("Estas seguro de eliminar?") == false) {
          $(this).prop("disabled", false);
          return;
        } else {
          $(".page-spinner-loader").removeClass("hide");
          $("#alerta").load(
            "./tables/usuarios/alerta.php",
            { tipo: "estadoC", estado: "B", id: id },
            function () {
              $(".page-spinner-loader").addClass("hide");
              // estado.checked = false;
              //oTable.fnUpdate('<label class="switch switch-green"> <input type="checkbox" class="switch-input" id="box" disabled> <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> <span id="estado" class="esconder">Off</span> </label>', nRow, 6, false);
              //  oTable.fnDraw();
            }
          );
        }
        //  $(this).prop("disabled",false);
      });
      //boton clave
      $(document).on("click", ".claveC", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var id = $(this).closest("tr").children("td").eq(0).text();
        console.log(id);
        if (confirm("Estas seguro de resetear clave?") == false) {
          $(this).prop("disabled", false);
          return;
        } else {
          $(".page-spinner-loader").removeClass("hide");
          $("#alerta").load(
            "./tables/usuarios/alerta.php",
            { tipo: "estadoC", estado: "C", id: id },
            function () {
              $(".page-spinner-loader").addClass("hide");
              // estado.checked = false;
              //oTable.fnUpdate('<label class="switch switch-green"> <input type="checkbox" class="switch-input" id="box" disabled> <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> <span id="estado" class="esconder">Off</span> </label>', nRow, 6, false);
              //  oTable.fnDraw();
            }
          );
        }
        //  $(this).prop("disabled",false);
      });
      //PERFIL FACTURACION
      //boton principal
      $(document).on("click", ".facturacion", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        $(".page-spinner-loader").removeClass("hide");
        var estado = $(this).closest("tr").children("td").eq(0).text();
        $("#factura").load(
          "./tables/facturacion/facturacion.php",
          { var1: estado, tipo: "admin" },
          function () {
            $(".clientes").addClass("hide");
            $(".factura").removeClass("hide");
            $(".page-spinner-loader").addClass("hide");
            $("#table-editable1").dataTable({
              language: {
                url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
              },
              ajax: "tables/facturacion/facturacion-data.php?var1=" + estado,
              ordering: false,
              autoWidth: false,
              scrollX: false,
              destroy: true,
              dom: "<'row'<'col-xs-6 col-sm-4 col-md-6 tabla-estilo 'l><'col-xs-6 col-sm-5 col-md-5 tabla-estilo'f><'col-xs-6 col-sm-5 col-md-6 tabla-estilo1'B>r>t<'row'<'col-xs-12 col-sm-6 col-md-6 tabla-estilo'i><'spcol-md-6an6'p>>",
              buttons: [
                {
                  text: '<i class="fa fa-refresh"></i>',
                  className: "btn btn-default",
                  action: function () {
                    var table = $("#table-editable1").DataTable();
                    table.ajax.reload();
                  },
                },
              ],
              aoColumnDefs: [
                {
                  targets: [0],
                  className: "hide_column",
                },
              ],
            });
          }
        );
        $(this).prop("disabled", false);
      });
      $(document).on("click", ".editarF", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        $(".page-spinner-loader").removeClass("hide");
        var estado = $(this).closest("tr").children("td").eq(0).text();
        cargarModal(this, "./tables/usuarios/editar_facturacion.php", {
          var1: estado,
          tipo: "evento",
        });
        $(this).prop("disabled", false);
      });
      $(document).on("click", ".editarFCP", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var id = $(this).parents().find("#idFacturacion")[0].value;
        var idCompra = $(this).parents().find("#idCompra")[0].value;
        $(".page-spinner-loader").removeClass("hide");
        if (id == "1") {
          cargarModal(this, "./tables/facturacion/editar_facturacion.php", {
            var1: id,
            idCompra: idCompra,
            tipo: "evento",
          });
        } else {
          cargarModal(this, "./tables/usuarios/editar_facturacion.php", {
            var1: id,
            idCompra: idCompra,
            tipo: "evento",
          });
        }

        $(this).prop("disabled", false);
      });
      $(document).on("click", ".crearF", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var id = $(this).parents().find("#idUsuario1")[0].value;
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/usuarios/crear_facturacion.php", {
          var1: id,
          tipo: "evento",
        });
        $(this).prop("disabled", false);
      });
      $(document).on("click", ".editar_facturacion", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        $(".page-spinner-loader").removeClass("hide");
        var tipo = $("#MCafe").find("#tipo").val();
        var nombres = $(this).parents().find("#nombres")[0].value;
        var apellidos = $(this).parents().find("#apellidos")[0].value;
        var cedula = $(this).parents().find("#cedula")[0].value;
        var razon = $(this).parents().find("#razon")[0].value;
        var ruc = $(this).parents().find("#ruc")[0].value;
        var direccion = $(this).parents().find("#direccionF")[0].value;
        var correo = $(this).parents().find("#correoF")[0].value;
        var pasaporte = $(this).parents().find("#pasaporte")[0].value;
        if (document.getElementById("idCompra")) {
          var idUsuario = $(this).parents().find("#idUsuario")[0].value;
        } else {
          var idUsuario = $(this).parents().find("#idUsuario1")[0].value;
        }
        var id = $(this).parents().find("#id")[0].value;
        var band = true;

        if (direccion.length < 3) {
          mostrarNotificacion("Ingrese dirección");
          $(this).prop("disabled", false);
          return;
        }
        var emailRegex =
          /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test(correo)) {
          mostrarNotificacion("Ingrese correo correcto");
          $(this).prop("disabled", false);
          return;
        }
        if (tipo == "cedula") {
          if (nombres.length < 3) {
            mostrarNotificacion("Ingrese nombres correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (apellidos.length < 3) {
            mostrarNotificacion("Ingrese apellidos correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (cedula.length != 10) {
            mostrarNotificacion("Ingrese cédula correcto");
            $(this).prop("disabled", false);
            return;
          }
        } else if (tipo == "ruc") {
          if (razon.length < 3) {
            mostrarNotificacion("Ingrese razón social correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (ruc.length != 13) {
            mostrarNotificacion("Ingrese ruc  correcto");
            $(this).prop("disabled", false);
            return;
          }
        } else if (tipo == "pasaporte") {
          if (nombres.length < 3) {
            mostrarNotificacion("Ingrese nombres  correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (apellidos.length < 3) {
            mostrarNotificacion("Ingrese apellidos correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (pasaporte.length < 5) {
            mostrarNotificacion("Ingrese pasaporte correcto");
            $(this).prop("disabled", false);
            return;
          }
        }
        if (band) {
          if (document.getElementById("idCompra")) {
            var idCompra = $(this).parents().find("#idCompra")[0].value;
          } else {
            var idCompra = "0";
          }

          $("#alerta").load(
            "./tables/facturacion/alerta.php",
            {
              tipo: "editarF",
              id: id,
              nombres: nombres,
              apellidos: apellidos,
              cedula: cedula,
              razon: razon,
              direccion: direccion,
              correo: correo,
              ruc: ruc,
              pasaporte: pasaporte,
              tipoF: tipo,
              usuario: idUsuario,
              idCompra: idCompra,
            },
            function () {
              $(".page-spinner-loader").addClass("hide");
            }
          );
        } else {
          $(".page-spinner-loader").addClass("hide");
          $(this).prop("disabled", false);
        }

        //    $(this).prop("disabled",false);
      });

      $(document).on("click", ".editar_facturacion2", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        $(".page-spinner-loader").removeClass("hide");
        var correo = $(this).parents().find("#correoF")[0].value;
        var idCompra = $(this).parents().find("#idCompra")[0].value;
        var band = true;
        var emailRegex =
          /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test(correo)) {
          mostrarNotificacion("Ingrese correo correcto");
          $(this).prop("disabled", false);
          return;
        }

        if (band) {
          $("#alerta").load(
            "./tables/facturacion/alerta.php",
            { tipo: "editarF2", idCompra: idCompra, correo: correo },
            function () {
              $(".page-spinner-loader").addClass("hide");
            }
          );
        } else {
          $(".page-spinner-loader").addClass("hide");
          $(this).prop("disabled", false);
        }

        //    $(this).prop("disabled",false);
      });
      $(document).on("click", ".crear_facturacion", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        $(".page-spinner-loader").removeClass("hide");
        var tipo = $("#MCafe").find("#tipo").val();
        //var tipo = $(this).parents().find("#tipo")[0].value;
        var nombres = $(this).parents().find("#nombres")[0].value;
        var apellidos = $(this).parents().find("#apellidos")[0].value;
        var cedula = $(this).parents().find("#cedula")[0].value;
        var razon = $(this).parents().find("#razon")[0].value;
        var ruc = $(this).parents().find("#ruc")[0].value;
        var pasaporte = $(this).parents().find("#pasaporte")[0].value;
        var direccion = $(this).parents().find("#direccionF")[0].value;
        var correo = $(this).parents().find("#correoF")[0].value;
        var id = $(this).parents().find("#idUsuario1")[0].value;
        var band = true;
        if (direccion.length < 3) {
          mostrarNotificacion("Ingrese dirección");
          $(this).prop("disabled", false);
          return;
        }
        var emailRegex =
          /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test(correo)) {
          mostrarNotificacion("Ingrese correo correcto");
          $(this).prop("disabled", false);
          return;
        }
        if (tipo == "cedula") {
          if (nombres.length < 3) {
            mostrarNotificacion("Ingrese nombres correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (apellidos.length < 3) {
            mostrarNotificacion("Ingrese apellidos correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (cedula.length != 10) {
            mostrarNotificacion("Ingrese cédula correcto");
            $(this).prop("disabled", false);
            return;
          }
        } else if (tipo == "ruc") {
          if (razon.length < 3) {
            mostrarNotificacion("Ingrese razón social correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (ruc.length != 13) {
            mostrarNotificacion("Ingrese ruc  correcto");
            $(this).prop("disabled", false);
            return;
          }
        } else if (tipo == "pasaporte") {
          if (nombres.length < 3) {
            mostrarNotificacion("Ingrese nombres  correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (apellidos.length < 3) {
            mostrarNotificacion("Ingrese apellidos correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (pasaporte.length < 5) {
            mostrarNotificacion("Ingrese pasaporte correcto");
            $(this).prop("disabled", false);
            return;
          }
        }
        if (band) {
          $("#alerta").load(
            "./tables/usuarios/alerta.php",
            {
              tipo: "crearF",
              nombres: nombres,
              apellidos: apellidos,
              cedula: cedula,
              razon: razon,
              direccion: direccion,
              correo: correo,
              ruc: ruc,
              pasaporte: pasaporte,
              tipoF: tipo,
              usuario: id,
            },
            function () {
              $(".page-spinner-loader").addClass("hide");
            }
          );
        } else {
          $(".page-spinner-loader").addClass("hide");
          $(this).prop("disabled", false);
        }

        //  $(this).prop("disabled",false);
      });
      $(document).on("click", ".seleccionar", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var id = $(this).closest("tr").children("td").eq(0).text();
        if (confirm("Estas seguro de seleccionar esta facturación?") == false) {
          $(this).prop("disabled", false);
          return;
        } else {
          $(".page-spinner-loader").removeClass("hide");
          var id_precuenta_general = $("#table-precuentaGeneral_item").attr(
            "data-id_precuentaGeneral"
          );
          $("#alerta").load(
            "./tables/cafe/Compra/alerta.php",
            {
              tipo: "puntosAD2",
              donacion: "0",
              canjeados: "0",
              id_precuenta: id_precuenta_general,
              id_precuenta_general: id_precuenta_general,
            },
            function () {
              $(".page-spinner-loader").addClass("hide");
            }
          );
          $("#UsuarioCaja").load(
            "./tables/facturacion/caja-usuario.php",
            { var1: id },
            function () {
              $(".page-spinner-loader").addClass("hide");
              $(".UsuarioCaja").removeClass("hide");
              $(".tablaReserva").removeClass("hide");
              $(".tablaReservaP").removeClass("hide");
              $(".clientes").addClass("hide");
              $(".factura").addClass("hide");
              $(".tablaCajas").addClass("hide");
              $(".CompraT").removeClass("hide");
            }
          );
        }
        // $(this).prop("disabled",false);
      });
      $(document).on("click", ".seleccionarCF", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var id = 1;
        $(".page-spinner-loader").removeClass("hide");
        var id_precuenta_general = $("#table-precuentaGeneral_item").attr(
          "data-id_precuentaGeneral"
        );
        $("#alerta").load(
          "./tables/cafe/Compra/alerta.php",
          {
            tipo: "puntosAD2",
            donacion: "0",
            canjeados: "0",
            id_precuenta: id_precuenta_general,
            id_precuenta_general: id_precuenta_general,
          },
          function () {
            $(".page-spinner-loader").addClass("hide");
          }
        );
        $("#UsuarioCaja").load(
          "./tables/facturacion/caja-usuario.php",
          { var1: id },
          function () {
            $(".page-spinner-loader").addClass("hide");
            $(".UsuarioCaja").removeClass("hide");
            //$(".tablaTaquilla").removeClass("hide");
            $(".tablaReserva").removeClass("hide");
            $(".tablaReservaP").removeClass("hide");
            $(".clientes").addClass("hide");
            $(".factura").addClass("hide");
            $(".tablaCajas").addClass("hide");
            $(".CompraT").removeClass("hide");
          }
        );
        $(this).prop("disabled", false);
      });
      $(document).on("click", ".correoR", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var id = $(this).closest("tr").children("td").eq(0).text();
        $(".page-spinner-loader").removeClass("hide");
        $("#alerta").load(
          "./tables/facturacion/alerta.php",
          { tipo: "correoR", id: id },
          function () {
            $(".page-spinner-loader").addClass("hide");
          }
        );
      });
      //boton cancela la creación
      $(document).on("click", ".estadoF", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var id = $(this).closest("tr").children("td").eq(0).text();
        console.log(id);
        console.log(id);
        var estado = $(this).closest("tr").find("#box")[0];
        var nRow = $(this).closest("tr")[0];
        if (estado.checked) {
          if (confirm("Estas seguro de Inactivar?") == false) {
            $(this).prop("disabled", false);
            return;
          } else {
            $(".page-spinner-loader").removeClass("hide");
            $("#alerta").load(
              "./tables/usuarios/alerta.php",
              { tipo: "estadoF", estado: "I", id: id },
              function () {
                $(".page-spinner-loader").addClass("hide");
              }
            );
          }
        } else {
          if (confirm("Estas seguro de activar?") == false) {
            $(this).prop("disabled", false);
            return;
          } else {
            $(".page-spinner-loader").removeClass("hide");
            $("#alerta").load(
              "./tables/usuarios/alerta.php",
              { tipo: "estadoF", estado: "A", id: id },
              function () {
                $(".page-spinner-loader").addClass("hide");
              }
            );
          }
        }
        // $(this).prop("disabled",false);
      });
      //boton eliminar
      $(document).on("click", ".deleteF", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var id = $(this).closest("tr").children("td").eq(0).text();
        console.log(id);
        if (confirm("Estas seguro de eliminar?") == false) {
          $(this).prop("disabled", false);
          return;
        } else {
          $(".page-spinner-loader").removeClass("hide");
          $("#alerta").load(
            "./tables/usuarios/alerta.php",
            { tipo: "estadoF", estado: "B", id: id },
            function () {
              $(".page-spinner-loader").addClass("hide");
            }
          );
        }
        // $(this).prop("disabled",false);
      });
      $(document).on("click", ".atras", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var table = $("#table-editable").DataTable();
        table.ajax.reload();
        $(".clientes").removeClass("hide");
        $(".factura").addClass("hide");
      });
      $(document).on("click", ".cancelarP", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".tabEventos").addClass("hide");
      });
      $(document).on("click", ".cancelarC", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".tablaCajas").removeClass("hide");
        $(".page-spinner-loader").addClass("hide");
        $(".UsuarioCaja").addClass("hide");
        $(".CompraT").addClass("hide");
        //$(".tablaTaquilla").addClass("hide");
        $(".tablaReserva").addClass("hide");
        $(".tablaReservaP").addClass("hide");
        $(".tablePagos").addClass("hide");
        $(".clientes").addClass("hide");
      });
      $(document).on("click", ".buscarRPC", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var fechaI = $(this).parents().find("#busquedaF")[0].value;
        var table = $("#table-editable").DataTable();
        var data = "";
        if ($("#table-editable").hasClass("clientes_data")) {
          data = "tables/usuarios/usuarios-clientes_data.php?var1=" + fechaI;
        }
        if ($("#table-editable").hasClass("clientes_dataR2")) {
          data = "tables/usuarios/usuarios-clientes_data2.php?var1=" + fechaI;
        }
        table.ajax.url(data).load();
        setTimeout(function () {
          $(".page-spinner-loader").addClass("hide");
          $(".buscarRPC").prop("disabled", false);
        }, 2000);
      });
      $(document).on("click", ".salir", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".clientes").addClass("hide");
        $(".factura").addClass("hide");
        $(".CompraT").removeClass("hide");
      });
      $(document).on("change", "#tipo", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (this.value == "cedula") {
          $(".cedula").removeClass("hide");
          $(".nombres").removeClass("hide");
          $(".ruc").addClass("hide");
          $(".pasaporte").addClass("hide");
          $(".razon").addClass("hide");
        } else if (this.value == "ruc") {
          $(".ruc").removeClass("hide");
          $(".cedula").addClass("hide");
          $(".razon").removeClass("hide");
          $(".nombres").addClass("hide");
          $(".pasaporte").addClass("hide");
        } else {
          $(".nombres").removeClass("hide");
          $(".pasaporte").removeClass("hide");
          $(".ruc").addClass("hide");
          $(".cedula").addClass("hide");
          $(".razon").addClass("hide");
        }
      });
      //AGREGAR PAGO
      $(document).on("change", "#FpagoG", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if ((this.value == "tarjetaD") | (this.value == "tarjetaC")) {
          $(".Ttarjeta").removeClass("hide");
          $(".Tbanco").removeClass("hide");
          $(".lote").removeClass("hide");
        } else {
          $(".Ttarjeta").addClass("hide");
          $(".Tbanco").addClass("hide");
          $(".lote").addClass("hide");
        }
      });
      $(document).on("click", ".agregarPago", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var FpagoG = $(this).parents().find("#FpagoG")[0].value;
        var monto = $(this).parents().find("#monto")[0].value;
        var saldo = $(this).parents().find("#saldo")[0].value;
        var band = true;
        var id_precuenta_general = $("#table-precuentaGeneral_item").attr(
          "data-id_precuentaGeneral"
        );
        if (monto <= "0") {
          mostrarNotificacion("Ingrese un Monto de pago");
          $(this).prop("disabled", false);
          return;
        }
        if (band) {
          if ((FpagoG == "tarjetaD") | (FpagoG == "tarjetaC")) {
            var FpagoG2 = "";
            if (FpagoG == "tarjetaD") {
              FpagoG2 = "D";
            } else {
              FpagoG2 = "C";
            }
            var Ttarjeta = $(this).parents().find("#Ttarjeta")[0].value;
            var Tbanco = $(this).parents().find("#Tbanco")[0].value;
            var lote = $(this).parents().find("#lote")[0].value;
            if (lote.length < 2) {
              mostrarNotificacion("Ingrese Lote de pago");
              $(this).prop("disabled", false);
              return;
            }
            var monto1 = parseFloat(monto);
            var saldo1 = parseFloat(saldo);

            if (monto1 > saldo1) {
              mostrarNotificacion("Ingrese un monto correcto");
              $(this).prop("disabled", false);
              return;
            }
            if (band) {
              $(".page-spinner-loader").removeClass("hide");
              $("#alerta").load(
                "./tables/cafe/Compra/alerta.php",
                {
                  tipo: "agregarPago",
                  FpagoG: FpagoG2,
                  Ttarjeta: Ttarjeta,
                  Tbanco: Tbanco,
                  lote: lote,
                  monto: monto,
                  id_precuenta_general: id_precuenta_general,
                },
                function () {
                  $(".page-spinner-loader").addClass("hide");
                }
              );
            } else {
              $(".page-spinner-loader").addClass("hide");
              $(this).prop("disabled", false);
            }
          } else {
            $(".page-spinner-loader").removeClass("hide");
            $("#alerta").load(
              "./tables/cafe/Compra/alerta.php",
              {
                tipo: "agregarPago",
                FpagoG: "E",
                Ttarjeta: "1",
                Tbanco: "1",
                lote: "",
                monto: monto,
                id_precuenta_general: id_precuenta_general,
              },
              function () {
                $(".page-spinner-loader").addClass("hide");
              }
            );
          }
        } else {
          $(".page-spinner-loader").addClass("hide");
          $(this).prop("disabled", false);
        }
      });

      $(document).on("click", ".donacion", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).prop("disabled", true);
        var idFacturacionG = $(this).parents().find("#idFacturacionG")[0].value;
        var band = true;

        if (idFacturacionG == "") {
          mostrarNotificacion("Seleccione un Client");
          $(this).prop("disabled", false);
          return;
        }
        if (band) {
          if (idFacturacionG == "1") {
            var idUsuario = 1;
          } else {
            var idUsuario = $(this).parents().find("#idUsuario")[0].value;
          }

          $(".page-spinner-loader").removeClass("hide");
          var estado = $(this).closest("tr").children("td").eq(0).text();
          cargarModal(this, "./tables/facturacion/donacion.php", {
            var1: idUsuario,
          });
          $(this).prop("disabled", false);
        } else {
          $(this).prop("disabled", false);
        }
      });
      $(document).on("click", ".puntosAD", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        $(this).prop("disabled", true);
        var donacionT = $(this).parents().find("#donacionT")[0].value;
        var puntos_acumulados = $(this)
          .parents()
          .find("#puntos_acumulados")[0].value;
        var idUsuario = $(this).parents().find("#idUsuario")[0].value;
        var band = true;
        var donacionT1 = parseFloat(donacionT);
        var id_precuenta_general = $("#table-precuentaGeneral_item").attr(
          "data-id_precuentaGeneral"
        );
        if (donacionT1 < 0) {
          mostrarNotificacion("Ingrese un valor correcto de donación ");
          $(this).prop("disabled", false);
          return;
        }
        if (band) {
          $(".page-spinner-loader").removeClass("hide");
          $("#alerta").load(
            "./tables/cafe/Compra/alerta.php",
            {
              tipo: "puntosAD",
              donacion: donacionT,
              canjeados: puntos_acumulados,
              id_reserva: idUsuario,
              id_precuenta: id_precuenta_general,
              id_precuenta_general: id_precuenta_general,
            },
            function () {
              $(".page-spinner-loader").addClass("hide");
            }
          );
        } else {
          $(this).prop("disabled", false);
        }
      });
      function cambiarEstado(checkbox, tipo, tipo2, tipoEntidad) {
        var confirmacion;
        var esEstado =
          tipo2 !== "deletePrecuentaGeneralItem" &&
          tipo2 !== "deletePrecuentaGeneralCompuesto" &&
          tipo2 !== "deleteGeneralPago" &&
          tipo2 !== "deletePrecuentaGeneral"; // esEstado es true si tipo2 no es 'deleteIngresoItem'
        var idSelector =
          tipoEntidad === "PrecuentaGeneralItem"
            ? "#idPrecuentaGeneralItem"
            : tipoEntidad === "PrecuentaGeneralCompuesto"
            ? "#idPrecuentaGeneralItem"
            : tipoEntidad === "PrecuentaGeneral"
            ? "#idPrecuentaGeneral"
            : "#idPago";
        if (tipoEntidad === "PrecuentaGeneral") {
          if (tipo2 !== "deletePrecuentaGeneral") {
            var id = $("#table-precuentaGeneral_item").attr(
              "data-id_precuentaGeneral"
            );
          } else {
            var id = checkbox.closest("tr").find(idSelector).text();
          }
        } else {
          var id = checkbox.closest("tr").find(idSelector).text();
        }
        var id_precuenta_general = $("#table-precuentaGeneral_item").attr(
          "data-id_precuentaGeneral"
        );
        var estado = "A"; // Estado por defecto

        if (esEstado) {
          if (tipoEntidad === "PrecuentaGeneral") {
            confirmacion = "¿Estás seguro finalizar la compra";
          } else {
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

        var url = "./tables/cafe/Compra/alerta.php";
        var data = esEstado
          ? {
              tipo:
                tipoEntidad === "IngresoItem"
                  ? "estadoIngresoItem"
                  : tipoEntidad === "IngresoCompuesto"
                  ? "estadoIngresoCompuesto"
                  : tipoEntidad === "Proveedor"
                  ? "estadoProveedor"
                  : tipoEntidad === "PrecuentaGeneral"
                  ? "estadoPrecuentaGeneral"
                  : "estadoPago",
              id: id,
              id_precuenta_general: id_precuenta_general,
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
                tipoEntidad === "PrecuentaGeneralItem"
                  ? "eliminarPrecuentaGeneralItem"
                  : tipoEntidad === "PrecuentaGeneralCompuesto"
                  ? "eliminarPrecuentaGeneralCompuesto"
                  : tipoEntidad === "PrecuentaGeneral"
                  ? "eliminarPrecuentaGeneral"
                  : "eliminarPago",
              tipo2:
                tipoEntidad === "IngresoItem"
                  ? "I"
                  : tipoEntidad === "IngresoCompuesto"
                  ? "C"
                  : tipoEntidad === "Proveedor"
                  ? tipo2
                  : "G",
              id: id,
              id_precuenta_general: id_precuenta_general,
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
      $(document).on("click", ".eliminarPrecuentaGeneralItem", function (e) {
        e.preventDefault();
        cambiarEstado(
          $(this),
          "estado",
          "deletePrecuentaGeneralItem",
          "PrecuentaGeneralItem"
        );
      });
      $(document).on(
        "click",
        ".eliminarPrecuentaGeneralCompuesto",
        function (e) {
          e.preventDefault();
          cambiarEstado(
            $(this),
            "estado",
            "deletePrecuentaGeneralCompuesto",
            "PrecuentaGeneralCompuesto"
          );
        }
      );
      $(document).on("click", ".eliminarPago", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteGeneralPago", "GeneralPago");
      });
      $(document).on("click", ".eliminarPrecuentaGeneral", function (e) {
        e.preventDefault();
        cambiarEstado(
          $(this),
          "estado",
          "deletePrecuentaGeneral",
          "PrecuentaGeneral"
        );
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

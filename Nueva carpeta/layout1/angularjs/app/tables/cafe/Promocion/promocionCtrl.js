"use strict";

angular.module("newApp").controller("promocionCtrl", [
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
          "./tables/cafe/Promocion/" + tipo + ".php",
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
                ajax: "tables/cafe/Promocion/" + tipo + "_data.php", // Asume una convención de nomenclatura para simplificar
                ordering: true,
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
        let promocionColumnDefs = [
          {
            targets: [0],
            createdCell: function (td) {
              $(td).attr("id", "idPromocion");
            },
            className: "hide_column",
          },
        ];

        let promocionItemColumnDefs = [
          {
            targets: [0],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idPromocionItem");
              }
            },
            className: "hide_column",
          },
        ];
        let promocionCompuestoColumnDefs = [
          {
            targets: [0],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idPromocionCompuesto");
              }
            },
            className: "hide_column",
          },
        ];
        // Inicializa o recarga las tablas
        initOrReloadTable("promocion", promocionColumnDefs);
        initOrReloadTable("promocionItem", promocionItemColumnDefs);
        initOrReloadTable("promocionCompuesto", promocionCompuestoColumnDefs);
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
      function toggleInputs() {
        var tipo = $("#tipoC").val(); // Obtiene el valor del selector de tipo

        if (tipo === "D") {
          // Si el tipo es Descuento
          $("#descuento").closest(".form-group").show(); // Muestra Descuento
          $("#precioT").closest(".form-group").show(); // Muestra Precio Total
          $("#precioC").closest(".form-group").hide(); // Oculta Precio Compuesto
          $("#precio").closest(".form-group").hide(); // Oculta Precio
        } else if (tipo === "P") {
          // Si el tipo es Precio
          $("#descuento").closest(".form-group").hide(); // Oculta Descuento
          $("#precioT").closest(".form-group").hide(); // Oculta Precio Total
          $("#precioC").closest(".form-group").show(); // Muestra Precio Compuesto
          $("#precio").closest(".form-group").show(); // Muestra Precio
        }
      }
      function calcularPrecioTotal() {
        // Obtiene los valores de los campos como números flotantes
        var precioBase = parseFloat($("#precioC").val());
        var descuento = parseFloat($("#descuento").val());

        // Calcula el precio total con la fórmula corregida
        var precioTotal = precioBase - (precioBase * descuento) / 100;

        // Actualiza el valor del campo de Precio Total limitando a 2 decimales
        $("#precioT").val(precioTotal.toFixed(2));
      }

      function cargarModal(selector, url, data = {}) {
        $(".page-spinner-loader").removeClass("hide");
        $("#MCafe").load(url, data, function () {
          $(".page-spinner-loader").addClass("hide");
          $("#MCafe").modal("show");
          inputSelect();
          // Establece el precio inicial y actualiza el precio total al cargar el modal
          var precioInicial = $("#grupoC").find("option:first").data("precio");
          $("#precioC").val(precioInicial !== undefined ? precioInicial : 0);
          calcularPrecioTotal(); // Asegúrate de llamarla aquí para actualizar al inicio

          // Actualiza el precio y recalcula el precio total cuando cambia la selección del compuesto
          $("#grupoC").change(function () {
            var precioSeleccionado = $(this)
              .find("option:selected")
              .data("precio");
            $("#precioC").val(precioSeleccionado || 0);
            calcularPrecioTotal();
          });

          // Calcula el precio total cuando el descuento cambia, sin necesidad de estar dentro del change de #grupoC
          $("#descuento").on("input change", calcularPrecioTotal);
          toggleInputs();
          // Configura los inputs iniciales basados en el tipo
         $("#tipoC").change(toggleInputs);
        });
      }

      $(document).on("click", ".crearPromocion", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Promocion/crear_promocion.php", {
          tipo: "promocion",
        });
      });
      $(document).on("click", ".editarPromocion", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idPromocion").text();
        cargarModal(this, "./tables/cafe/Promocion/editar_promocion.php", {
          var1: id,
        });
      });
      $(document).on(
        "click",
        ".crear_promocion, .editar_promocion",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_promocion");
          var nombre = $("#nombre").val();
          var grupo = $("#grupoC").val();
          var descuento = $("#descuento").val();
          var tipoG = "D";
          var tipo2 = "G";
          var fechaInicio = $("#fechaInicio").val();
          var fechaFinal = $("#fechaFinal").val();
          var id = esCrear
            ? null
            : $(this).parents().find("#EidPromocion")[0].value;
          var url = "./tables/cafe/Promocion/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_promocion",
                nombre: nombre,
                descuento: descuento,
                grupo: grupo,
                tipoG: tipoG,
                tipo2: tipo2,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
              }
            : {
                tipo: "editar_promocion",
                id: id,
                nombre: nombre,
                grupo: grupo,
                descuento: descuento,
                tipo2: tipo2,
                tipoG: tipoG,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
              };
          if (nombre.length < 2) {
            mostrarNotificacion("Ingrese nombre correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (tipoG == "D") {
            if (isNaN(descuento)) {
              mostrarNotificacion("Descuento deben ser valor numérico");
              return false;
            }
            descuento = parseFloat(descuento);
            if (descuento <= 0 || descuento > 100) {
              mostrarNotificacion("Ingrese descuento correcto");
              $(this).prop("disabled", false);
              return;
            }
          }
          var fechaInicioT = new Date(fechaInicio);
          var fechaFinalT = new Date(fechaFinal);

          // Verifica si las fechas son inválidas
          if (isNaN(fechaInicioT.getTime()) || isNaN(fechaFinalT.getTime())) {
            mostrarNotificacion("Por favor, introduce fechas válidas.");
            $(this).prop("disabled", false);
            return;
          }

          // Verifica que la fecha de inicio sea menor que la fecha final
          if (fechaInicioT >= fechaFinalT) {
            mostrarNotificacion(
              "La fecha de inicio debe ser menor que la fecha final."
            );
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

      $(document).on("click", ".crearPromocionItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Promocion/crear_promocionItem.php", {
          tipo: "promocionItem",
        });
      });
      $(document).on("click", ".editarPromocionItem", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idPromocionItem").text();
        cargarModal(this, "./tables/cafe/Promocion/editar_promocionItem.php", {
          var1: id,
        });
      });
      $(document).on(
        "click",
        ".crear_promocionItem, .editar_promocionItem",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_promocionItem");
          var nombre = $("#nombre").val();
          var item = $("#grupoC").val();
          var descuento = $("#descuento").val();
          var precioC = $("#precioC").val();
          var precio = $("#precio").val();
          var tipoG = $("#tipoC").val();
          var tipo2 = "I";
          var fechaInicio = $("#fechaInicio").val();
          var fechaFinal = $("#fechaFinal").val();
          var id = esCrear
            ? null
            : $(this).parents().find("#EidPromocionItem")[0].value;
          var url = "./tables/cafe/Promocion/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_promocionItem",
                nombre: nombre,
                item: item,
                descuento: descuento,
                precio: precio,
                tipoG: tipoG,
                tipo2: tipo2,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
              }
            : {
                tipo: "editar_promocionItem",
                id: id,
                nombre: nombre,
                item: item,
                descuento: descuento,
                precio: precio,
                tipo2: tipo2,
                tipoG: tipoG,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
              };
          if (nombre.length < 2) {
            mostrarNotificacion("Ingrese nombre correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (tipoG == "D") {
            if (isNaN(descuento)) {
              mostrarNotificacion("Descuento deben ser valor numérico");
              return false;
            }
            descuento = parseFloat(descuento);
            if (descuento <= 0 || descuento > 100) {
              mostrarNotificacion("Ingrese descuento correcto");
              $(this).prop("disabled", false);
              return;
            }
          } else {
            if (isNaN(precio)) {
              mostrarNotificacion("Precio deben ser valor numérico");
              return false;
            }
            precioC = parseFloat(precioC);
            if (precioC < precio) {
              mostrarNotificacion("Ingrese Precio correcto");
              $(this).prop("disabled", false);
              return;
            }
          }
          var fechaInicioT = new Date(fechaInicio);
          var fechaFinalT = new Date(fechaFinal);

          // Verifica si las fechas son inválidas
          if (isNaN(fechaInicioT.getTime()) || isNaN(fechaFinalT.getTime())) {
            mostrarNotificacion("Por favor, introduce fechas válidas.");
            $(this).prop("disabled", false);
            return;
          }

          // Verifica que la fecha de inicio sea menor que la fecha final
          if (fechaInicioT >= fechaFinalT) {
            mostrarNotificacion(
              "La fecha de inicio debe ser menor que la fecha final."
            );
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
      $(document).on("click", ".crearPromocionCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(".page-spinner-loader").removeClass("hide");
        cargarModal(this, "./tables/cafe/Promocion/crear_PromocionCompuesto.php", {
          tipo: "PromocionCompuesto",
        });
      });
      $(document).on("click", ".editarPromocionCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var id = $(this).closest("tr").find("#idPromocionCompuesto").text();
        cargarModal(this, "./tables/cafe/Promocion/editar_PromocionCompuesto.php", {
          var1: id,
        });
      });
      $(document).on(
        "click",
        ".crear_promocionCompuesto, .editar_promocionCompuesto",
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          $(this).prop("disabled", true);
          var esCrear = $(this).hasClass("crear_promocionCompuesto");
          var nombre = $("#nombre").val();
          var compuesto = $("#grupoC").val();
          var descuento = $("#descuento").val();
          var precioC = $("#precioC").val();
          var precio = $("#precio").val();
          var tipoG = $("#tipoC").val();
          var tipo2 = "C";
          var fechaInicio = $("#fechaInicio").val();
          var fechaFinal = $("#fechaFinal").val();
          var id = esCrear
            ? null
            : $(this).parents().find("#EidPromocionCompuesto")[0].value;
          var url = "./tables/cafe/Promocion/alerta.php";
          var data = esCrear
            ? {
                tipo: "crear_promocionCompuesto",
                nombre: nombre,
                compuesto: compuesto,
                descuento: descuento,
                precio: precio,
                tipoG: tipoG,
                tipo2: tipo2,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
              }
            : {
                tipo: "editar_promocionCompuesto",
                id: id,
                nombre: nombre,
                compuesto: compuesto,
                descuento: descuento,
                precio: precio,
                tipo2: tipo2,
                tipoG: tipoG,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
              };
          if (nombre.length < 2) {
            mostrarNotificacion("Ingrese nombre correcto");
            $(this).prop("disabled", false);
            return;
          }
          if (tipoG == "D") {
            if (isNaN(descuento)) {
              mostrarNotificacion("Descuento deben ser valor numérico");
              return false;
            }
            descuento = parseFloat(descuento);
            if (descuento <= 0 || descuento > 100) {
              mostrarNotificacion("Ingrese descuento correcto");
              $(this).prop("disabled", false);
              return;
            }
          } else {
            if (isNaN(precio)) {
              mostrarNotificacion("Precio deben ser valor numérico");
              return false;
            }
            precioC = parseFloat(precioC);
            if (precioC < precio) {
              mostrarNotificacion("Ingrese Precio correcto");
              $(this).prop("disabled", false);
              return;
            }
          }
          var fechaInicioT = new Date(fechaInicio);
          var fechaFinalT = new Date(fechaFinal);

          // Verifica si las fechas son inválidas
          if (isNaN(fechaInicioT.getTime()) || isNaN(fechaFinalT.getTime())) {
            mostrarNotificacion("Por favor, introduce fechas válidas.");
            $(this).prop("disabled", false);
            return;
          }

          // Verifica que la fecha de inicio sea menor que la fecha final
          if (fechaInicioT >= fechaFinalT) {
            mostrarNotificacion(
              "La fecha de inicio debe ser menor que la fecha final."
            );
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
      $(document).on("click", ".EscogerPromocionCompuesto", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        let promocionItemPromocionCompuestoColumnDefs = [
          {
            targets: [0, 1, 2],
            createdCell: function (td, cellData, rowData, row, col) {
              // Solo asigna el ID a la primera celda de la primera fila
              if (col === 0) {
                // Ajusta el índice de la columna si es necesario
                $(td).attr("id", "idPromocionItemPromocionCompuesto");
              }
            },
            className: "hide_column",
          },
        ];
        var id = $(this).closest("tr").find("#idPromocionCompuesto").text();
        initOrReloadTableSecundaria(
          "promocionItem-PromocionCompuesto",
          promocionItemPromocionCompuestoColumnDefs,
          id
        );
      });

      function cambiarEstado(checkbox, tipo, tipo2, tipoEntidad) {
        var confirmacion;
        var esEstado =
          tipo2 !== "deletePromocionItem" &&
          tipo2 !== "deletePromocionCompuesto" &&
          tipo2 !== "deletePromocion" &&
          tipo2 !== "deleteProveedor"; // esEstado es true si tipo2 no es 'deletePromocionItem'
        var idSelector =
          tipoEntidad === "PromocionItem"
            ? "#idPromocionItem"
            : tipoEntidad === "PromocionCompuesto"
            ? "#idPromocionCompuesto"
            : tipoEntidad === "Proveedor"
            ? "#idProveedor"
            : tipoEntidad === "Promocion"
            ? "#idPromocion"
            : "#idPromocion";
        var id = checkbox.closest("tr").find(idSelector).text();
        var estado = "A"; // Estado por defecto

        if (esEstado) {
          confirmacion = "¿Estás seguro de cambiar el " + tipo + "?";
          estado = checkbox.is(":checked") ? "A" : "I";
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

        var url = "./tables/cafe/Promocion/alerta.php";
        var data = esEstado
          ? {
              tipo:
                tipoEntidad === "PromocionItem"
                  ? "estadoPromocionItem"
                  : tipoEntidad === "PromocionCompuesto"
                  ? "estadoPromocionCompuesto"
                  : tipoEntidad === "Proveedor"
                  ? "estadoProveedor"
                  : "estadoPromocion",
              id: id,
              tipo2:
                tipoEntidad === "PromocionItem"
                  ? "I"
                  : tipoEntidad === "PromocionCompuesto"
                  ? "C"
                  : tipoEntidad === "Proveedor"
                  ? tipo2
                  : "G",
              estado: estado,
            }
          : {
              tipo:
                tipoEntidad === "PromocionItem"
                  ? "eliminarPromocionItem"
                  : tipoEntidad === "PromocionCompuesto"
                  ? "eliminarPromocionCompuesto"
                  : tipoEntidad === "Promocion"
                  ? "eliminarPromocion"
                  : "eliminarProveedor",
                tipo2:
                  tipoEntidad === "PromocionItem"
                    ? "I"
                    : tipoEntidad === "PromocionCompuesto"
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

      $(document).on("click", ".eliminarPromocion", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deletePromocion", "Promocion");
      });
      $(document).on("change", "#boxG", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "boxG", "Promocion");
      });
      $(document).on("click", ".eliminarProveedor", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "deleteProveedor", "Proveedor");
      });
      $(document).on("change", "#boxP", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "boxP", "Proveedor");
      });

      $(document).on("click", ".eliminarPromocionItem", function (e) {
        e.preventDefault();
        cambiarEstado(
          $(this),
          "estado",
          "deletePromocionItem",
          "PromocionItem"
        );
      });
      $(document).on("change", "#boxI", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "I", "PromocionItem");
      });

      $(document).on("click", ".eliminarPromocionCompuesto", function (e) {
        e.preventDefault();
        cambiarEstado(
          $(this),
          "estado",
          "deletePromocionCompuesto",
          "PromocionCompuesto"
        );
      });
      $(document).on("change", "#boxC", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "C", "PromocionCompuesto");
      });
      $(document).on("change", "#boxPG", function (e) {
        e.preventDefault();
        cambiarEstado($(this), "estado", "G", "Promocion");
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

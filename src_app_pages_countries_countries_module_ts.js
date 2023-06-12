"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_countries_countries_module_ts"],{

/***/ 13441:
/*!****************************************************************************!*\
  !*** ./src/app/pages/countries/countries-list/countries-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesListComponent": () => (/* binding */ CountriesListComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Richard_Vivanco_Documents_GitHub_pinlet_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/components/confirmation/confirmation.component */ 42658);
/* harmony import */ var _theme_components_status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/components/status/status.component */ 36749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/services/country.service */ 5527);










class CountriesListComponent {
  constructor(_router, _countryService, _dialogService, _toastrService) {
    this._router = _router;
    this._countryService = _countryService;
    this._dialogService = _dialogService;
    this._toastrService = _toastrService;
    this.settings = {
      actions: {
        position: 'right',
        add: false,
        edit: false,
        delete: false,
        custom: [{
          name: 'edit',
          title: '<i class="nb-edit"></i>'
        }, {
          name: 'delete',
          title: '<i class="nb-trash"></i>'
        }]
      },
      columns: {
        nombre: {
          title: 'Nombre',
          type: 'string'
        },
        estado: {
          title: 'Estado',
          type: 'custom',
          renderComponent: _theme_components_status_status_component__WEBPACK_IMPORTED_MODULE_2__.StatusComponent,
          onComponentInitFunction: instance => {
            instance.toggle.subscribe(event => {
              const status = event.value ? 'A' : 'I';
              this.updateStatus(event.row.id_pais, status);
            });
          }
        }
      }
    };
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.LocalDataSource();
    this.getCountries();
  }

  getCountries() {
    var _this = this;

    this._countryService.getAll({
      id_usuario: "1"
    }).subscribe({
      next: function () {
        var _ref = (0,C_Users_Richard_Vivanco_Documents_GitHub_pinlet_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          const data = response.filter(x => x.estado != 'E');

          _this.source.load(data);
        });

        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      error: error => {
        console.error(error);
      }
    });
  }

  add() {
    this._router.navigate(['/pages/paises/crear']);
  }

  onCustom(event) {
    switch (event.action) {
      case 'edit':
        this._router.navigate([`/pages/paises/editar/${event.data.id_pais}`]);

        break;

      case 'delete':
        this.onDelete(event.data.id_pais);
        break;

      default:
        break;
    }
  }

  onDelete(value) {
    this._dialogService.open(_theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, {
      context: {
        title: '¿Está seguro de eliminar el registro?'
      }
    }).onClose.subscribe({
      next: response => {
        if (response) {
          this.deleteCountry(value);
        }
      }
    });
  }

  updateStatus(countryId, status) {
    const params = {
      id_pais: countryId,
      estado: status,
      usuario_modificacion: 'admin'
    };

    this._countryService.updateStatus(params).subscribe({
      next: () => {
        this.showToast('success', 'Estado de país actualizado');
      },
      error: () => {
        this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
      }
    });
  }

  deleteCountry(countryId) {
    const params = {
      id_pais: countryId,
      usuario_modificacion: 'admin'
    };

    this._countryService.delete(params).subscribe({
      next: () => {
        this.showToast('success', 'País eliminado');
        this.getCountries();
      },
      error: () => {
        this.showToast('danger', 'Error al eliminar el país');
      }
    });
  }

  showToast(type, text) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 3000,
      hasIcon: false,
      position: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: true
    };

    this._toastrService.show('', text, config);
  }

}

CountriesListComponent.ɵfac = function CountriesListComponent_Factory(t) {
  return new (t || CountriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_country_service__WEBPACK_IMPORTED_MODULE_3__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService));
};

CountriesListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CountriesListComponent,
  selectors: [["ngx-countries-list"]],
  decls: 9,
  vars: 2,
  consts: [[1, "w-100", "d-flex", "justify-content-between"], [1, ""], ["nbButton", "", "status", "info", "hero", "", 3, "click"], [1, "custom-table", 3, "settings", "source", "custom"]],
  template: function CountriesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Pa\u00EDses");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1)(5, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CountriesListComponent_Template_button_click_5_listener() {
        return ctx.add();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Nuevo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "nb-card-body")(8, "ng2-smart-table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("custom", function CountriesListComponent_Template_ng2_smart_table_custom_8_listener($event) {
        return ctx.onCustom($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent],
  styles: ["[_nghost-%COMP%]     tr .ng2-smart-actions {\n  height: auto;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom {\n  display: flex;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom {\n  display: inline-block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUmljaGFyZCUyMFZpdmFuY29cXERvY3VtZW50c1xcR2l0SHViXFxwaW5sZXQtYWRtaW5cXHNyY1xcYXBwXFxwYWdlc1xcY291bnRyaWVzXFxjb3VudHJpZXMtbGlzdFxcY291bnRyaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0FDQ0Q7O0FERUE7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0FDQ0QiLCJmaWxlIjoiY291bnRyaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgdHIgLm5nMi1zbWFydC1hY3Rpb25zIHtcclxuXHRoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktY3VzdG9tIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmcyLXN0LXRib2R5LWN1c3RvbSBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCB0ciAubmcyLXNtYXJ0LWFjdGlvbnMge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktY3VzdG9tIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zdC10Ym9keS1jdXN0b20gYS5uZzItc21hcnQtYWN0aW9uLm5nMi1zbWFydC1hY3Rpb24tY3VzdG9tLWN1c3RvbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
});

/***/ }),

/***/ 43246:
/*!*************************************************************!*\
  !*** ./src/app/pages/countries/countries-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesRoutingModule": () => (/* binding */ CountriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries-list/countries-list.component */ 13441);
/* harmony import */ var _countries_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries.component */ 58748);
/* harmony import */ var _country_form_country_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-form/country-form.component */ 37129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    {
        path: '',
        component: _countries_component__WEBPACK_IMPORTED_MODULE_1__.CountriesComponent,
        children: [
            {
                path: '',
                component: _countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_0__.CountriesListComponent
            },
            {
                path: 'crear',
                component: _country_form_country_form_component__WEBPACK_IMPORTED_MODULE_2__.CountryFormComponent
            },
            {
                path: 'editar/:id',
                component: _country_form_country_form_component__WEBPACK_IMPORTED_MODULE_2__.CountryFormComponent
            }
        ]
    }
];
class CountriesRoutingModule {
}
CountriesRoutingModule.ɵfac = function CountriesRoutingModule_Factory(t) { return new (t || CountriesRoutingModule)(); };
CountriesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CountriesRoutingModule });
CountriesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CountriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 58748:
/*!********************************************************!*\
  !*** ./src/app/pages/countries/countries.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesComponent": () => (/* binding */ CountriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class CountriesComponent {
    constructor() { }
}
CountriesComponent.ɵfac = function CountriesComponent_Factory(t) { return new (t || CountriesComponent)(); };
CountriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountriesComponent, selectors: [["ngx-countries"]], decls: 1, vars: 0, template: function CountriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 6475:
/*!*****************************************************!*\
  !*** ./src/app/pages/countries/countries.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesModule": () => (/* binding */ CountriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _countries_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries.component */ 58748);
/* harmony import */ var _countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries-list/countries-list.component */ 13441);
/* harmony import */ var _country_form_country_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-form/country-form.component */ 37129);
/* harmony import */ var _provinces_provinces_list_provinces_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provinces/provinces-list/provinces-list.component */ 45096);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _countries_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countries-routing.module */ 43246);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);










class CountriesModule {
}
CountriesModule.ɵfac = function CountriesModule_Factory(t) { return new (t || CountriesModule)(); };
CountriesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CountriesModule });
CountriesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _countries_routing_module__WEBPACK_IMPORTED_MODULE_4__.CountriesRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CountriesModule, { declarations: [_countries_component__WEBPACK_IMPORTED_MODULE_0__.CountriesComponent,
        _countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_1__.CountriesListComponent,
        _country_form_country_form_component__WEBPACK_IMPORTED_MODULE_2__.CountryFormComponent,
        _provinces_provinces_list_provinces_list_component__WEBPACK_IMPORTED_MODULE_3__.ProvincesListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _countries_routing_module__WEBPACK_IMPORTED_MODULE_4__.CountriesRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule] }); })();


/***/ }),

/***/ 37129:
/*!************************************************************************!*\
  !*** ./src/app/pages/countries/country-form/country-form.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryFormComponent": () => (/* binding */ CountryFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _core_models_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/models/status */ 99501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/services/country.service */ 5527);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _provinces_provinces_list_provinces_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provinces/provinces-list/provinces-list.component */ 45096);










function CountryFormComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Provincias");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 14)(5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CountryFormComponent_ng_container_20_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.add()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Nuevo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-provinces-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("countryId", ctx_r0.countryId);
} }
class CountryFormComponent {
    constructor(_router, _formBuilder, _activatedRoute, _countryService, _toastrService, _location) {
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._activatedRoute = _activatedRoute;
        this._countryService = _countryService;
        this._toastrService = _toastrService;
        this._location = _location;
        this.provinces = [];
        this.statusOptions = [
            { key: 'Activo', value: _core_models_status__WEBPACK_IMPORTED_MODULE_0__.Status.ACTIVO },
            { key: 'Inactivo', value: _core_models_status__WEBPACK_IMPORTED_MODULE_0__.Status.INACTIVO },
            { key: 'Pendiente', value: _core_models_status__WEBPACK_IMPORTED_MODULE_0__.Status.PENDIENTE }
        ];
        this._activatedRoute.params
            .subscribe(param => {
            this.countryId = param.id;
        });
        this.initForm();
    }
    ngOnInit() {
        if (!!this.countryId) {
            this.getCountry();
            this.action = 'Editar';
        }
        else {
            this.action = 'Crear';
        }
    }
    initForm() {
        this.countryForm = this._formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            estado: [''],
            usuario_creacion: ['admin', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
    }
    getCountry() {
        this._countryService.getById({ id_pais: this.countryId })
            .subscribe({
            next: (response) => {
                this.countryForm.patchValue(response);
                this.selectedStatus = response.estado;
            },
            error: (error) => {
                console.error(error);
            }
        });
    }
    save() {
        if (!!this.countryId) {
            this.update();
        }
        else {
            this.create();
        }
    }
    create() {
        this._countryService.create(this.countryForm.value)
            .subscribe({
            next: (response) => {
                this.showToast('success', 'País creado');
                this.goBack();
            },
            error: (error) => {
                this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
            }
        });
    }
    update() {
        const params = {
            id_pais: this.countryId,
            nombre: this.countryForm.value.nombre,
            usuario_modificacion: 'admin'
        };
        this._countryService.update(params)
            .subscribe({
            next: () => {
                this.showToast('success', 'País actualizado');
            },
            error: () => {
                this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
            }
        });
    }
    changeStatus(status) {
        if (status !== this.selectedStatus) {
            this.selectedStatus = status;
            const params = {
                id_pais: this.countryId,
                estado: status,
                usuario_modificacion: 'admin'
            };
            this._countryService.updateStatus(params)
                .subscribe({
                next: () => {
                    this.showToast('success', '¡Se ha cambiado el estado!');
                },
                error: () => {
                    this.showToast('danger', '¡No se ha podido cambiar el estado!');
                }
            });
        }
    }
    showToast(type, text) {
        const config = {
            status: type,
            destroyByClick: true,
            duration: 3000,
            hasIcon: false,
            position: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbGlobalPhysicalPosition.TOP_RIGHT,
            preventDuplicates: true,
        };
        this._toastrService.show('', text, config);
    }
    add() {
        this._router.navigateByUrl(`/pages/provincias/crear?idPais=${this.countryId}`);
    }
    goBack() {
        this._router.navigate(['/pages/paises']);
    }
}
CountryFormComponent.ɵfac = function CountryFormComponent_Factory(t) { return new (t || CountryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_country_service__WEBPACK_IMPORTED_MODULE_1__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location)); };
CountryFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CountryFormComponent, selectors: [["ngx-country-form"]], decls: 21, vars: 3, consts: [[1, "row"], [1, "col-lg-12"], [1, "w-100", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center", "h5"], [1, "d-flex", "cursor-pointer", "no-hover", "pr-2", 3, "click"], [1, "custom-icon", "nb-arrow-left"], ["nbButton", "", "status", "info", "hero", "", 3, "click"], [3, "formGroup"], [1, "col-sm-4"], [1, "form-group"], ["for", "inputNombre", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "inputNombre", "placeholder", "Nombre", "formControlName", "nombre"], [4, "ngIf"], [1, "w-100", "d-flex", "justify-content-between", "py-3"], [1, ""], [3, "countryId"]], template: function CountryFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CountryFormComponent_Template_a_click_5_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CountryFormComponent_Template_button_click_10_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "nb-card-body")(13, "form", 7)(14, "div", 0)(15, "div", 8)(16, "div", 9)(17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CountryFormComponent_ng_container_20_Template, 8, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.action, " Pa\u00EDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.countryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.countryId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _provinces_provinces_list_provinces_list_component__WEBPACK_IMPORTED_MODULE_2__.ProvincesListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJ5LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_countries_countries_module_ts.js.map
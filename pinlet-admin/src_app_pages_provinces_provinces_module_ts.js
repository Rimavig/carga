"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_provinces_provinces_module_ts"],{

/***/ 26432:
/*!*******************************************************************!*\
  !*** ./src/app/pages/cities/cities-list/cities-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiesListComponent": () => (/* binding */ CitiesListComponent)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@theme/components/confirmation/confirmation.component */ 42658);
/* harmony import */ var _theme_components_status_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/components/status/status.component */ 36749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services/city.service */ 97007);










class CitiesListComponent {
    constructor(_router, _dialogService, _toastrService, _cityService) {
        this._router = _router;
        this._dialogService = _dialogService;
        this._toastrService = _toastrService;
        this._cityService = _cityService;
        this.settings = {
            actions: {
                position: 'right',
                add: false,
                edit: false,
                delete: false,
                custom: [
                    {
                        name: 'edit',
                        title: '<i class="nb-edit"></i>'
                    },
                    {
                        name: 'delete',
                        title: '<i class="nb-trash"></i>'
                    }
                ]
            },
            columns: {
                nombre: {
                    title: 'Nombre',
                    type: 'string'
                },
                estado: {
                    title: 'Estado',
                    type: 'custom',
                    renderComponent: _theme_components_status_status_component__WEBPACK_IMPORTED_MODULE_1__.StatusComponent,
                    onComponentInitFunction: (instance) => {
                        instance.toggle.subscribe(event => {
                            const status = event.value ? 'A' : 'I';
                            this.updateStatus(event.row.id_ciudad, status);
                        });
                    }
                }
            },
            noDataMessage: "No existen registros"
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.LocalDataSource();
    }
    ngOnChanges(changes) {
        if (!!changes['provinceId']?.currentValue) {
            this.provinceId = changes['provinceId']?.currentValue;
            this.getCities(this.provinceId);
        }
    }
    getCities(provinceId) {
        const params = {
            id_usuario: "1",
            id_provincia: provinceId
        };
        this._cityService.getByProvince(params)
            .subscribe({
            next: (response) => {
                const data = response.filter(x => x.estado != 'E');
                this.source.load(data);
            },
            error: (error) => {
                console.error(error);
            }
        });
    }
    onCustom(event) {
        switch (event.action) {
            case 'edit':
                this._router.navigateByUrl(`/pages/ciudades/editar/${event.data.id_ciudad}?idProvincia=${this.provinceId}`);
                break;
            case 'delete':
                this.onDelete(event.data.id_ciudad);
                break;
            default:
                break;
        }
    }
    onDelete(value) {
        this._dialogService.open(_theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationComponent, {
            context: {
                title: '¿Está seguro de eliminar el registro?',
            },
        })
            .onClose.subscribe({
            next: (response => {
                if (response) {
                    this.deleteCity(value);
                }
            })
        });
    }
    updateStatus(cityId, status) {
        const params = {
            id_ciudad: cityId,
            estado: status,
            usuario_modificacion: 'admin'
        };
        this._cityService.updateStatus(params)
            .subscribe({
            next: () => {
                this.showToast('success', 'Estado de ciudad actualizado');
            },
            error: () => {
                this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
            }
        });
    }
    deleteCity(cityId) {
        const params = {
            id_ciudad: cityId,
            usuario_modificacion: 'admin'
        };
        this._cityService.delete(params)
            .subscribe({
            next: () => {
                this.showToast('success', 'Ciudad eliminada');
                this.getCities(this.provinceId);
            },
            error: () => {
                this.showToast('danger', 'Error al eliminar la ciudad');
            }
        });
    }
    showToast(type, text) {
        const config = {
            status: type,
            destroyByClick: true,
            duration: 3000,
            hasIcon: false,
            position: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbGlobalPhysicalPosition.TOP_RIGHT,
            preventDuplicates: true,
        };
        this._toastrService.show('', text, config);
    }
}
CitiesListComponent.ɵfac = function CitiesListComponent_Factory(t) { return new (t || CitiesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_city_service__WEBPACK_IMPORTED_MODULE_2__.CityService)); };
CitiesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CitiesListComponent, selectors: [["ngx-cities-list"]], inputs: { provinceId: "provinceId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 2, consts: [[1, "custom-table", 3, "settings", "source", "custom"]], template: function CitiesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("custom", function CitiesListComponent_Template_ng2_smart_table_custom_0_listener($event) { return ctx.onCustom($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, dependencies: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.Ng2SmartTableComponent], styles: ["[_nghost-%COMP%]     tr .ng2-smart-actions {\n  height: auto;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom {\n  display: flex;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom {\n  display: inline-block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdGllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUmljaGFyZCUyMFZpdmFuY29cXERvY3VtZW50c1xcR2l0SHViXFxwaW5sZXQtYWRtaW5cXHNyY1xcYXBwXFxwYWdlc1xcY2l0aWVzXFxjaXRpZXMtbGlzdFxcY2l0aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0FDQ0Q7O0FERUE7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0FDQ0QiLCJmaWxlIjoiY2l0aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgdHIgLm5nMi1zbWFydC1hY3Rpb25zIHtcclxuXHRoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktY3VzdG9tIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmcyLXN0LXRib2R5LWN1c3RvbSBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCB0ciAubmcyLXNtYXJ0LWFjdGlvbnMge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktY3VzdG9tIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zdC10Ym9keS1jdXN0b20gYS5uZzItc21hcnQtYWN0aW9uLm5nMi1zbWFydC1hY3Rpb24tY3VzdG9tLWN1c3RvbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 71999:
/*!**************************************************************************!*\
  !*** ./src/app/pages/provinces/province-form/province-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvinceFormComponent": () => (/* binding */ ProvinceFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _core_models_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/models/status */ 99501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_province_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/services/province.service */ 44949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _cities_cities_list_cities_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cities/cities-list/cities-list.component */ 26432);










function ProvinceFormComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Ciudades");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 14)(5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProvinceFormComponent_ng_container_20_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.add()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Nuevo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-cities-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("provinceId", ctx_r0.provinceId);
} }
class ProvinceFormComponent {
    constructor(_router, _formBuilder, _activatedRoute, _provinceService, _toastrService) {
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._activatedRoute = _activatedRoute;
        this._provinceService = _provinceService;
        this._toastrService = _toastrService;
        this.cities = [];
        this.statusOptions = [
            { key: 'Activo', value: _core_models_status__WEBPACK_IMPORTED_MODULE_0__.Status.ACTIVO },
            { key: 'Inactivo', value: _core_models_status__WEBPACK_IMPORTED_MODULE_0__.Status.INACTIVO },
            { key: 'Pendiente', value: _core_models_status__WEBPACK_IMPORTED_MODULE_0__.Status.PENDIENTE }
        ];
        this._activatedRoute.params
            .subscribe(param => {
            this.provinceId = param.id;
        });
        this._activatedRoute.queryParams
            .subscribe(param => {
            this.countryId = param.idPais;
        });
        this.initForm();
    }
    ngOnInit() {
        if (!!this.provinceId) {
            this.getProvince();
            this.action = 'Editar';
        }
        else {
            this.action = 'Crear';
        }
    }
    initForm() {
        this.provinceForm = this._formBuilder.group({
            id_pais: [this.countryId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            estado: [''],
            usuario_creacion: ['admin', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
    }
    getProvince() {
        this._provinceService.getById({ id_provincia: this.provinceId })
            .subscribe({
            next: (response) => {
                this.provinceForm.patchValue(response);
                this.countryId = this.provinceForm.get('id_pais').value;
                this.selectedStatus = response.estado;
            },
            error: (error) => {
                console.error(error);
            }
        });
    }
    save() {
        if (!!this.provinceId) {
            this.update();
        }
        else {
            this.create();
        }
    }
    create() {
        this._provinceService.create(this.provinceForm.value)
            .subscribe({
            next: () => {
                this.showToast('success', 'Provincia creada');
                this.goBack();
            },
            error: () => {
                this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
            }
        });
    }
    update() {
        const params = {
            id_provincia: this.provinceId,
            id_pais: this.provinceForm.value.id_pais,
            nombre: this.provinceForm.value.nombre,
            usuario_modificacion: 'admin'
        };
        this._provinceService.update(params)
            .subscribe({
            next: () => {
                this.showToast('success', 'Provincia actualizada');
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
                id_provincia: this.provinceId,
                estado: status,
                usuario_modificacion: 'admin'
            };
            this._provinceService.updateStatus(params)
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
        this._router.navigateByUrl(`/pages/ciudades/crear?idProvincia=${this.provinceId}`);
    }
    goBack() {
        this._router.navigate([`/pages/paises/editar/${this.countryId}`]);
    }
}
ProvinceFormComponent.ɵfac = function ProvinceFormComponent_Factory(t) { return new (t || ProvinceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_province_service__WEBPACK_IMPORTED_MODULE_1__.ProvinceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService)); };
ProvinceFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProvinceFormComponent, selectors: [["ngx-province-form"]], decls: 21, vars: 3, consts: [[1, "row"], [1, "col-lg-12"], [1, "w-100", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center", "h5"], [1, "d-flex", "cursor-pointer", "no-hover", "pr-2", 3, "click"], [1, "custom-icon", "nb-arrow-left"], ["nbButton", "", "status", "info", "hero", "", 3, "click"], [3, "formGroup"], [1, "col-sm-4"], [1, "form-group"], ["for", "inputNombre", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "inputNombre", "placeholder", "Nombre", "formControlName", "nombre"], [4, "ngIf"], [1, "w-100", "d-flex", "justify-content-between", "py-3"], [1, ""], [3, "provinceId"]], template: function ProvinceFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProvinceFormComponent_Template_a_click_5_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProvinceFormComponent_Template_button_click_10_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "nb-card-body")(13, "form", 7)(14, "div", 0)(15, "div", 8)(16, "div", 9)(17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ProvinceFormComponent_ng_container_20_Template, 8, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.action, " Provincia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.provinceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.provinceId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _cities_cities_list_cities_list_component__WEBPACK_IMPORTED_MODULE_2__.CitiesListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm92aW5jZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7643:
/*!*************************************************************!*\
  !*** ./src/app/pages/provinces/provinces-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvincesRoutingModule": () => (/* binding */ ProvincesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _provinces_list_provinces_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provinces-list/provinces-list.component */ 45096);
/* harmony import */ var _provinces_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provinces.component */ 81885);
/* harmony import */ var _province_form_province_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./province-form/province-form.component */ 71999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    {
        path: '',
        component: _provinces_component__WEBPACK_IMPORTED_MODULE_1__.ProvincesComponent,
        children: [
            {
                path: '',
                component: _provinces_list_provinces_list_component__WEBPACK_IMPORTED_MODULE_0__.ProvincesListComponent
            },
            {
                path: 'crear',
                component: _province_form_province_form_component__WEBPACK_IMPORTED_MODULE_2__.ProvinceFormComponent
            },
            {
                path: 'editar/:id',
                component: _province_form_province_form_component__WEBPACK_IMPORTED_MODULE_2__.ProvinceFormComponent
            }
        ]
    }
];
class ProvincesRoutingModule {
}
ProvincesRoutingModule.ɵfac = function ProvincesRoutingModule_Factory(t) { return new (t || ProvincesRoutingModule)(); };
ProvincesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProvincesRoutingModule });
ProvincesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProvincesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 81885:
/*!********************************************************!*\
  !*** ./src/app/pages/provinces/provinces.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvincesComponent": () => (/* binding */ ProvincesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class ProvincesComponent {
    constructor() { }
}
ProvincesComponent.ɵfac = function ProvincesComponent_Factory(t) { return new (t || ProvincesComponent)(); };
ProvincesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProvincesComponent, selectors: [["ngx-provinces"]], decls: 1, vars: 0, template: function ProvincesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 29141:
/*!*****************************************************!*\
  !*** ./src/app/pages/provinces/provinces.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvincesModule": () => (/* binding */ ProvincesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _provinces_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provinces.component */ 81885);
/* harmony import */ var _province_form_province_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./province-form/province-form.component */ 71999);
/* harmony import */ var _cities_cities_list_cities_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cities/cities-list/cities-list.component */ 26432);
/* harmony import */ var _provinces_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provinces-routing.module */ 7643);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);









class ProvincesModule {
}
ProvincesModule.ɵfac = function ProvincesModule_Factory(t) { return new (t || ProvincesModule)(); };
ProvincesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProvincesModule });
ProvincesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _provinces_routing_module__WEBPACK_IMPORTED_MODULE_3__.ProvincesRoutingModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProvincesModule, { declarations: [_provinces_component__WEBPACK_IMPORTED_MODULE_0__.ProvincesComponent,
        _province_form_province_form_component__WEBPACK_IMPORTED_MODULE_1__.ProvinceFormComponent,
        _cities_cities_list_cities_list_component__WEBPACK_IMPORTED_MODULE_2__.CitiesListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _provinces_routing_module__WEBPACK_IMPORTED_MODULE_3__.ProvincesRoutingModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_provinces_provinces_module_ts.js.map
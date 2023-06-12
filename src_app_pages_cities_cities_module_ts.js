"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_cities_cities_module_ts"],{

/***/ 79508:
/*!*******************************************************!*\
  !*** ./src/app/pages/cities/cities-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiesRoutingModule": () => (/* binding */ CitiesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cities_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities.component */ 35496);
/* harmony import */ var _city_form_city_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city-form/city-form.component */ 10648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _cities_component__WEBPACK_IMPORTED_MODULE_0__.CitiesComponent,
        children: [
            {
                path: '',
                component: _cities_component__WEBPACK_IMPORTED_MODULE_0__.CitiesComponent
            },
            {
                path: 'crear',
                component: _city_form_city_form_component__WEBPACK_IMPORTED_MODULE_1__.CityFormComponent
            },
            {
                path: 'editar/:id',
                component: _city_form_city_form_component__WEBPACK_IMPORTED_MODULE_1__.CityFormComponent
            }
        ]
    }
];
class CitiesRoutingModule {
}
CitiesRoutingModule.ɵfac = function CitiesRoutingModule_Factory(t) { return new (t || CitiesRoutingModule)(); };
CitiesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CitiesRoutingModule });
CitiesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CitiesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 35496:
/*!**************************************************!*\
  !*** ./src/app/pages/cities/cities.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiesComponent": () => (/* binding */ CitiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class CitiesComponent {
    constructor() { }
}
CitiesComponent.ɵfac = function CitiesComponent_Factory(t) { return new (t || CitiesComponent)(); };
CitiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CitiesComponent, selectors: [["ngx-cities"]], decls: 1, vars: 0, template: function CitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 45908:
/*!***********************************************!*\
  !*** ./src/app/pages/cities/cities.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiesModule": () => (/* binding */ CitiesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _cities_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities.component */ 35496);
/* harmony import */ var _city_form_city_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city-form/city-form.component */ 10648);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _cities_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cities-routing.module */ 79508);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);








class CitiesModule {
}
CitiesModule.ɵfac = function CitiesModule_Factory(t) { return new (t || CitiesModule)(); };
CitiesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CitiesModule });
CitiesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _cities_routing_module__WEBPACK_IMPORTED_MODULE_2__.CitiesRoutingModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CitiesModule, { declarations: [_cities_component__WEBPACK_IMPORTED_MODULE_0__.CitiesComponent,
        _city_form_city_form_component__WEBPACK_IMPORTED_MODULE_1__.CityFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _cities_routing_module__WEBPACK_IMPORTED_MODULE_2__.CitiesRoutingModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectModule] }); })();


/***/ }),

/***/ 10648:
/*!***************************************************************!*\
  !*** ./src/app/pages/cities/city-form/city-form.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityFormComponent": () => (/* binding */ CityFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _core_models_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/models/status */ 99501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_city_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/services/city.service */ 97007);








class CityFormComponent {
    constructor(_formBuilder, _activatedRoute, _cityService, _toastrService, _router) {
        this._formBuilder = _formBuilder;
        this._activatedRoute = _activatedRoute;
        this._cityService = _cityService;
        this._toastrService = _toastrService;
        this._router = _router;
        this.statusOptions = [
            { key: 'Activo', value: _core_models_status__WEBPACK_IMPORTED_MODULE_0__.Status.ACTIVO },
            { key: 'Inactivo', value: _core_models_status__WEBPACK_IMPORTED_MODULE_0__.Status.INACTIVO },
            { key: 'Pendiente', value: _core_models_status__WEBPACK_IMPORTED_MODULE_0__.Status.PENDIENTE }
        ];
        this._activatedRoute.params
            .subscribe(param => {
            this.cityId = param.id;
        });
        this._activatedRoute.queryParams
            .subscribe(param => {
            this.provinceId = param.idProvincia;
        });
        this.initForm();
    }
    ngOnInit() {
        if (!!this.cityId) {
            this.getCity();
            this.action = 'Editar';
        }
        else {
            this.action = 'Crear';
        }
    }
    initForm() {
        this.cityForm = this._formBuilder.group({
            id_provincia: [this.provinceId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            estado: [''],
            usuario_creacion: ['admin', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    getCity() {
        this._cityService.getById({ id_ciudad: this.cityId })
            .subscribe({
            next: (response) => {
                this.cityForm.patchValue(response);
                this.selectedStatus = response.estado;
            },
            error: (error) => {
                console.error(error);
            }
        });
    }
    save() {
        if (!!this.cityId) {
            this.update();
        }
        else {
            this.create();
        }
    }
    create() {
        this._cityService.create(this.cityForm.value)
            .subscribe({
            next: () => {
                this.showToast('success', 'Ciudad creada');
                this.goBack();
            },
            error: () => {
                this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
            }
        });
    }
    update() {
        const params = {
            id_ciudad: this.cityId,
            id_provincia: this.cityForm.value.id_provincia,
            nombre: this.cityForm.value.nombre,
            estado: this.cityForm.value.estado,
            usuario_modificacion: 'admin'
        };
        this._cityService.update(params)
            .subscribe({
            next: () => {
                this.showToast('success', 'Ciudad actualizada');
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
                id_ciudad: this.cityId,
                estado: status,
                usuario_modificacion: 'admin'
            };
            this._cityService.updateStatus(params)
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
            position: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbGlobalPhysicalPosition.TOP_RIGHT,
            preventDuplicates: true,
        };
        this._toastrService.show('', text, config);
    }
    goBack() {
        this._router.navigateByUrl(`/pages/provincias/editar/${this.provinceId}`);
    }
}
CityFormComponent.ɵfac = function CityFormComponent_Factory(t) { return new (t || CityFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_city_service__WEBPACK_IMPORTED_MODULE_1__.CityService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
CityFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CityFormComponent, selectors: [["ngx-city-form"]], decls: 20, vars: 2, consts: [[1, "row"], [1, "col-lg-12"], [1, "w-100", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center", "h5"], [1, "d-flex", "cursor-pointer", "no-hover", "pr-2", 3, "click"], [1, "custom-icon", "nb-arrow-left"], ["nbButton", "", "status", "info", "hero", "", 3, "click"], [3, "formGroup"], [1, "col-sm-4"], [1, "form-group"], ["for", "inputNombre", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "inputNombre", "placeholder", "Nombre", "formControlName", "nombre"]], template: function CityFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CityFormComponent_Template_a_click_5_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CityFormComponent_Template_button_click_10_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nb-card-body")(13, "form", 7)(14, "div", 0)(15, "div", 8)(16, "div", 9)(17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.action, " Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.cityForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXR5LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_cities_cities_module_ts.js.map
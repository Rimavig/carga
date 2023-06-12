"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["default-src_app_pages_residents_residents-list_residents-list_component_ts"],{

/***/ 6494:
/*!**************************************************************************!*\
  !*** ./src/app/pages/residents/resident-form/resident-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResidentFormComponent": () => (/* binding */ ResidentFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_place_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/services/place.service */ 12368);
/* harmony import */ var _services_resident_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/resident.service */ 18328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function ResidentFormComponent_nb_tab_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-tab", 11)(1, "div", 6)(2, "div", 12)(3, "div", 13)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 12)(7, "div", 13)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 12)(11, "div", 13)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12)(23, "div", 13)(24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Nombres: ", ctx_r0.resident.nombres, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Apellidos: ", ctx_r0.resident.apellidos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("C\u00E9dula: ", ctx_r0.resident.cedula, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Correo: ", ctx_r0.resident.correo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Celular: ", ctx_r0.resident.celular, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Descripci\u00F3n: ", ctx_r0.resident.descripcion, "");
} }
function ResidentFormComponent_nb_tab_8_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r5.id_primario);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.nombre_primario, " ");
} }
function ResidentFormComponent_nb_tab_8_nb_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r6.id_secundario);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r6.nombre_secundario, " ");
} }
const _c0 = function () { return { standalone: true }; };
function ResidentFormComponent_nb_tab_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-tab", 14)(1, "form", 15)(2, "div", 6)(3, "div", 12)(4, "div", 16)(5, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nb-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedChange", function ResidentFormComponent_nb_tab_8_Template_nb_select_selectedChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.onPrimarioChange($event)); })("ngModelChange", function ResidentFormComponent_nb_tab_8_Template_nb_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.selectedPrimario = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ResidentFormComponent_nb_tab_8_nb_option_8_Template, 2, 2, "nb-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12)(10, "div", 16)(11, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nb-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ResidentFormComponent_nb_tab_8_nb_option_14_Template, 2, 2, "nb-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6)(16, "div", 22)(17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResidentFormComponent_nb_tab_8_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.updateResidentPlace()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.residentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.primario);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.selectedPrimario)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.primarioList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.secundario);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.secundarioList);
} }
function ResidentFormComponent_ng_container_11_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "nb-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function ResidentFormComponent_ng_container_11_ng_container_4_div_1_Template_nb_checkbox_checkedChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const subitem_r14 = restoredCtx.$implicit; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.addOrRemovePermission($event, item_r11.id_permiso, subitem_r14.id_permiso)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subitem_r14 = ctx.$implicit;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", subitem_r14.estado === "A")("disabled", !ctx_r13.selectedPermissions.includes(item_r11.id_permiso));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subitem_r14.nombre, " ");
} }
function ResidentFormComponent_ng_container_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResidentFormComponent_ng_container_11_ng_container_4_div_1_Template, 3, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r11.dependientes);
} }
function ResidentFormComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24)(2, "nb-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function ResidentFormComponent_ng_container_11_Template_nb_checkbox_checkedChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const item_r11 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.addOrRemovePermission($event, item_r11.id_permiso)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ResidentFormComponent_ng_container_11_ng_container_4_Template, 2, 1, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", item_r11.estado === "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.permiso);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r11.dependientes.length > 0);
} }
class ResidentFormComponent {
    constructor(_formBuilder, _placeService, _residentService, _toastrService, _dialogService) {
        this._formBuilder = _formBuilder;
        this._placeService = _placeService;
        this._residentService = _residentService;
        this._toastrService = _toastrService;
        this._dialogService = _dialogService;
        this.onlyPermissions = false;
        this.isLoading = false;
        this.primarioList = [];
        this.secundarioList = [];
        this.permissionList = [];
        this.selectedPermissions = [];
        this.initForm();
    }
    ngOnInit() {
        this.getPrimario();
        this.getSecundario(this.resident.id_primario);
        this.selectedPrimario = this.resident.id_primario;
        this.residentForm.patchValue({
            id_secundario: this.resident.id_secundario
        });
        this.getPermissions();
    }
    initForm() {
        this.residentForm = this._formBuilder.group({
            id_secundario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            usuario_modificacion: ['admin', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    getPrimario() {
        const params = {
            id_usuario: 1,
            id_lugar: this.resident.id_lugar
        };
        this._placeService.getPrimarios(params)
            .subscribe({
            next: (response) => {
                this.primarioList = response;
            }
        });
    }
    getSecundario(idPrimario) {
        const params = {
            id_usuario: 1,
            id_primario: idPrimario
        };
        this._placeService.getSecundarios(params)
            .subscribe({
            next: (response) => {
                this.secundarioList = response;
            }
        });
    }
    onPrimarioChange(idPrimario) {
        this.residentForm.patchValue({
            id_secundario: null
        });
        this.getSecundario(idPrimario);
    }
    updateResidentPlace() {
        const params = {
            id_residente_lugar: this.resident.id_residente_lugar,
            id_residente: this.resident.id_residente,
            descripcion: this.resident.descripcion,
            ...this.residentForm.value
        };
        this._residentService.updateResidenteLugar(params)
            .subscribe({
            next: () => {
                this.showToast('success', 'Residencia actualizada');
            },
            error: () => {
                this.showToast('danger', 'Error al actualizar');
            }
        });
    }
    getPermissions() {
        this.isLoading = true;
        const params = {
            id_residente_lugar: this.resident.id_residente_lugar,
            id_lugar: this.resident.id_lugar
        };
        this._residentService.getPermissions(params)
            .subscribe({
            next: (response) => {
                this.permissionList = response;
                this.permissionList.map(x => {
                    if (x.estado == 'A') {
                        this.selectedPermissions.push(x.id_permiso);
                        x.dependientes?.map(c => {
                            if (c.estado == 'A') {
                                this.selectedPermissions.push(c.id_permiso);
                            }
                        });
                    }
                });
                this.isLoading = false;
            }
        });
    }
    addOrRemovePermission(event, parentId, childId) {
        const status = event ? 'A' : 'E';
        this.permissionList = this.permissionList.map(x => {
            if (x.id_permiso == parentId) {
                if (childId) {
                    if (event) {
                        this.selectedPermissions.push(childId);
                    }
                    else {
                        this.selectedPermissions = this.selectedPermissions.filter(p => p != childId);
                    }
                    x.dependientes = x.dependientes.map(c => {
                        if (c.id_permiso == childId) {
                            c.estado = status;
                        }
                        return c;
                    });
                }
                else {
                    if (event) {
                        this.selectedPermissions.push(parentId);
                    }
                    else {
                        this.selectedPermissions = this.selectedPermissions.filter(p => p != x.id_permiso);
                        x.dependientes = x.dependientes.map(c => {
                            this.selectedPermissions = this.selectedPermissions.filter(p => p != c.id_permiso);
                            c.estado = status;
                            return c;
                        });
                    }
                    x.estado = status;
                }
            }
            return x;
        });
    }
    updatePermissions() {
        const params = {
            id_residente_lugar: this.resident.id_residente_lugar,
            lista: this.selectedPermissions.sort((a, b) => a - b),
            usuario_modificacion: 'admin'
        };
        this._residentService.updatePermissions(params)
            .subscribe({
            next: () => {
                if (this.onlyPermissions) {
                    this._dialogService.close(true);
                }
                else {
                    this.showToast('success', 'Permisos actualizados');
                }
            },
            error: () => {
                this.showToast('danger', 'Error al actualizar');
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
ResidentFormComponent.ɵfac = function ResidentFormComponent_Factory(t) { return new (t || ResidentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_place_service__WEBPACK_IMPORTED_MODULE_0__.PlaceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_resident_service__WEBPACK_IMPORTED_MODULE_1__.ResidentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogRef)); };
ResidentFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResidentFormComponent, selectors: [["ngx-resident-form"]], inputs: { resident: "resident", primario: "primario", secundario: "secundario", onlyPermissions: "onlyPermissions" }, decls: 16, vars: 4, consts: [[1, "row", "detail-container"], [1, "col-lg-12"], ["fullWidth", ""], ["tabTitle", "Informaci\u00F3n", 4, "ngIf"], ["tabTitle", "Residencia", 4, "ngIf"], ["tabTitle", "Permisos", 3, "nbSpinner"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "row", "pt-1"], [1, "col-12"], ["nbButton", "", "status", "info", "hero", "", 3, "click"], ["tabTitle", "Informaci\u00F3n"], [1, "col-md-6"], [1, "detail", "py-1"], ["tabTitle", "Residencia"], [1, "mt-2", 3, "formGroup"], [1, "form-group"], ["for", "inputPrimario", 1, "label"], ["fullWidth", "", "id", "inputPrimario", 3, "ngModel", "ngModelOptions", "selectedChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "inputSecundario", 1, "label"], ["fullWidth", "", "id", "inputSecundario", "formControlName", "id_secundario", "placeholder", "Seleccionar una opci\u00F3n"], [1, "col-md-12"], [3, "value"], [1, "col-6", "py-1"], [3, "checked", "checkedChange"], [4, "ngIf"], ["class", "col-6 py-1", 4, "ngFor", "ngForOf"], [3, "checked", "disabled", "checkedChange"]], template: function ResidentFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Editar Residente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-card-body")(6, "nb-tabset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ResidentFormComponent_nb_tab_7_Template, 26, 6, "nb-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ResidentFormComponent_nb_tab_8_Template, 19, 8, "nb-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nb-tab", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ResidentFormComponent_ng_container_11_Template, 5, 3, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResidentFormComponent_Template_button_click_14_listener() { return ctx.updatePermissions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Actualizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.onlyPermissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.onlyPermissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbSpinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.permissionList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTabsetComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTabComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCheckboxComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSpinnerDirective], styles: [".detail-container[_ngcontent-%COMP%] {\n  width: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2lkZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxSaWNoYXJkJTIwVml2YW5jb1xcRG9jdW1lbnRzXFxHaXRIdWJcXHBpbmxldC1hZG1pblxcc3JjXFxhcHBcXHBhZ2VzXFxyZXNpZGVudHNcXHJlc2lkZW50LWZvcm1cXHJlc2lkZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FDQ0QiLCJmaWxlIjoicmVzaWRlbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtY29udGFpbmVyIHtcclxuXHR3aWR0aDogNzAwcHg7XHJcbn0iLCIuZGV0YWlsLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 46609:
/*!****************************************************************************!*\
  !*** ./src/app/pages/residents/residents-list/residents-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResidentsListComponent": () => (/* binding */ ResidentsListComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Richard_Vivanco_Documents_GitHub_pinlet_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/components/confirmation/confirmation.component */ 42658);
/* harmony import */ var _theme_components_status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/components/status/status.component */ 36749);
/* harmony import */ var _resident_form_resident_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resident-form/resident-form.component */ 6494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_resident_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/resident.service */ 18328);
/* harmony import */ var _core_services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/services/place.service */ 12368);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);














const _c0 = ["password"];

function ResidentsListComponent_ng_container_5_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.statusList[item_r4], " ");
  }
}

function ResidentsListComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nb-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedChange", function ResidentsListComponent_ng_container_5_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.getResidents(ctx_r5.placeId, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ResidentsListComponent_ng_container_5_nb_option_2_Template, 2, 2, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx_r0.selectedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.status);
  }
}

function ResidentsListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Clave temporal del usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r7);
  }
}

class ResidentsListComponent {
  constructor(_router, _activatedRoute, _dialogService, _toastrService, _residentService, _placeService) {
    this._router = _router;
    this._activatedRoute = _activatedRoute;
    this._dialogService = _dialogService;
    this._toastrService = _toastrService;
    this._residentService = _residentService;
    this._placeService = _placeService;
    this.status = ["T"];
    this.primario = "Primario";
    this.secundario = "Secundario";
    this.statusList = {
      'T': 'Todos',
      'A': 'Activo',
      'P': 'Pendiente',
      'I': 'Inactivo',
      'R': 'Rechazado',
      'E': 'Eliminado'
    };
    this.customActions = {
      approve: {
        name: 'approve',
        title: '<i class="nb-checkmark" title="Aprobar"></i>'
      },
      decline: {
        name: 'decline',
        title: '<i class="nb-close" title="Rechazar"></i>'
      },
      edit: {
        name: 'edit',
        title: '<i class="nb-edit"></i>'
      },
      delete: {
        name: 'delete',
        title: '<i class="nb-trash"></i>'
      },
      resetPassword: {
        name: 'resetPassword',
        title: '<img src="../../../../assets/images/key-outline.svg" title="Restablecer contraseña">'
      },
      logout: {
        name: 'logout',
        title: '<img src="../../../../assets/images/log-out-outline.svg" title="Cerrar sesión">'
      },
      verify: {
        name: 'verify',
        title: '<img src="../../../../assets/images/person-done-outline.svg" title="Verificar">'
      },
      sendVerificationEmail: {
        name: 'sendVerificationEmail',
        title: '<i class="nb-email" title="Enviar correo de verificación"></i>'
      },
      updatePlace: {
        name: 'updatePlace',
        title: '<i class="nb-home" title="Solicitar actualización de lugar"></i>'
      },
      updateInfo: {
        name: 'updateInfo',
        title: '<i class="nb-list" title="Solicitar actualización de información"></i>'
      },
      accessReport: {
        name: 'accessReport',
        title: '<img src="../../../../assets/images/checklist.svg" title="Reporte de ingreso">'
      }
    };
    this.settings = {
      actions: {
        position: 'right',
        add: false,
        edit: false,
        delete: false,
        custom: []
      },
      columns: {
        nombres: {
          title: 'Nombres',
          type: 'string',
          filter: true
        },
        apellidos: {
          title: 'Apellidos',
          type: 'string',
          filter: true
        },
        cedula: {
          title: 'Cedula',
          type: 'string',
          filter: true
        },
        correo: {
          title: 'Correo',
          type: 'string',
          filter: true
        },
        celular: {
          title: 'Celular',
          type: 'string',
          filter: true
        },
        nombre_primario: {
          title: this.primario,
          type: 'string',
          filter: true
        },
        nombre_secundario: {
          title: this.secundario,
          type: 'string',
          filter: true
        },
        descripcion: {
          title: 'Descripción',
          type: 'string',
          filter: true
        }
      }
    };
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.LocalDataSource();

    const placeId = this._activatedRoute.parent.snapshot.paramMap.get('placeId');

    if (!!placeId) {
      this.placeId = parseInt(placeId);
    } // const status = this._activatedRoute.parent.snapshot.queryParamMap.get('status');


    const status = this._activatedRoute.snapshot.data['status'];

    if (!!status) {
      this.status = status;
    }
  }

  ngOnInit() {
    this._placeService.getPlace({
      id_lugar: this.placeId
    }).subscribe(value => {
      this.primario = value.primario;
      this.secundario = value.secundario;
    });

    this.selectedStatus = this.status[0];
    this.getResidents(this.placeId, this.selectedStatus);
    this.setActions();
  }

  setActions() {
    var _this = this;

    this.settings.actions.custom = [];

    switch (this.selectedStatus) {
      case "P":
        this.settings.actions.custom.push(this.customActions.approve);
        this.settings.actions.custom.push(this.customActions.decline);
        break;

      case "A":
        this.settings.actions.custom.push(...[this.customActions.accessReport, this.customActions.updatePlace, this.customActions.updateInfo, this.customActions.sendVerificationEmail, this.customActions.verify, this.customActions.logout, this.customActions.resetPassword, this.customActions.edit, this.customActions.delete]);
        this.settings.columns['estado'] = {
          title: 'Estado',
          type: 'custom',
          renderComponent: _theme_components_status_status_component__WEBPACK_IMPORTED_MODULE_2__.StatusComponent,
          onComponentInitFunction: instance => {
            instance.toggle.subscribe( /*#__PURE__*/function () {
              var _ref = (0,C_Users_Richard_Vivanco_Documents_GitHub_pinlet_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
                const status = event.value ? 'A' : 'I';
                yield _this.updateStatus(event.row.id_residente_lugar, status);

                _this.getResidents(_this.placeId, _this.selectedStatus);
              });

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          },
          filter: false
        };
        break;

      case "I":
      case "R":
      case "E":
        this.settings.actions.custom.push(this.customActions.approve);
        this.settings.actions.custom.push(this.customActions.delete);
        break;
    }
  }

  getResidents(placeId, status) {
    this.selectedStatus = status;

    if (!this.secundarioId) {
      const params = {
        id_lugar: placeId,
        estado: status
      };

      this._residentService.getByPlace(params).subscribe({
        next: response => {
          this.source.load(response);
        },
        error: error => {
          console.error(error);
        }
      });
    } else {
      this._residentService.getBySecundario({
        id_secundario: this.secundarioId
      }).subscribe({
        next: response => {
          this.source.load(response);
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }

  onCustom(event) {
    switch (event.action) {
      case 'edit':
        this._dialogService.open(_resident_form_resident_form_component__WEBPACK_IMPORTED_MODULE_3__.ResidentFormComponent, {
          context: {
            resident: event.data,
            primario: this.primario,
            secundario: this.secundario
          }
        }).onClose.subscribe(() => {
          this.getResidents(this.placeId, this.selectedStatus);
        });

        break;

      case 'delete':
        if (this.selectedStatus == 'A') {
          this.onUpdateStatus(event.data.id_residente_lugar, "E");
        } else {
          this.onDelete(event.data.id_residente_lugar);
        }

        break;

      case 'approve':
        this.onApprove(event.data, "A");
        break;

      case 'decline':
        this.onUpdateStatus(event.data.id_residente_lugar, "R");
        break;

      case 'resetPassword':
        this.onResetPassword(event.data.id_residente);
        break;

      case 'logout':
        this.onResidentLogout(event.data.id_residente);
        break;

      case 'verify':
        this.onVerify(event.data.id_residente);
        break;

      case 'sendVerificationEmail':
        this.onSendVerificationEmail(event.data.id_residente);
        break;

      case 'updatePlace':
        this.onUpdatePlace(event.data.id_residente_lugar);
        break;

      case 'updateInfo':
        this.onUpdateInfo(event.data.id_residente);
        break;

      case 'accessReport':
        this.onAccessReport(event.data.id_residente_lugar, event.data.id_residente);
        break;

      default:
        break;
    }
  }

  add() {
    this._router.navigate(['/pages/residentes/crear']);
  }

  onDelete(value) {
    this._dialogService.open(_theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, {
      context: {
        title: '¿Está seguro de eliminar el registro?'
      }
    }).onClose.subscribe({
      next: response => {
        if (response) {
          this.deleteResident(value);
        }
      }
    });
  }

  deleteResident(residentPlaceId) {
    const params = {
      id_residente_lugar: residentPlaceId,
      usuario_modificacion: 'admin'
    };

    this._residentService.delete(params).subscribe({
      next: () => {
        this.showToast('success', 'Residente eliminado');
        this.getResidents(this.placeId, this.selectedStatus);
      },
      error: () => {
        this.showToast('danger', 'Error al eliminar el residente');
      }
    });
  }

  onApprove(value, status) {
    var _this2 = this;

    this._dialogService.open(_resident_form_resident_form_component__WEBPACK_IMPORTED_MODULE_3__.ResidentFormComponent, {
      context: {
        resident: value,
        primario: this.primario,
        secundario: this.secundario,
        onlyPermissions: true
      }
    }).onClose.subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_Richard_Vivanco_Documents_GitHub_pinlet_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        if (response) {
          yield _this2.updateStatus(value.id_residente_lugar, status);

          _this2.getResidents(_this2.placeId, _this2.selectedStatus);
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  onUpdateStatus(value, status) {
    var _this3 = this;

    this._dialogService.open(_theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, {
      context: {
        title: '¿Está seguro de actulizar el estado del registro?'
      }
    }).onClose.subscribe({
      next: function () {
        var _ref3 = (0,C_Users_Richard_Vivanco_Documents_GitHub_pinlet_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          if (response) {
            yield _this3.updateStatus(value, status);

            _this3.getResidents(_this3.placeId, _this3.selectedStatus);
          }
        });

        return function next(_x3) {
          return _ref3.apply(this, arguments);
        };
      }()
    });
  }

  updateStatus(residentPlaceId, status) {
    return new Promise(resolve => {
      const params = {
        id_residente_lugar: residentPlaceId,
        estado: status,
        usuario_modificacion: 'admin'
      };

      this._residentService.updateStatus(params).subscribe({
        next: () => {
          this.showToast('success', 'Estado actualizado');
        },
        error: () => {
          this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
        },
        complete: () => {
          setTimeout(() => {
            resolve();
          }, 0);
        }
      });
    });
  }

  onResetPassword(value) {
    this._dialogService.open(_theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, {
      context: {
        title: '¿Está seguro de restablecer la contraseña del residente?'
      }
    }).onClose.subscribe({
      next: response => {
        if (response) {
          this.resetPassword(value);
        }
      }
    });
  }

  resetPassword(residentId) {
    const params = {
      id_residente: residentId,
      usuario_modificacion: 'admin'
    };

    this._residentService.resetPassword(params).subscribe({
      next: response => {
        this._dialogService.open(this.dialog, {
          context: response.clave
        });
      },
      error: () => {
        this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
      }
    });
  }

  onResidentLogout(value) {
    this._dialogService.open(_theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, {
      context: {
        title: '¿Está seguro de cerrar la sesión del residente?'
      }
    }).onClose.subscribe({
      next: response => {
        if (response) {
          this.residentLogout(value);
        }
      }
    });
  }

  residentLogout(residentId) {
    const params = {
      id_residente: residentId,
      usuario_modificacion: 'admin'
    };

    this._residentService.residentLogout(params).subscribe({
      next: () => {
        this.showToast('success', 'Sesión finalizada');
      },
      error: () => {
        this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
      }
    });
  }

  onVerify(value) {
    this._dialogService.open(_theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, {
      context: {
        title: '¿Está seguro de verificar la cuenta del residente?'
      }
    }).onClose.subscribe({
      next: response => {
        if (response) {
          this.verify(value);
        }
      }
    });
  }

  verify(residentId) {
    const params = {
      id_residente: residentId,
      usuario_modificacion: 'admin'
    };

    this._residentService.verify(params).subscribe({
      next: () => {
        this.showToast('success', 'Cuenta verificada');
      },
      error: () => {
        this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
      }
    });
  }

  onSendVerificationEmail(value) {
    this._dialogService.open(_theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, {
      context: {
        title: '¿Está seguro de enviar el correo de verificación al residente?'
      }
    }).onClose.subscribe({
      next: response => {
        if (response) {
          this.sendVerificationEmail(value);
        }
      }
    });
  }

  sendVerificationEmail(residentId) {
    const params = {
      id_residente: residentId,
      usuario_modificacion: 'admin'
    };

    this._residentService.sendVerificationEmail(params).subscribe({
      next: () => {
        this.showToast('success', 'Correo enviado');
      },
      error: () => {
        this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
      }
    });
  }

  onUpdatePlace(value) {
    this._dialogService.open(_theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, {
      context: {
        title: '¿Está seguro de solicitar la actualización de lugar?'
      }
    }).onClose.subscribe({
      next: response => {
        if (response) {
          this.updatePlace(value);
        }
      }
    });
  }

  updatePlace(residentPlaceId) {
    const params = {
      id_residente_lugar: residentPlaceId,
      estado: 'S',
      usuario_modificacion: 'admin'
    };

    this._residentService.updatePlace(params).subscribe({
      next: () => {
        this.showToast('success', 'Solicitud establecida');
      },
      error: () => {
        this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
      }
    });
  }

  onUpdateInfo(value) {
    this._dialogService.open(_theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, {
      context: {
        title: '¿Está seguro de solicitar la actualización de información?'
      }
    }).onClose.subscribe({
      next: response => {
        if (response) {
          this.updateInfo(value);
        }
      }
    });
  }

  updateInfo(residentId) {
    const params = {
      id_residente: residentId,
      estado: 'P',
      usuario_modificacion: 'admin'
    };

    this._residentService.updateInfo(params).subscribe({
      next: () => {
        this.showToast('success', 'Solicitud establecida');
      },
      error: () => {
        this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
      }
    });
  }

  onAccessReport(residentPlaceId, residentId) {
    this._router.navigateByUrl(`/pages/reporte-ingreso?idResidente=${residentId}&idResidenteLugar=${residentPlaceId}`);
  }

  showToast(type, text) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 3000,
      hasIcon: false,
      position: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: true
    };

    this._toastrService.show('', text, config);
  }

}

ResidentsListComponent.ɵfac = function ResidentsListComponent_Factory(t) {
  return new (t || ResidentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_resident_service__WEBPACK_IMPORTED_MODULE_4__.ResidentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_place_service__WEBPACK_IMPORTED_MODULE_5__.PlaceService));
};

ResidentsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ResidentsListComponent,
  selectors: [["ngx-residents-list"]],
  viewQuery: function ResidentsListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    }
  },
  inputs: {
    placeId: "placeId",
    secundarioId: "secundarioId",
    status: "status",
    primario: "primario",
    secundario: "secundario"
  },
  decls: 10,
  vars: 3,
  consts: [[1, "w-100", "d-flex", "justify-content-between"], [1, "d-flex"], [4, "ngIf"], [1, "custom-table", 3, "settings", "source", "custom"], ["password", ""], ["status", "basic", 1, "pr-4", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "password-container"], [1, "text-center", "pt-3"]],
  template: function ResidentsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Residentes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ResidentsListComponent_ng_container_5_Template, 3, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "nb-card-body")(7, "ng2-smart-table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("custom", function ResidentsListComponent_Template_ng2_smart_table_custom_7_listener($event) {
        return ctx.onCustom($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ResidentsListComponent_ng_template_8_Template, 5, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.status.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbOptionComponent],
  styles: ["[_nghost-%COMP%]     tr .ng2-smart-actions {\n  height: auto;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom {\n  display: flex;\n  align-items: center;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom img {\n  width: 22px;\n  filter: contrast(0.3);\n}\n\n.password-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2lkZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUmljaGFyZCUyMFZpdmFuY29cXERvY3VtZW50c1xcR2l0SHViXFxwaW5sZXQtYWRtaW5cXHNyY1xcYXBwXFxwYWdlc1xccmVzaWRlbnRzXFxyZXNpZGVudHMtbGlzdFxccmVzaWRlbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxXQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtBQ0FEIiwiZmlsZSI6InJlc2lkZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHRyIC5uZzItc21hcnQtYWN0aW9ucyB7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmcyLXN0LXRib2R5LWN1c3RvbSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmcyLXN0LXRib2R5LWN1c3RvbSBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFxyXG5cdGltZyB7XHJcblx0XHR3aWR0aDogMjJweDtcclxuXHRcdGZpbHRlcjogY29udHJhc3QoMC4zKTtcclxuXHR9XHJcbn1cclxuXHJcbi5wYXNzd29yZC1jb250YWluZXIge1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufSIsIjpob3N0IDo6bmctZGVlcCB0ciAubmcyLXNtYXJ0LWFjdGlvbnMge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktY3VzdG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zdC10Ym9keS1jdXN0b20gYS5uZzItc21hcnQtYWN0aW9uLm5nMi1zbWFydC1hY3Rpb24tY3VzdG9tLWN1c3RvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktY3VzdG9tIGEubmcyLXNtYXJ0LWFjdGlvbi5uZzItc21hcnQtYWN0aW9uLWN1c3RvbS1jdXN0b20gaW1nIHtcbiAgd2lkdGg6IDIycHg7XG4gIGZpbHRlcjogY29udHJhc3QoMC4zKTtcbn1cblxuLnBhc3N3b3JkLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59Il19 */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_residents_residents-list_residents-list_component_ts.js.map
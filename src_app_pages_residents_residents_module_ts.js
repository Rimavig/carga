"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_residents_residents_module_ts"],{

/***/ 3531:
/*!*************************************************************!*\
  !*** ./src/app/pages/residents/residents-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResidentsRoutingModule": () => (/* binding */ ResidentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _resident_form_resident_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resident-form/resident-form.component */ 6494);
/* harmony import */ var _residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./residents-list/residents-list.component */ 46609);
/* harmony import */ var _residents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./residents.component */ 66949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    {
        path: '',
        component: _residents_component__WEBPACK_IMPORTED_MODULE_2__.ResidentsComponent,
        children: [
            {
                path: '',
                component: _residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_1__.ResidentsListComponent
            },
            {
                path: 'crear',
                component: _resident_form_resident_form_component__WEBPACK_IMPORTED_MODULE_0__.ResidentFormComponent
            },
            {
                path: 'editar',
                component: _resident_form_resident_form_component__WEBPACK_IMPORTED_MODULE_0__.ResidentFormComponent
            }
        ]
    }
];
class ResidentsRoutingModule {
}
ResidentsRoutingModule.ɵfac = function ResidentsRoutingModule_Factory(t) { return new (t || ResidentsRoutingModule)(); };
ResidentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ResidentsRoutingModule });
ResidentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResidentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 66949:
/*!********************************************************!*\
  !*** ./src/app/pages/residents/residents.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResidentsComponent": () => (/* binding */ ResidentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class ResidentsComponent {
    constructor() { }
}
ResidentsComponent.ɵfac = function ResidentsComponent_Factory(t) { return new (t || ResidentsComponent)(); };
ResidentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResidentsComponent, selectors: [["ngx-residents"]], decls: 1, vars: 0, template: function ResidentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 45315:
/*!*****************************************************!*\
  !*** ./src/app/pages/residents/residents.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResidentsModule": () => (/* binding */ ResidentsModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./residents-list/residents-list.component */ 46609);
/* harmony import */ var _residents_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./residents-routing.module */ 3531);
/* harmony import */ var _residents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./residents.component */ 66949);
/* harmony import */ var _resident_form_resident_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resident-form/resident-form.component */ 6494);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);









class ResidentsModule {
}
ResidentsModule.ɵfac = function ResidentsModule_Factory(t) { return new (t || ResidentsModule)(); };
ResidentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ResidentsModule });
ResidentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_4__.ThemeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _residents_routing_module__WEBPACK_IMPORTED_MODULE_1__.ResidentsRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCheckboxModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSpinnerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbDatepickerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ResidentsModule, { declarations: [_residents_component__WEBPACK_IMPORTED_MODULE_2__.ResidentsComponent,
        _residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_0__.ResidentsListComponent,
        _resident_form_resident_form_component__WEBPACK_IMPORTED_MODULE_3__.ResidentFormComponent], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_4__.ThemeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _residents_routing_module__WEBPACK_IMPORTED_MODULE_1__.ResidentsRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCheckboxModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSpinnerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbDatepickerModule], exports: [_residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_0__.ResidentsListComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_residents_residents_module_ts.js.map
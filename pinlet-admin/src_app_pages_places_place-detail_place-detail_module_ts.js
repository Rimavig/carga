"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_places_place-detail_place-detail_module_ts"],{

/***/ 19031:
/*!**************************************************************************!*\
  !*** ./src/app/pages/places/place-detail/place-detail-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailRoutingModule": () => (/* binding */ PlaceDetailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _place_form_place_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../place-form/place-form.component */ 4249);
/* harmony import */ var _residents_residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../residents/residents-list/residents-list.component */ 46609);
/* harmony import */ var _primario_list_primario_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primario-list/primario-list.component */ 89433);
/* harmony import */ var _place_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-detail.component */ 51921);
/* harmony import */ var _ads_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ads/ads-list/ads-list.component */ 47650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [
    {
        path: '',
        component: _place_detail_component__WEBPACK_IMPORTED_MODULE_3__.PlaceDetailComponent,
        children: [
            {
                path: '',
                component: _place_form_place_form_component__WEBPACK_IMPORTED_MODULE_0__.PlaceFormComponent
            },
            {
                path: 'residentes',
                component: _residents_residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_1__.ResidentsListComponent,
                data: {
                    status: ['A']
                }
            },
            {
                path: 'residentes/pendientes',
                component: _residents_residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_1__.ResidentsListComponent,
                data: {
                    status: ['P']
                }
            },
            {
                path: 'residentes/inactivos',
                component: _residents_residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_1__.ResidentsListComponent,
                data: {
                    status: ['I', 'R', 'E']
                }
            },
            {
                path: 'primario-secundario',
                component: _primario_list_primario_list_component__WEBPACK_IMPORTED_MODULE_2__.PrimarioListComponent
            },
            {
                path: 'anuncios',
                component: _ads_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__.AdsListComponent
            }
        ]
    }
];
class PlaceDetailRoutingModule {
}
PlaceDetailRoutingModule.ɵfac = function PlaceDetailRoutingModule_Factory(t) { return new (t || PlaceDetailRoutingModule)(); };
PlaceDetailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PlaceDetailRoutingModule });
PlaceDetailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PlaceDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 51921:
/*!*********************************************************************!*\
  !*** ./src/app/pages/places/place-detail/place-detail.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailComponent": () => (/* binding */ PlaceDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 96953);



class PlaceDetailComponent {
    constructor(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.menu = [];
        this.tabs = [];
        this.placeId = parseInt(this._activatedRoute.snapshot.paramMap.get("placeId"));
        this.menu = [
            {
                title: 'Información del lugar',
                icon: 'list-outline',
                link: `/pages/lugares/${this.placeId}`,
                home: true
            },
            {
                title: 'Primarios y secundarios',
                icon: 'grid-outline',
                link: `/pages/lugares/${this.placeId}/primario-secundario`,
                home: false
            },
            {
                title: 'Residentes aprobados',
                icon: 'checkmark-outline',
                link: `/pages/lugares/${this.placeId}/residentes`,
                home: false
            },
            {
                title: 'Residentes pendientes',
                icon: 'alert-circle-outline',
                link: `/pages/lugares/${this.placeId}/residentes/pendientes`,
                home: false
            }
        ];
        this.tabs = [
            {
                title: 'Información del lugar',
                route: `/pages/lugares/${this.placeId}`
            },
            {
                title: 'Primarios y secundarios',
                route: `/pages/lugares/${this.placeId}/primario-secundario`
            },
            {
                title: 'Residentes pendientes',
                route: `/pages/lugares/${this.placeId}/residentes/pendientes`
            },
            {
                title: 'Residentes aprobados',
                route: `/pages/lugares/${this.placeId}/residentes`
            },
            {
                title: 'Residentes inactivos',
                route: `/pages/lugares/${this.placeId}/residentes/inactivos`
            },
            {
                title: 'Anuncios',
                route: `/pages/lugares/${this.placeId}/anuncios`
            }
        ];
    }
    goBack() {
        this._router.navigateByUrl('/pages/lugares');
    }
}
PlaceDetailComponent.ɵfac = function PlaceDetailComponent_Factory(t) { return new (t || PlaceDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
PlaceDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaceDetailComponent, selectors: [["ngx-place-detail"]], decls: 7, vars: 1, consts: [[1, "w-100", "d-flex", "align-items-center"], [1, "d-flex", "cursor-pointer", "no-hover", "pr-2", "h5", "m-0", 3, "click"], [1, "custom-icon", "nb-arrow-left"], [3, "tabs"]], template: function PlaceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaceDetailComponent_Template_a_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lugares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-route-tabset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabs", ctx.tabs);
    } }, dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbRouteTabsetComponent], encapsulation: 2 });


/***/ }),

/***/ 93945:
/*!******************************************************************!*\
  !*** ./src/app/pages/places/place-detail/place-detail.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailModule": () => (/* binding */ PlaceDetailModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@theme/theme.module */ 80268);
/* harmony import */ var _place_detail_place_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../place-detail/place-detail-routing.module */ 19031);
/* harmony import */ var _place_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place-detail.component */ 51921);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class PlaceDetailModule {
}
PlaceDetailModule.ɵfac = function PlaceDetailModule_Factory(t) { return new (t || PlaceDetailModule)(); };
PlaceDetailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PlaceDetailModule });
PlaceDetailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _place_detail_place_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.PlaceDetailRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbMenuModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbRouteTabsetModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PlaceDetailModule, { declarations: [_place_detail_component__WEBPACK_IMPORTED_MODULE_2__.PlaceDetailComponent], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _place_detail_place_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.PlaceDetailRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbMenuModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbRouteTabsetModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_places_place-detail_place-detail_module_ts.js.map
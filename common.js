"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["common"],{

/***/ 99501:
/*!****************************************!*\
  !*** ./src/app/@core/models/status.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
var Status;
(function (Status) {
    Status["ACTIVO"] = "A";
    Status["INACTIVO"] = "I";
    Status["PENDIENTE"] = "P";
})(Status || (Status = {}));


/***/ }),

/***/ 97007:
/*!************************************************!*\
  !*** ./src/app/@core/services/city.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityService": () => (/* binding */ CityService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class CityService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    create(params) {
        const endpoint = `${this.apiUrl}/insertCiudad`;
        return this.http.post(endpoint, params);
    }
    getByProvince(params) {
        const endpoint = `${this.apiUrl}/getAllCiudad`;
        return this.http.post(endpoint, params);
    }
    getById(params) {
        const endpoint = `${this.apiUrl}/getCiudad`;
        return this.http.post(endpoint, params);
    }
    update(params) {
        const endpoint = `${this.apiUrl}/updateCiudad`;
        return this.http.post(endpoint, params);
    }
    updateStatus(params) {
        const endpoint = `${this.apiUrl}/updateEstadoCiudad`;
        return this.http.post(endpoint, params);
    }
    delete(params) {
        const endpoint = `${this.apiUrl}/deleteCiudad`;
        return this.http.post(endpoint, params);
    }
}
CityService.ɵfac = function CityService_Factory(t) { return new (t || CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CityService, factory: CityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 44949:
/*!****************************************************!*\
  !*** ./src/app/@core/services/province.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvinceService": () => (/* binding */ ProvinceService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class ProvinceService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    create(params) {
        const endpoint = `${this.apiUrl}/insertProvincia`;
        return this.http.post(endpoint, params);
    }
    getByCountry(params) {
        const endpoint = `${this.apiUrl}/getAllProvincia`;
        return this.http.post(endpoint, params);
    }
    getById(params) {
        const endpoint = `${this.apiUrl}/getProvincia`;
        return this.http.post(endpoint, params);
    }
    update(params) {
        const endpoint = `${this.apiUrl}/updateProvincia`;
        return this.http.post(endpoint, params);
    }
    updateStatus(params) {
        const endpoint = `${this.apiUrl}/updateEstadoProvincia`;
        return this.http.post(endpoint, params);
    }
    delete(params) {
        const endpoint = `${this.apiUrl}/deleteProvincia`;
        return this.http.post(endpoint, params);
    }
}
ProvinceService.ɵfac = function ProvinceService_Factory(t) { return new (t || ProvinceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProvinceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProvinceService, factory: ProvinceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 45096:
/*!****************************************************************************!*\
  !*** ./src/app/pages/provinces/provinces-list/provinces-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvincesListComponent": () => (/* binding */ ProvincesListComponent)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _theme_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@theme/components/confirmation/confirmation.component */ 42658);
/* harmony import */ var _theme_components_status_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/components/status/status.component */ 36749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_province_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services/province.service */ 44949);










class ProvincesListComponent {
    constructor(_router, _dialogService, _toastrService, _provinceService) {
        this._router = _router;
        this._dialogService = _dialogService;
        this._toastrService = _toastrService;
        this._provinceService = _provinceService;
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
                            this.updateStatus(event.row.id_provincia, status);
                        });
                    }
                }
            },
            noDataMessage: "No existen registros"
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.LocalDataSource();
    }
    ngOnChanges(changes) {
        if (!!changes['countryId']?.currentValue) {
            this.countryId = changes['countryId']?.currentValue;
            this.getProvinces(this.countryId);
        }
    }
    getProvinces(countryId) {
        const params = {
            id_usuario: "1",
            id_pais: countryId
        };
        this._provinceService.getByCountry(params)
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
                this._router.navigateByUrl(`/pages/provincias/editar/${event.data.id_provincia}`);
                break;
            case 'delete':
                this.onDelete(event.data.id_provincia);
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
        }).onClose.subscribe({
            next: (response => {
                if (response) {
                    this.deleteProvince(value);
                }
            })
        });
    }
    updateStatus(provinceId, status) {
        const params = {
            id_provincia: provinceId,
            estado: status,
            usuario_modificacion: 'admin'
        };
        this._provinceService.updateStatus(params)
            .subscribe({
            next: () => {
                this.showToast('success', 'Estado de provincia actualizado');
            },
            error: () => {
                this.showToast('danger', 'Ha ocurrido un error. Intente nuevamente');
            }
        });
    }
    deleteProvince(provinceId) {
        const params = {
            id_provincia: provinceId,
            usuario_modificacion: 'admin'
        };
        this._provinceService.delete(params)
            .subscribe({
            next: () => {
                this.showToast('success', 'Provincia eliminada');
                this.getProvinces(this.countryId);
            },
            error: () => {
                this.showToast('danger', 'Error al eliminar la provincia');
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
ProvincesListComponent.ɵfac = function ProvincesListComponent_Factory(t) { return new (t || ProvincesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_province_service__WEBPACK_IMPORTED_MODULE_2__.ProvinceService)); };
ProvincesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProvincesListComponent, selectors: [["ngx-provinces-list"]], inputs: { countryId: "countryId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 2, consts: [[1, "custom-table", 3, "settings", "source", "custom"]], template: function ProvincesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("custom", function ProvincesListComponent_Template_ng2_smart_table_custom_0_listener($event) { return ctx.onCustom($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, dependencies: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.Ng2SmartTableComponent], styles: ["[_nghost-%COMP%]     tr .ng2-smart-actions {\n  height: auto;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom {\n  display: flex;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom {\n  display: inline-block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpbmNlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUmljaGFyZCUyMFZpdmFuY29cXERvY3VtZW50c1xcR2l0SHViXFxwaW5sZXQtYWRtaW5cXHNyY1xcYXBwXFxwYWdlc1xccHJvdmluY2VzXFxwcm92aW5jZXMtbGlzdFxccHJvdmluY2VzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0FDQ0Q7O0FERUE7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0FDQ0QiLCJmaWxlIjoicHJvdmluY2VzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgdHIgLm5nMi1zbWFydC1hY3Rpb25zIHtcclxuXHRoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktY3VzdG9tIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmcyLXN0LXRib2R5LWN1c3RvbSBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiOmhvc3QgOjpuZy1kZWVwIHRyIC5uZzItc21hcnQtYWN0aW9ucyB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zdC10Ym9keS1jdXN0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXN0LXRib2R5LWN1c3RvbSBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=common.js.map
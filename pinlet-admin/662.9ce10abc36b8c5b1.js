"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[662],{14019:(O,y,s)=>{s.d(y,{C:()=>q});var C=s(15861),c=s(24006),u=s(36517),g=s(92340),e=s(30551),F=s(12368),p=s(36895);function x(i,r){if(1&i&&(e.\u0275\u0275elementStart(0,"span",14),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("(",t.tiempo," d\xedas)")}}function k(i,r){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",15),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext(2).$implicit;return e.\u0275\u0275resetView(o.editar=!0)}),e.\u0275\u0275text(1,"Editar"),e.\u0275\u0275elementEnd()}}function D(i,r){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"input",16),e.\u0275\u0275listener("ngModelChange",function(o){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2).$implicit;return e.\u0275\u0275resetView(a.tiempo=o)}),e.\u0275\u0275elementEnd()}if(2&i){const t=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275property("ngModel",t.tiempo)}}function S(i,r){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",17),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext(2).$implicit,a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.changeTime(o))}),e.\u0275\u0275text(1,"Guardar"),e.\u0275\u0275elementEnd()}}function E(i,r){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,x,2,1,"span",10),e.\u0275\u0275template(2,k,2,0,"a",11),e.\u0275\u0275template(3,D,1,1,"input",12),e.\u0275\u0275template(4,S,2,0,"button",13),e.\u0275\u0275elementContainerEnd()),2&i){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.editar),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.editar),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.editar),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.editar)}}function T(i,r){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",7)(2,"nb-checkbox",8),e.\u0275\u0275listener("checkedChange",function(o){const l=e.\u0275\u0275restoreView(t).$implicit,v=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(v.addOrRemoveBenefit(o,l.id_beneficio))}),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,E,5,4,"ng-container",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&i){const t=r.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275property("checked","A"===t.estado),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.nombre," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","A"===t.estado)}}let I=(()=>{class i{constructor(t,n,o){this._placeService=t,this._toastrService=n,this._dialogService=o,this.onlyPermissions=!1,this.isLoading=!1,this.benefitList=[],this.selectedBenefits=[]}ngOnInit(){this.getBenefits()}getBenefits(){this.isLoading=!0,this._placeService.getBenefits({id_lugar:this.placeId}).subscribe({next:n=>{this.benefitList=n,this.benefitList.map(o=>{if("A"==o.estado){const{id_beneficio:a,tiempo:l}=o;this.selectedBenefits.push({id_beneficio:a,tiempo:l})}}),this.isLoading=!1}})}addOrRemoveBenefit(t,n){const o=t?"A":"I";this.benefitList=this.benefitList.map(a=>{if(a.id_beneficio==n){if(t){const{id_beneficio:l,tiempo:v}=a;this.selectedBenefits.push({id_beneficio:l,tiempo:v})}else this.selectedBenefits=this.selectedBenefits.filter(l=>l.id_beneficio!=n);a.estado=o}return a})}changeTime(t){t.editar=!1,this.selectedBenefits=this.selectedBenefits.map(n=>(n.id_beneficio==t.id_beneficio&&(n.tiempo=t.tiempo),n))}updateBenefits(){this._placeService.updateBenefits({id_lugar:this.placeId,lista:this.selectedBenefits,usuario_modificacion:"admin"}).subscribe({next:()=>{this.onlyPermissions?this._dialogService.close(!0):this.showToast("success","Beneficios actualizados")},error:()=>{this.showToast("danger","Error al actualizar")}})}showToast(t,n){this._toastrService.show("",n,{status:t,destroyByClick:!0,duration:3e3,hasIcon:!1,position:u.fe3.TOP_RIGHT,preventDuplicates:!0})}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(F.k),e.\u0275\u0275directiveInject(u.quB),e.\u0275\u0275directiveInject(u.X4l))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ngx-benefits"]],inputs:{placeId:"placeId",onlyPermissions:"onlyPermissions"},decls:12,vars:1,consts:[[1,"row","detail-container"],[1,"col-lg-12"],[1,"row"],[4,"ngFor","ngForOf"],[1,"row","pt-1"],[1,"col-12"],["nbButton","","status","info","hero","",3,"click"],[1,"col-6","py-1","d-flex","align-items-center"],[3,"checked","checkedChange"],[4,"ngIf"],["class","pl-2",4,"ngIf"],["class","cursor-pointer pl-2",3,"click",4,"ngIf"],["class","ml-2","type","number","nbInput","","fullWidth","","fieldSize","small","placeholder","Tiempo",3,"ngModel","ngModelChange",4,"ngIf"],["nbButton","","size","small","class","ml-2",3,"click",4,"ngIf"],[1,"pl-2"],[1,"cursor-pointer","pl-2",3,"click"],["type","number","nbInput","","fullWidth","","fieldSize","small","placeholder","Tiempo",1,"ml-2",3,"ngModel","ngModelChange"],["nbButton","","size","small",1,"ml-2",3,"click"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),e.\u0275\u0275text(4,"Seleccionar beneficios"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-body")(6,"div",2),e.\u0275\u0275template(7,T,5,3,"ng-container",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",4)(9,"div",5)(10,"button",6),e.\u0275\u0275listener("click",function(){return n.updateBenefits()}),e.\u0275\u0275text(11,"Actualizar"),e.\u0275\u0275elementEnd()()()()()()()),2&t&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",n.benefitList))},dependencies:[p.sg,p.O5,c.Fj,c.wV,c.JJ,c.On,u.Asz,u.yKW,u.ndF,u.DPz,u.h8i,u.NTf],styles:[".detail-container[_ngcontent-%COMP%]{width:1080px}"]}),i})();var B=s(7672),m=s(5527),h=s(44949),d=s(97007),_=s(62774);function f(i,r){if(1&i&&(e.\u0275\u0275elementStart(0,"nb-option",44),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=r.$implicit;e.\u0275\u0275property("value",t.id_tipo),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.nombre," ")}}function b(i,r){if(1&i&&e.\u0275\u0275element(0,"nb-user",45),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("onlyPicture",!0)("picture",t.placeImage)}}function P(i,r){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",46),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.uploadImage())}),e.\u0275\u0275text(1,"Actualizar imagen"),e.\u0275\u0275elementEnd()}}function w(i,r){1&i&&(e.\u0275\u0275elementStart(0,"p",48),e.\u0275\u0275text(1," El campo es obligatorio "),e.\u0275\u0275elementEnd())}function V(i,r){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,w,2,0,"p",47),e.\u0275\u0275elementContainerEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.placeForm.get("nombre").hasError("required"))}}function L(i,r){1&i&&(e.\u0275\u0275elementStart(0,"p",48),e.\u0275\u0275text(1," El campo es obligatorio "),e.\u0275\u0275elementEnd())}function j(i,r){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,L,2,0,"p",47),e.\u0275\u0275elementContainerEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.placeForm.get("primario").hasError("required"))}}function z(i,r){1&i&&(e.\u0275\u0275elementStart(0,"p",48),e.\u0275\u0275text(1," El campo es obligatorio "),e.\u0275\u0275elementEnd())}function A(i,r){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,z,2,0,"p",47),e.\u0275\u0275elementContainerEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.placeForm.get("secundario").hasError("required"))}}function N(i,r){1&i&&(e.\u0275\u0275elementStart(0,"p",48),e.\u0275\u0275text(1," El campo es obligatorio "),e.\u0275\u0275elementEnd())}function R(i,r){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,N,2,0,"p",47),e.\u0275\u0275elementContainerEnd()),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.placeForm.get("dominio").hasError("required"))}}function W(i,r){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",49),e.\u0275\u0275element(2,"input",50),e.\u0275\u0275template(3,R,2,1,"ng-container",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",t.placeForm.get("dominio").invalid&&t.placeForm.get("dominio").touched)}}function $(i,r){if(1&i&&(e.\u0275\u0275elementStart(0,"nb-option",44),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=r.$implicit;e.\u0275\u0275property("value",t.id_pais),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.nombre," ")}}function G(i,r){if(1&i&&(e.\u0275\u0275elementStart(0,"nb-option",44),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=r.$implicit;e.\u0275\u0275property("value",t.id_provincia),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.nombre," ")}}function U(i,r){if(1&i&&(e.\u0275\u0275elementStart(0,"nb-option",44),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=r.$implicit;e.\u0275\u0275property("value",t.id_ciudad),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.nombre," ")}}function J(i,r){1&i&&(e.\u0275\u0275elementStart(0,"p",48),e.\u0275\u0275text(1," El campo es obligatorio "),e.\u0275\u0275elementEnd())}function K(i,r){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,J,2,0,"p",47),e.\u0275\u0275elementContainerEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.placeForm.get("id_ciudad").hasError("required"))}}function Z(i,r){1&i&&(e.\u0275\u0275elementStart(0,"p",48),e.\u0275\u0275text(1," El campo es obligatorio "),e.\u0275\u0275elementEnd())}function H(i,r){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,Z,2,0,"p",47),e.\u0275\u0275elementContainerEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.placeForm.get("latitud").hasError("required"))}}function X(i,r){1&i&&(e.\u0275\u0275elementStart(0,"p",48),e.\u0275\u0275text(1," El campo es obligatorio "),e.\u0275\u0275elementEnd())}function Y(i,r){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,X,2,0,"p",47),e.\u0275\u0275elementContainerEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.placeForm.get("longitud").hasError("required"))}}function Q(i,r){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",51)(1,"ngx-map",52),e.\u0275\u0275listener("mapClicked",function(o){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.onMapClicked(o))}),e.\u0275\u0275elementEnd()()}if(2&i){const t=r.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("latitude",t.latitude)("longitude",t.longitude)("address",t.address)}}const M=function(){return{standalone:!0}};let q=(()=>{class i{constructor(t,n,o,a,l,v,ee,te,ne){this._formBuilder=t,this._activatedRoute=n,this._dialogService=o,this._placeService=a,this._toastrService=l,this._countryService=v,this._provinceService=ee,this._cityService=te,this._cdRef=ne,this.showUploadButton=!1,this.types=[],this.countries=[],this.provinces=[],this.cities=[],this.showDomain=!1,this._activatedRoute.params.subscribe(ie=>{this.placeId=ie.placeId}),this.initForm(),this.getTypes(),this.getCountries()}ngOnInit(){this.placeId?(this.getPlace(),this.action="Editar"):this.action="Crear"}initForm(){this.placeForm=this._formBuilder.group({id_tipo:["",c.kI.required],id_ciudad:["",c.kI.required],nombre:["",c.kI.required],descripcion:["",c.kI.required],latitud:["",c.kI.required],longitud:["",c.kI.required],imagen:["",c.kI.required],primario:["",c.kI.required],secundario:["",c.kI.required],dominio:[""],usuario_creacion:["admin",c.kI.required]})}getPlace(){var n,t=this;this._placeService.getPlace({id_lugar:this.placeId}).subscribe({next:(n=(0,C.Z)(function*(o){t.placeForm.patchValue(o),t.placeImage=`${g.N.storageUrl}/Lugar/${o.imagen}`,t.selectedCountry=o.id_pais,yield t.getProvinces(t.selectedCountry),t.selectedProvince=o.id_provincia,yield t.getCities(t.selectedProvince),t.selectedCity=o.id_ciudad,t.placeForm.get("dominio").value&&(t.showDomain=!0,t.placeForm.controls.dominio.setValidators(c.kI.required)),t._cdRef.detectChanges()}),function(a){return n.apply(this,arguments)}),error:n=>{console.error(n)}})}getTypes(){this._placeService.getTypes({id_usuario:"1"}).subscribe({next:t=>{this.types=t,this.selectType(this.types[0].id_tipo)},error:t=>{console.error(t)}})}getCountries(){this._countryService.getAll({id_usuario:"1"}).subscribe({next:t=>{this.countries=t.filter(n=>"A"===n.estado)},error:t=>{console.error(t)}})}getProvinces(t){var n=this;return(0,C.Z)(function*(){return new Promise(o=>{n._provinceService.getByCountry({id_usuario:"1",id_pais:t}).subscribe({next:l=>{n.provinces=l.filter(v=>"A"===v.estado),setTimeout(()=>o(),0)}})})})()}getCities(t){var n=this;return(0,C.Z)(function*(){return new Promise(o=>{n._cityService.getByProvince({id_usuario:"1",id_provincia:t}).subscribe({next:l=>{n.cities=l.filter(v=>"A"===v.estado),setTimeout(()=>o(),0)}})})})()}onMapClicked(t){this.placeForm.patchValue({latitud:t.latitud,longitud:t.longitud}),this.mapModal.close()}getAddressItem(t,n){return t.filter(o=>o.type==n)[0].description}showMap(t){this.mapModal=this._dialogService.open(t,{context:{latitude:this.placeForm.get("latitud").value,longitude:this.placeForm.get("longitud").value,address:this.getAddress()}})}getAddress(){let t="";return this.countries.map(n=>{n.id_pais==this.selectedCountry&&(t+=n.nombre+" ")}),this.provinces.map(n=>{n.id_provincia==this.selectedProvince&&(t+=n.nombre+" ")}),this.cities.map(n=>{n.id_ciudad==this.placeForm.get("id_ciudad").value&&(t+=n.nombre+" ")}),t}loadFile(t){if(!t.length)return;const n=t[0],o=new FileReader;o.onload=()=>{this.placeForm.patchValue({imagen:n}),this.placeImage=o.result,this.placeId&&(this.showUploadButton=!0),this._cdRef.detectChanges()},o.readAsDataURL(n)}uploadImage(){const t=new FormData;t.append("imagen",this.placeForm.value.imagen),t.append("id_lugar",this.placeId),t.append("usuario_modificacion","admin"),this._placeService.updateImage(t).subscribe({next:n=>{this.showToast("success","Imagen actualizada"),this.showUploadButton=!1,this._cdRef.detectChanges()},error:n=>{this.showToast("danger","Error al subir la imagen")}})}save(){const t=new FormData;Object.keys(this.placeForm.value).forEach(n=>{"dominio"==n&&!this.showDomain&&this.placeForm.get(n).setValue(""),("imagen"!==n||!this.placeId)&&t.append(n,this.placeForm.value[n])}),this.placeId?this.update(this.placeForm.value):this.create(t)}create(t){this._placeService.create(t).subscribe({next:()=>{this.showToast("success","Lugar creado")}})}update(t){const{usuario_creacion:n,imagen:o,...a}=t,l={...a,id_lugar:this.placeId,usuario_modificacion:"admin"};this._placeService.update(l).subscribe({next:()=>{this.showToast("success","Lugar actualizado")}})}showToast(t,n){this._toastrService.show("",n,{status:t,destroyByClick:!0,duration:3e3,hasIcon:!1,position:u.fe3.TOP_RIGHT,preventDuplicates:!0})}onCountryChange(t){var n=this;return(0,C.Z)(function*(){n.selectedProvince=null,n.onProvinceChange(null),yield n.getProvinces(t)})()}onProvinceChange(t){var n=this;this.selectedCity=null,setTimeout((0,C.Z)(function*(){n.cities=null,n.selectCity(null),t&&(yield n.getCities(t))}),0)}selectType(t){this.placeForm.patchValue({id_tipo:t})}selectCity(t){this.placeForm.patchValue({id_ciudad:t})}toggleDomain(){this.showDomain?this.placeForm.controls.dominio.setValidators(c.kI.required):(this.placeForm.controls.dominio.removeValidators(c.kI.required),this.placeForm.controls.dominio.setErrors(null)),setTimeout(()=>{this._cdRef.detectChanges()},0)}showBenefits(){this._dialogService.open(I,{context:{placeId:this.placeId}})}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(c.qu),e.\u0275\u0275directiveInject(B.gz),e.\u0275\u0275directiveInject(u.Gln),e.\u0275\u0275directiveInject(F.k),e.\u0275\u0275directiveInject(u.quB),e.\u0275\u0275directiveInject(m.T),e.\u0275\u0275directiveInject(h.f),e.\u0275\u0275directiveInject(d.Z),e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ngx-place-form"]],decls:109,vars:27,consts:[[1,"row"],[1,"col-lg-12"],[1,"w-100","d-flex","justify-content-between"],["nbButton","","status","info","hero","",3,"disabled","click"],[3,"formGroup"],[1,"col-sm-4"],[1,"form-group"],["for","inputTipo",1,"label"],["fullWidth","","id","inputTipo","formControlName","id_tipo","placeholder","Seleccionar una opci\xf3n",3,"selected"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-8"],["for","inputImagen",1,"label"],[1,"d-flex","align-items-center"],[3,"onlyPicture","picture",4,"ngIf"],["id","inputImagen","type","file","fullWidth","",1,"pl-2",3,"change"],["fileControl",""],["nbButton","","ghost","","status","info",3,"click",4,"ngIf"],["for","inputNombre",1,"label"],["id","inputNombre","type","text","nbInput","","fullWidth","","placeholder","Nombre","formControlName","nombre"],[4,"ngIf"],["for","inputDescripcion",1,"label"],["id","inputDescripcion","type","text","nbInput","","fullWidth","","placeholder","Descripci\xf3n","formControlName","descripcion"],["for","inputPrimario",1,"label"],["id","inputPrimario","type","text","nbInput","","fullWidth","","placeholder","Primario","formControlName","primario"],["for","inputSecundario",1,"label"],["id","inputSecundario","type","text","nbInput","","fullWidth","","placeholder","Secundario","formControlName","secundario"],["for","inputDominio",1,"label"],[1,"d-flex","align-items-start"],["status","success",3,"checked","checkedChange"],["nbButton","",3,"click"],[1,"mt-4"],["for","inputPais",1,"label"],["fullWidth","","id","inputPais","placeholder","Seleccione una opci\xf3n","required","",3,"ngModel","ngModelOptions","selectedChange","ngModelChange"],["for","inputProvincia",1,"label"],["fullWidth","","id","inputProvincia","placeholder","Seleccione una opci\xf3n",3,"ngModel","ngModelOptions","selectedChange","ngModelChange"],["for","inputCiudad",1,"label"],["fullWidth","","id","inputCiudad","placeholder","Seleccione una opci\xf3n",3,"ngModel","ngModelOptions","selectedChange","ngModelChange"],["for","inputLatitud",1,"label"],["id","inputLatitud","type","text","nbInput","","fullWidth","","placeholder","Latitud","formControlName","latitud"],["for","inputLongitud",1,"label"],["id","inputLongitud","type","text","nbInput","","fullWidth","","placeholder","Longitud","formControlName","longitud"],[1,"form-group","mb-0","mt-4"],["nbButton","","status","info","ghost","",3,"click"],["map",""],[3,"value"],[3,"onlyPicture","picture"],["nbButton","","ghost","","status","info",3,"click"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[1,"ml-2"],["id","inputDominio","type","text","nbInput","","fullWidth","","placeholder","Dominio","formControlName","dominio"],[1,"map-container"],[3,"latitude","longitude","address","mapClicked"]],template:function(t,n){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header",2)(4,"h5"),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div")(7,"button",3),e.\u0275\u0275listener("click",function(){return n.save()}),e.\u0275\u0275text(8," Guardar "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(9,"nb-card-body")(10,"form",4)(11,"fieldset")(12,"legend"),e.\u0275\u0275text(13,"Informaci\xf3n del lugar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"div",0)(15,"div",5)(16,"div",6)(17,"label",7),e.\u0275\u0275text(18,"Tipo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"nb-select",8),e.\u0275\u0275template(20,f,2,2,"nb-option",9),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(21,"div",10)(22,"div",6)(23,"label",11),e.\u0275\u0275text(24,"Imagen"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"div",12),e.\u0275\u0275template(26,b,1,2,"nb-user",13),e.\u0275\u0275elementStart(27,"input",14,15),e.\u0275\u0275listener("change",function(){e.\u0275\u0275restoreView(o);const l=e.\u0275\u0275reference(28);return e.\u0275\u0275resetView(n.loadFile(l.files))}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(29,P,2,0,"button",16),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(30,"div",0)(31,"div",5)(32,"div",6)(33,"label",17),e.\u0275\u0275text(34,"Nombre"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(35,"input",18),e.\u0275\u0275template(36,V,2,1,"ng-container",19),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(37,"div",10)(38,"div",6)(39,"label",20),e.\u0275\u0275text(40,"Descripci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(41,"input",21),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(42,"div",0)(43,"div",5)(44,"div",6)(45,"label",22),e.\u0275\u0275text(46,"Primario"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(47,"input",23),e.\u0275\u0275template(48,j,2,1,"ng-container",19),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(49,"div",5)(50,"div",6)(51,"label",24),e.\u0275\u0275text(52,"Secundario"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(53,"input",25),e.\u0275\u0275template(54,A,2,1,"ng-container",19),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(55,"div",5)(56,"div",6)(57,"label",26),e.\u0275\u0275text(58,"Dominio"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(59,"div",27)(60,"nb-toggle",28),e.\u0275\u0275listener("checkedChange",function(l){return n.showDomain=l})("checkedChange",function(){return n.toggleDomain()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(61,W,4,1,"ng-container",19),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(62,"div",0)(63,"div",5)(64,"div",6)(65,"button",29),e.\u0275\u0275listener("click",function(){return n.showBenefits()}),e.\u0275\u0275text(66,"Seleccionar beneficios"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(67,"fieldset",30)(68,"legend"),e.\u0275\u0275text(69,"Ubicaci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(70,"div",0)(71,"div",5)(72,"div",6)(73,"label",31),e.\u0275\u0275text(74,"Pa\xeds"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(75,"nb-select",32),e.\u0275\u0275listener("selectedChange",function(l){return n.onCountryChange(l)})("ngModelChange",function(l){return n.selectedCountry=l}),e.\u0275\u0275template(76,$,2,2,"nb-option",9),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(77,"div",5)(78,"div",6)(79,"label",33),e.\u0275\u0275text(80,"Provincia"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(81,"nb-select",34),e.\u0275\u0275listener("selectedChange",function(l){return n.onProvinceChange(l)})("ngModelChange",function(l){return n.selectedProvince=l}),e.\u0275\u0275template(82,G,2,2,"nb-option",9),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(83,"div",5)(84,"div",6)(85,"label",35),e.\u0275\u0275text(86,"Ciudad"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(87,"nb-select",36),e.\u0275\u0275listener("selectedChange",function(l){return n.selectCity(l)})("ngModelChange",function(l){return n.selectedCity=l}),e.\u0275\u0275template(88,U,2,2,"nb-option",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(89,K,2,1,"ng-container",19),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(90,"div",0)(91,"div",5)(92,"div",6)(93,"label",37),e.\u0275\u0275text(94,"Latitud"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(95,"input",38),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(96,H,2,1,"ng-container",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(97,"div",5)(98,"div",6)(99,"label",39),e.\u0275\u0275text(100,"Longitud"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(101,"input",40),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(102,Y,2,1,"ng-container",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(103,"div",5)(104,"div",41)(105,"button",42),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(o);const l=e.\u0275\u0275reference(108);return e.\u0275\u0275resetView(n.showMap(l))}),e.\u0275\u0275text(106,"Ver mapa"),e.\u0275\u0275elementEnd()()()()()()()()()(),e.\u0275\u0275template(107,Q,2,3,"ng-template",null,43,e.\u0275\u0275templateRefExtractor)}2&t&&(e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("",n.action," Lugar"),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",!n.placeForm.valid),e.\u0275\u0275advance(3),e.\u0275\u0275property("formGroup",n.placeForm),e.\u0275\u0275advance(9),e.\u0275\u0275property("selected",null==n.types[0]?null:n.types[0].id_tipo),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.types),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",n.placeImage),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",n.showUploadButton),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngIf",n.placeForm.get("nombre").invalid&&n.placeForm.get("nombre").touched),e.\u0275\u0275advance(12),e.\u0275\u0275property("ngIf",n.placeForm.get("primario").invalid&&n.placeForm.get("primario").touched),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",n.placeForm.get("secundario").invalid&&n.placeForm.get("secundario").touched),e.\u0275\u0275advance(6),e.\u0275\u0275property("checked",n.showDomain),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.showDomain),e.\u0275\u0275advance(14),e.\u0275\u0275property("ngModel",n.selectedCountry)("ngModelOptions",e.\u0275\u0275pureFunction0(24,M)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.countries),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngModel",n.selectedProvince)("ngModelOptions",e.\u0275\u0275pureFunction0(25,M)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.provinces),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngModel",n.selectedCity)("ngModelOptions",e.\u0275\u0275pureFunction0(26,M)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.cities),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.placeForm.get("id_ciudad").invalid&&n.placeForm.get("id_ciudad").touched),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngIf",n.placeForm.get("latitud").invalid&&n.placeForm.get("latitud").touched),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",n.placeForm.get("longitud").invalid&&n.placeForm.get("longitud").touched))},dependencies:[p.sg,p.O5,_.G,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.On,c.sg,c.u,u.Asz,u.yKW,u.ndF,u.DPz,u.h8i,u.rs,u.q51,u.k0$,u.BLq],styles:[".map-container[_ngcontent-%COMP%]{padding:20px;background-color:#fff}nb-card[_ngcontent-%COMP%]{border-radius:0;border-top:0}"],changeDetection:0}),i})()},97662:(O,y,s)=>{s.r(y),s.d(y,{PlacesModule:()=>B});var C=s(9434),c=s(7672),u=s(14019),g=s(36517),e=s(74385),F=s(36749),p=s(30551),x=s(12368);const S=[{path:"",component:(()=>{class m{constructor(){}}return m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=p.\u0275\u0275defineComponent({type:m,selectors:[["ngx-places"]],decls:1,vars:0,template:function(d,_){1&d&&p.\u0275\u0275element(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),m})(),children:[{path:"",component:(()=>{class m{constructor(d,_,f){this.router=d,this._placeService=_,this._toastrService=f,this.settings={actions:{position:"right",add:!1,edit:!1,delete:!1,custom:[{name:"edit",title:'<i class="nb-edit"></i>'}]},columns:{nombre:{title:"Nombre",type:"string"},tipo:{title:"Tipo",type:"string"},descripcion:{title:"Descripcion",type:"string"},estado:{title:"Estado",type:"custom",renderComponent:F.P,onComponentInitFunction:b=>{b.toggle.subscribe(P=>{this.updateStatus(P.row.id_lugar,P.value?"A":"I")})}}}},this.source=new e.nC}ngOnInit(){this.getPlaces()}getPlaces(){this._placeService.getPlaces({id_usuario:"1"}).subscribe({next:d=>{const _=d.filter(f=>"E"!=f.estado);this.source.load(_)},error:d=>{console.error(d)}})}onDeleteConfirm(d){window.confirm("Are you sure you want to delete?")?d.confirm.resolve():d.confirm.reject()}onCustom(d){"edit"===d.action&&this.router.navigate([`/pages/lugares/${d.data.id_lugar}`])}add(){this.router.navigate(["/pages/lugares/crear"])}updateStatus(d,_){this._placeService.updateStatus({id_lugar:d,estado:_,usuario_modificacion:"admin"}).subscribe({next:()=>{this.showToast("success","Estado de lugar actualizado")},error:()=>{this.showToast("danger","Ha ocurrido un error. Intente nuevamente")}})}showToast(d,_){this._toastrService.show("",_,{status:d,destroyByClick:!0,duration:3e3,hasIcon:!1,position:g.fe3.TOP_RIGHT,preventDuplicates:!0})}}return m.\u0275fac=function(d){return new(d||m)(p.\u0275\u0275directiveInject(c.F0),p.\u0275\u0275directiveInject(x.k),p.\u0275\u0275directiveInject(g.quB))},m.\u0275cmp=p.\u0275\u0275defineComponent({type:m,selectors:[["ngx-places-list"]],decls:9,vars:2,consts:[[1,"w-100","d-flex","justify-content-between"],[1,""],["nbButton","","status","info","hero","",3,"click"],[1,"custom-table",3,"settings","source","custom","deleteConfirm"]],template:function(d,_){1&d&&(p.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header",0)(2,"h5"),p.\u0275\u0275text(3,"Lugares"),p.\u0275\u0275elementEnd(),p.\u0275\u0275elementStart(4,"div",1)(5,"button",2),p.\u0275\u0275listener("click",function(){return _.add()}),p.\u0275\u0275text(6," Nuevo "),p.\u0275\u0275elementEnd()()(),p.\u0275\u0275elementStart(7,"nb-card-body")(8,"ng2-smart-table",3),p.\u0275\u0275listener("custom",function(b){return _.onCustom(b)})("deleteConfirm",function(b){return _.onDeleteConfirm(b)}),p.\u0275\u0275elementEnd()()()),2&d&&(p.\u0275\u0275advance(8),p.\u0275\u0275property("settings",_.settings)("source",_.source))},dependencies:[g.Asz,g.yKW,g.ndF,e.T5,g.DPz],styles:["[_nghost-%COMP%]     tr .ng2-smart-actions{height:auto}[_nghost-%COMP%]     ng2-st-tbody-custom{display:flex}[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom{display:inline-block;text-align:center}"]}),m})()},{path:"crear",component:u.C},{path:":placeId",loadChildren:()=>Promise.all([s.e(609),s.e(971)]).then(s.bind(s,2971)).then(m=>m.PlaceDetailModule)}]}];let E=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=p.\u0275\u0275defineNgModule({type:m}),m.\u0275inj=p.\u0275\u0275defineInjector({imports:[c.Bz.forChild(S),c.Bz]}),m})();var T=s(92661),I=s(24006);let B=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=p.\u0275\u0275defineNgModule({type:m}),m.\u0275inj=p.\u0275\u0275defineInjector({imports:[C.O,I.u5,I.UX,E,g.zyh,e.ne,g.T2N,g.nKr,g.IIj,T.Y4,g.AE1,g.COg,g.KdK,g.EoG,g.j5J,g.obu,g.wB1,g.MfT]}),m})()}}]);
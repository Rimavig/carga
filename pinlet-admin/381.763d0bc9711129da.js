"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[381],{91381:(x,m,o)=>{o.r(m),o.d(m,{CitiesModule:()=>F});var v=o(36895),n=o(24006),c=o(7672),e=o(30551),y=o(20732);let h=(()=>{class i{constructor(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ngx-cities"]],decls:2,vars:0,template:function(t,s){1&t&&(e.\u0275\u0275elementStart(0,"ngx-no-padding-layout"),e.\u0275\u0275element(1,"router-outlet"),e.\u0275\u0275elementEnd())},dependencies:[y.F,c.lC],encapsulation:2}),i})();var r=o(36517),u=o(99501),f=o(97007);let p=(()=>{class i{constructor(t,s,d,S,T){this._formBuilder=t,this._activatedRoute=s,this._cityService=d,this._toastrService=S,this._router=T,this.statusOptions=[{key:"Activo",value:u.q.ACTIVO},{key:"Inactivo",value:u.q.INACTIVO},{key:"Pendiente",value:u.q.PENDIENTE}],this._activatedRoute.params.subscribe(l=>{this.cityId=l.id}),this._activatedRoute.queryParams.subscribe(l=>{this.provinceId=l.idProvincia}),this.initForm()}ngOnInit(){this.cityId?(this.getCity(),this.action="Editar"):this.action="Crear"}initForm(){this.cityForm=this._formBuilder.group({id_provincia:[this.provinceId,n.kI.required],nombre:["",n.kI.required],estado:[""],usuario_creacion:["admin",n.kI.required]})}getCity(){this._cityService.getById({id_ciudad:this.cityId}).subscribe({next:t=>{this.cityForm.patchValue(t),this.selectedStatus=t.estado},error:t=>{console.error(t)}})}save(){this.cityId?this.update():this.create()}create(){this._cityService.create(this.cityForm.value).subscribe({next:()=>{this.showToast("success","Ciudad creada"),this.goBack()},error:()=>{this.showToast("danger","Ha ocurrido un error. Intente nuevamente")}})}update(){this._cityService.update({id_ciudad:this.cityId,id_provincia:this.cityForm.value.id_provincia,nombre:this.cityForm.value.nombre,estado:this.cityForm.value.estado,usuario_modificacion:"admin"}).subscribe({next:()=>{this.showToast("success","Ciudad actualizada")},error:()=>{this.showToast("danger","Ha ocurrido un error. Intente nuevamente")}})}changeStatus(t){t!==this.selectedStatus&&(this.selectedStatus=t,this._cityService.updateStatus({id_ciudad:this.cityId,estado:t,usuario_modificacion:"admin"}).subscribe({next:()=>{this.showToast("success","\xa1Se ha cambiado el estado!")},error:()=>{this.showToast("danger","\xa1No se ha podido cambiar el estado!")}}))}showToast(t,s){this._toastrService.show("",s,{status:t,destroyByClick:!0,duration:3e3,hasIcon:!1,position:r.fe3.TOP_RIGHT,preventDuplicates:!0})}goBack(){this._router.navigateByUrl(`/pages/provincias/editar/${this.provinceId}`)}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(n.qu),e.\u0275\u0275directiveInject(c.gz),e.\u0275\u0275directiveInject(f.Z),e.\u0275\u0275directiveInject(r.quB),e.\u0275\u0275directiveInject(c.F0))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ngx-city-form"]],decls:20,vars:2,consts:[[1,"row"],[1,"col-lg-12"],[1,"w-100","d-flex","justify-content-between"],[1,"d-flex","align-items-center","h5"],[1,"d-flex","cursor-pointer","no-hover","pr-2",3,"click"],[1,"custom-icon","nb-arrow-left"],["nbButton","","status","info","hero","",3,"click"],[3,"formGroup"],[1,"col-sm-4"],[1,"form-group"],["for","inputNombre",1,"label"],["type","text","nbInput","","fullWidth","","id","inputNombre","placeholder","Nombre","formControlName","nombre"]],template:function(t,s){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header",2)(4,"div",3)(5,"a",4),e.\u0275\u0275listener("click",function(){return s.goBack()}),e.\u0275\u0275element(6,"i",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"h5"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"div")(10,"button",6),e.\u0275\u0275listener("click",function(){return s.save()}),e.\u0275\u0275text(11," Guardar "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(12,"nb-card-body")(13,"form",7)(14,"div",0)(15,"div",8)(16,"div",9)(17,"label",10),e.\u0275\u0275text(18,"Nombre"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(19,"input",11),e.\u0275\u0275elementEnd()()()()()()()()),2&t&&(e.\u0275\u0275advance(8),e.\u0275\u0275textInterpolate1("",s.action," Ciudad"),e.\u0275\u0275advance(5),e.\u0275\u0275property("formGroup",s.cityForm))},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,r.Asz,r.yKW,r.ndF,r.h8i,r.DPz]}),i})();const C=[{path:"",component:h,children:[{path:"",component:h},{path:"crear",component:p},{path:"editar/:id",component:p}]}];let I=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.Bz.forChild(C),c.Bz]}),i})();var g=o(74385),b=o(97137);let F=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[v.ez,b.O,n.UX,I,g.ne,r.zyh,r.nKr,r.T2N,r.IIj]}),i})()}}]);
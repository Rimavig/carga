"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[961],{22961:(B,m,l)=>{l.r(m),l.d(m,{NotificationsModule:()=>j});var f=l(97137),a=l(36517),s=l(24006),d=l(7672),e=l(30551);let h=(()=>{class i{constructor(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ngx-notifications"]],decls:1,vars:0,template:function(t,n){1&t&&e.\u0275\u0275element(0,"router-outlet")},dependencies:[d.lC],encapsulation:2}),i})();var v=l(12368),g=l(18328),_=l(12013),p=l(36895),y=l(20732),C=l(5180);const I=["inputIdPrimario"],F=["residentInput"];function b(i,r){if(1&i&&(e.\u0275\u0275elementStart(0,"nb-option",19),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=r.$implicit;e.\u0275\u0275property("value",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.title," ")}}function x(i,r){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",14)(1,"div",8)(2,"label",15),e.\u0275\u0275text(3,"Primario"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"nb-select",16,17),e.\u0275\u0275listener("selectedChange",function(o){e.\u0275\u0275restoreView(t);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.getSecundarios(o))}),e.\u0275\u0275template(6,b,2,2,"nb-option",18),e.\u0275\u0275elementEnd()()()}if(2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(6),e.\u0275\u0275property("ngForOf",t.primarios)}}function S(i,r){if(1&i&&(e.\u0275\u0275elementStart(0,"nb-option",19),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=r.$implicit;e.\u0275\u0275property("value",t.title+"."+t.value),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.title," ")}}function T(i,r){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",14)(1,"label",20),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"ngxCapitalize"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"input",21,22),e.\u0275\u0275listener("input",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.onChange())}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"nb-autocomplete",23,24),e.\u0275\u0275listener("selectedChange",function(o){e.\u0275\u0275restoreView(t);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.onResidentSelected(o))}),e.\u0275\u0275template(8,S,2,2,"nb-option",18),e.\u0275\u0275pipe(9,"async"),e.\u0275\u0275elementEnd()()}if(2&i){const t=e.\u0275\u0275reference(7),n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,4,n.selectedType)),e.\u0275\u0275advance(2),e.\u0275\u0275property("nbAutocomplete",t),e.\u0275\u0275advance(2),e.\u0275\u0275property("handleDisplayFn",n.viewHandle),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(9,6,n.filteredOptions$))}}function N(i,r){if(1&i&&(e.\u0275\u0275elementStart(0,"nb-option",19),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=r.$implicit;e.\u0275\u0275property("value",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.title," ")}}function V(i,r){if(1&i&&(e.\u0275\u0275elementStart(0,"div",14)(1,"div",8)(2,"label",20),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"ngxCapitalize"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-select",25),e.\u0275\u0275template(6,N,2,2,"nb-option",18),e.\u0275\u0275elementEnd()()()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,2,t.selectedType)),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",t.optionValues)}}let u=(()=>{class i{constructor(t,n,o,c,O,R){this._formBuilder=t,this._activatedRoute=n,this._placeService=o,this._residentService=c,this._notificationService=O,this._toastrService=R,this.typeOptions=[{title:"Residente",value:"id_residente_lugar"},{title:"Secundario",value:"id_secundario"},{title:"Primario",value:"id_primario"},{title:"Lugar",value:"id_lugar"}],this.optionValues=[],this.primarios=[]}ngOnInit(){this.placeId=parseInt(this._activatedRoute.parent.parent.parent.snapshot.paramMap.get("placeId")),this.selectedType=this._activatedRoute.snapshot.url[0].path,this.initForm(),this.loadValues(this.selectedType)}initForm(){this.notificationForm=this._formBuilder.group({tipo:["",s.kI.required],id:["",s.kI.required],titulo:["",s.kI.required],descripcion:[""],estado:"A"})}loadValues(t){const n={id_usuario:1};switch(t){case"lugar":this.notificationForm.patchValue({tipo:"id_lugar",id:this.placeId});break;case"primario":this.notificationForm.patchValue({tipo:"id_primario"}),n.id_lugar=this.placeId,this.getPrimarios(n);break;case"secundario":this.notificationForm.patchValue({tipo:"id_secundario"}),n.id_lugar=this.placeId,this.getPrimarios(n);break;case"residente":this.notificationForm.patchValue({tipo:"id_residente_lugar"}),n.id_lugar=this.placeId,n.estado="T",this._residentService.getByPlace(n).subscribe({next:o=>{this.optionValues=o.map(c=>({title:`${c.nombres} ${c.apellidos}`,value:c.id_residente_lugar}))},error:o=>{}})}}onChange(){this.filteredOptions$=this._residentService.getFilteredOptions(this.residentInput.nativeElement.value,this.optionValues)}onResidentSelected(t){if(t){const n=t.split(".");this.notificationForm.patchValue({id:n[1]})}}viewHandle(t){return t.split(".")[0]}getPrimarios(t){this._placeService.getPrimarios(t).subscribe({next:n=>{this.optionValues=n.map(o=>({title:o.nombre_primario,value:o.id_primario})),this.primarios=this.optionValues},error:n=>{}})}onPrimarioSelected(t){this.getSecundarios(t)}getSecundarios(t){this._placeService.getSecundarios({id_usuario:1,id_primario:t}).subscribe({next:o=>{this.optionValues=o.map(c=>({title:c.nombre_secundario,value:c.id_secundario}))},error:o=>{}})}send(){this._notificationService.send(this.notificationForm.value).subscribe({next:()=>{this.selectPrimario&&(this.selectPrimario.selected=null),"residente"==this.selectedType&&(this.residentInput.nativeElement.value=""),this.notificationForm.patchValue({titulo:null,descripcion:null}),this.showToast("success","Notificaci\xf3n enviada")},error:()=>{this.showToast("danger","Ha ocurrido un error. Intente nuevamente")}})}showToast(t,n){this._toastrService.show("",n,{status:t,destroyByClick:!0,duration:3e3,hasIcon:!1,position:a.fe3.TOP_RIGHT,preventDuplicates:!0})}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(s.qu),e.\u0275\u0275directiveInject(d.gz),e.\u0275\u0275directiveInject(v.k),e.\u0275\u0275directiveInject(g.B),e.\u0275\u0275directiveInject(_.g),e.\u0275\u0275directiveInject(a.quB))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ngx-notification-form"]],viewQuery:function(t,n){if(1&t&&(e.\u0275\u0275viewQuery(I,5),e.\u0275\u0275viewQuery(F,5)),2&t){let o;e.\u0275\u0275queryRefresh(o=e.\u0275\u0275loadQuery())&&(n.selectPrimario=o.first),e.\u0275\u0275queryRefresh(o=e.\u0275\u0275loadQuery())&&(n.residentInput=o.first)}},decls:29,vars:5,consts:[[1,"row"],[1,"col-lg-12"],[1,"w-100","d-flex","justify-content-between"],[1,"d-flex","align-items-center","h5"],["nbButton","","status","info","hero","",3,"click"],[3,"formGroup"],["class","col-sm-6",4,"ngIf"],[3,"ngClass"],[1,"form-group"],["for","inputTitulo",1,"label"],["type","text","nbInput","","fullWidth","","id","inputTitulo","placeholder","T\xedtulo","formControlName","titulo"],[1,"col-sm-12"],["for","inputDescripcion",1,"label"],["type","text","nbInput","","fullWidth","","id","inputDescripcion","placeholder","Descripci\xf3n","formControlName","descripcion"],[1,"col-sm-6"],["for","inputIdPrimario",1,"label"],["fullWidth","","id","inputIdPrimario","placeholder","Seleccione una opci\xf3n",3,"selectedChange"],["inputIdPrimario",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["for","inputIdTipo",1,"label"],["nbInput","","fullWidth","","type","text","id","inputResidentId","placeholder","Enter value","autocomplete","off",3,"nbAutocomplete","input"],["residentInput",""],["fullWidth","","placeholder","Seleccionar una opci\xf3n",3,"handleDisplayFn","selectedChange"],["residents",""],["fullWidth","","id","inputIdTipo","placeholder","Seleccione una opci\xf3n","formControlName","id"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"ngx-no-padding-layout")(1,"div",0)(2,"div",1)(3,"nb-card")(4,"nb-card-header",2)(5,"div",3)(6,"h5"),e.\u0275\u0275text(7,"Notificaciones"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"div")(9,"button",4),e.\u0275\u0275listener("click",function(){return n.send()}),e.\u0275\u0275text(10," Enviar "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(11,"nb-card-body")(12,"form",5)(13,"div",0),e.\u0275\u0275template(14,x,7,1,"div",6),e.\u0275\u0275template(15,T,10,8,"div",6),e.\u0275\u0275template(16,V,7,4,"div",6),e.\u0275\u0275elementStart(17,"div",7)(18,"div",8)(19,"label",9),e.\u0275\u0275text(20,"T\xedtulo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(21,"input",10),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(22,"div",0)(23,"div",11)(24,"div",8)(25,"label",12),e.\u0275\u0275text(26,"Descripci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"textarea",13),e.\u0275\u0275text(28,"\t\t\t\t\t\t\t\t\t"),e.\u0275\u0275elementEnd()()()()()()()()()()),2&t&&(e.\u0275\u0275advance(12),e.\u0275\u0275property("formGroup",n.notificationForm),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf","secundario"===n.selectedType),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","residente"===n.selectedType),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","lugar"!==n.selectedType&&"residente"!==n.selectedType),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass","lugar"===n.selectedType||"secundario"===n.selectedType?"col-sm-12":"col-sm-6"))},dependencies:[p.mk,p.sg,p.O5,y.F,a.Asz,a.yKW,a.ndF,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,a.h8i,a.rs,a.q51,a.DPz,a.Xh,a.wNd,p.Ov,C.e]}),i})();const E=[{path:"",component:h,children:[{path:"lugar",component:u},{path:"primario",component:u},{path:"secundario",component:u},{path:"residente",component:u}]}];let P=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.Bz.forChild(E),d.Bz]}),i})();var w=l(74385);let j=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[f.O,P,a.zyh,s.u5,s.UX,a.nKr,a.IIj,a.T2N,w.ne,a.CG_]}),i})()}}]);
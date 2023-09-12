"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[439],{94439:(Y,I,s)=>{s.r(I),s.d(I,{PlaceDetailModule:()=>Z});var F=s(27074),C=s(36895),h=s(7672),T=s(14019),g=s(46609),y=s(15861),e=s(30551),o=s(36517),P=s(42658),w=s(36749),_=s(74385);let x=(()=>{class n{constructor(){this.clickLink=new e.EventEmitter}ngOnInit(){this.renderValue=this.value.toString()}onClick(){this.clickLink.emit(this.rowData)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ng-component"]],inputs:{value:"value",rowData:"rowData"},outputs:{clickLink:"clickLink"},decls:2,vars:1,consts:[[1,"cursor-pointer",3,"click"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"a",0),e.\u0275\u0275listener("click",function(){return i.onClick()}),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(i.renderValue))},encapsulation:2}),n})();var k=s(7224),u=s(80574),f=s(12368),b=s(37556),L=s(20732),l=s(24006);let E=(()=>{class n{constructor(t,i,r){this._formBuilder=t,this._placeService=i,this._toastrService=r,this.afterSave=new e.EventEmitter,this.cancel=new e.EventEmitter,this.initForm(this.placeId)}ngOnInit(){this.primarioId&&this.getPrimario()}ngOnChanges(t){t?.placeId?.currentValue&&(this.placeId=t?.placeId?.currentValue,this.primarioForm.get("id_lugar").setValue(this.placeId))}initForm(t){this.primarioForm=this._formBuilder.group({id_lugar:[t,l.kI.required],id_primario:[""],nombre:["",l.kI.required],usuario_creacion:["admin",l.kI.required]})}getPrimario(){this._placeService.getPrimarioById({id_primario:this.primarioId}).subscribe({next:i=>{this.primarioForm.patchValue(i),this.primarioForm.patchValue({nombre:i.nombre_primario})},error:()=>{this.showToast("danger","Error al consultar primario")}})}savePrimario(){this.primarioId?this.updatePrimario():this.createPrimario()}createPrimario(){this._placeService.createPrimario(this.primarioForm.value).subscribe({next:()=>{this.showToast("success","Primario creado"),this.afterSave.emit()},error:()=>{this.showToast("danger","Error al crear primario")}})}updatePrimario(){const{usuario_creacion:t,...i}=this.primarioForm.value,r={...i,usuario_modificacion:"admin"};this._placeService.updatePrimario(r).subscribe({next:()=>{this.showToast("success","Primario actualizado"),this.afterSave.emit()},error:()=>{this.showToast("danger","Error al actualizar primario")}})}showToast(t,i){this._toastrService.show("",i,{status:t,destroyByClick:!0,duration:3e3,hasIcon:!1,position:o.fe3.TOP_RIGHT,preventDuplicates:!0})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(l.qu),e.\u0275\u0275directiveInject(f.k),e.\u0275\u0275directiveInject(o.quB))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ngx-primario-form"]],inputs:{placeId:"placeId",primarioId:"primarioId"},outputs:{afterSave:"afterSave",cancel:"cancel"},features:[e.\u0275\u0275NgOnChangesFeature],decls:7,vars:2,consts:[[1,"form-inline","w-100","justify-content-between",3,"formGroup"],["type","text","nbInput","","fullwidth","","fieldSize","small","placeholder","Nombre","formControlName","nombre"],[1,"d-flex","align-items-center","ml-2"],["nbButton","","size","small","status","info",3,"disabled","click"],[1,"pl-2","cursor-pointer",3,"click"],[1,"custom-icon","nb-close"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275element(1,"input",1),e.\u0275\u0275elementStart(2,"div",2)(3,"button",3),e.\u0275\u0275listener("click",function(){return i.savePrimario()}),e.\u0275\u0275text(4,"Guardar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"a",4),e.\u0275\u0275listener("click",function(){return i.cancel.emit()}),e.\u0275\u0275element(6,"i",5),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275property("formGroup",i.primarioForm),e.\u0275\u0275advance(3),e.\u0275\u0275property("disabled",!i.primarioForm.valid))},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,o.DPz,o.h8i],styles:[".custom-icon[_ngcontent-%COMP%]{display:inline-block;font-size:28px}"]}),n})(),j=(()=>{class n{constructor(t,i,r){this._formBuilder=t,this._placeService=i,this._toastrService=r,this.afterSave=new e.EventEmitter,this.cancel=new e.EventEmitter,this.initForm(this.primarioId)}ngOnInit(){this.secundarioId&&this.getSecundario()}ngOnChanges(t){t?.primarioId?.currentValue&&(this.primarioId=t?.primarioId?.currentValue,this.secundarioForm.get("id_primario").setValue(this.primarioId))}initForm(t){this.secundarioForm=this._formBuilder.group({id_primario:[t,l.kI.required],id_secundario:[""],nombre:["",l.kI.required],usuario_creacion:["admin",l.kI.required]})}getSecundario(){this._placeService.getSecundarioById({id_secundario:this.secundarioId}).subscribe({next:i=>{this.secundarioForm.patchValue(i),this.secundarioForm.patchValue({nombre:i.nombre_secundario})},error:()=>{this.showToast("danger","Error al consultar secundario")}})}saveSecundario(){this.secundarioId?this.updateSecundario():this.createSecundario()}createSecundario(){this._placeService.createSecundario(this.secundarioForm.value).subscribe({next:()=>{this.showToast("success","Secundario creado"),this.afterSave.emit()},error:()=>{this.showToast("danger","Error al crear secundario")}})}updateSecundario(){const{usuario_creacion:t,...i}=this.secundarioForm.value,r={...i,usuario_modificacion:"admin"};this._placeService.updateSecundario(r).subscribe({next:()=>{this.showToast("success","Secundario actualizado"),this.afterSave.emit()},error:()=>{this.showToast("danger","Error al actualizar secundario")}})}showToast(t,i){this._toastrService.show("",i,{status:t,destroyByClick:!0,duration:3e3,hasIcon:!1,position:o.fe3.TOP_RIGHT,preventDuplicates:!0})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(l.qu),e.\u0275\u0275directiveInject(f.k),e.\u0275\u0275directiveInject(o.quB))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ngx-secundario-form"]],inputs:{primarioId:"primarioId",secundarioId:"secundarioId"},outputs:{afterSave:"afterSave",cancel:"cancel"},features:[e.\u0275\u0275NgOnChangesFeature],decls:7,vars:2,consts:[[1,"form-inline","w-100","justify-content-between",3,"formGroup"],["type","text","nbInput","","fullwidth","","fieldSize","small","placeholder","Nombre","formControlName","nombre"],[1,"d-flex","align-items-center","ml-2"],["nbButton","","size","small","status","info",3,"disabled","click"],[1,"pl-2","cursor-pointer",3,"click"],[1,"custom-icon","nb-close"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275element(1,"input",1),e.\u0275\u0275elementStart(2,"div",2)(3,"button",3),e.\u0275\u0275listener("click",function(){return i.saveSecundario()}),e.\u0275\u0275text(4,"Guardar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"a",4),e.\u0275\u0275listener("click",function(){return i.cancel.emit()}),e.\u0275\u0275element(6,"i",5),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275property("formGroup",i.secundarioForm),e.\u0275\u0275advance(3),e.\u0275\u0275property("disabled",!i.secundarioForm.valid))},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,o.DPz,o.h8i],styles:[".custom-icon[_ngcontent-%COMP%]{display:inline-block;font-size:28px}"]}),n})();const D=["secundarioForm"];function B(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header"),e.\u0275\u0275text(2," Editar secundario "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body")(4,"ngx-secundario-form",7),e.\u0275\u0275listener("afterSave",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return r.resetSelection(),e.\u0275\u0275resetView(r.getSecundario())})("cancel",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.resetSelection())}),e.\u0275\u0275elementEnd()()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275property("primarioId",t.primarioId)("secundarioId",t.selectedSecundario)}}let A=(()=>{class n{constructor(t,i,r,c){this._placeService=t,this._dialogService=i,this._toastrService=r,this._authService=c,this.selectItem=new e.EventEmitter,this.isAdmin=!1,this.secundarioList=[],this.showSecundarioForm=!1,this.settings={actions:{position:"right",add:!1,edit:!1,delete:!1,custom:[{name:"edit",title:'<i class="nb-edit"></i>'},{name:"delete",title:'<i class="nb-trash"></i>'}]},columns:{nombre_secundario:{title:"Nombre",type:"custom",renderComponent:x,onComponentInitFunction:m=>{m.clickLink.subscribe(p=>{this.selectSecundario(p.id_secundario)})}},estado:{title:"Estado",type:"custom",renderComponent:w.P,onComponentInitFunction:m=>{m.toggle.subscribe(p=>{this.updateStatus(p.row.id_secundario,p.value?"A":"I")})}}},noDataMessage:"No existen registros"},this.source=new _.nC,this.isAdmin=this._authService.isAdmin()}ngOnChanges(t){t?.primarioId?.currentValue?(this.primarioId=t?.primarioId?.currentValue,this.getSecundario()):this.secundarioList=[]}getSecundario(){this._placeService.getSecundarios({id_usuario:1,id_primario:this.primarioId}).subscribe({next:i=>{this.secundarioList=i,this.source.load(this.secundarioList)}})}editSecundario(t){this.selectedSecundario=t,this.editId=t}onCustom(t){switch(t.action){case"edit":this.editSecundario(t.data.id_secundario),this.openForm();break;case"delete":this.onDelete(t.data.id_secundario)}}openForm(){this.dialog=this._dialogService.open(this.secundarioForm)}onDelete(t){this._dialogService.open(P.S,{context:{title:"\xbfEst\xe1 seguro de borrar el registro?"}}).onClose.subscribe({next:i=>{i&&this.deleteSecundario(t)}})}deleteSecundario(t){this._placeService.deleteSecundario({id_secundario:t,usuario_modificacion:"admin"}).subscribe({next:()=>{this.showToast("success","Secundario eliminado"),this.getSecundario(),this.resetSelection()},error:()=>{this.showToast("danger","Error al eliminar secundario")}})}selectSecundario(t){this.selectedSecundario=t,this.selectItem.emit(this.selectedSecundario)}updateStatus(t,i){this._placeService.updateStatusSecundario({id_secundario:t,estado:i,usuario_modificacion:"admin"}).subscribe({next:()=>{this.showToast("success","Estado actualizado")},error:()=>{this.showToast("danger","Ha ocurrido un error. Intente nuevamente")}})}resetSelection(){this.selectedSecundario=null,this.showSecundarioForm=!1,this.editId=null,this.dialog.close()}showToast(t,i){this._toastrService.show("",i,{status:t,destroyByClick:!0,duration:3e3,hasIcon:!1,position:o.fe3.TOP_RIGHT,preventDuplicates:!0})}getTable(){return new Promise(t=>{const i=[];this.secundarioList.forEach(r=>{let c=new k.bs(r);i.push(c)}),setTimeout(()=>{t(i)},0)})}downloadReport(){var t=this;return(0,y.Z)(function*(){const i=yield t.getTable(),r=u.P6.json_to_sheet(i),c=u.P6.book_new();u.P6.book_append_sheet(c,r,"SheetName"),u.NC(c,"secundarios.xlsx")})()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(f.k),e.\u0275\u0275directiveInject(o.Gln),e.\u0275\u0275directiveInject(o.quB),e.\u0275\u0275directiveInject(b.e))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ngx-secundario-list"]],viewQuery:function(t,i){if(1&t&&e.\u0275\u0275viewQuery(D,5),2&t){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(i.secundarioForm=r.first)}},inputs:{primarioId:"primarioId"},outputs:{selectItem:"selectItem"},features:[e.\u0275\u0275NgOnChangesFeature],decls:15,vars:3,consts:[[1,"w-100","d-flex","justify-content-between"],[1,""],["nbButton","","status","info","hero","",3,"click"],["nbButton","","hero","","status","success",1,"ml-2",3,"disabled","click"],[1,"material-symbols-outlined"],[1,"custom-table",3,"settings","source","custom"],["secundarioForm",""],[1,"w-100",3,"primarioId","secundarioId","afterSave","cancel"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header",0)(2,"h5"),e.\u0275\u0275text(3,"secundarios"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",1)(5,"button",2),e.\u0275\u0275listener("click",function(){return i.openForm()}),e.\u0275\u0275text(6," Nuevo "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",3),e.\u0275\u0275listener("click",function(){return i.downloadReport()}),e.\u0275\u0275elementStart(8,"span",4),e.\u0275\u0275text(9,"download"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(10," Descargar "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(11,"nb-card-body")(12,"ng2-smart-table",5),e.\u0275\u0275listener("custom",function(c){return i.onCustom(c)}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275template(13,B,5,2,"ng-template",null,6,e.\u0275\u0275templateRefExtractor)),2&t&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("disabled",!i.secundarioList||0===i.secundarioList.length),e.\u0275\u0275advance(5),e.\u0275\u0275property("settings",i.settings)("source",i.source))},dependencies:[o.Asz,o.yKW,o.ndF,_.T5,o.DPz,j],styles:[".custom-icon[_ngcontent-%COMP%]{display:inline-block;font-size:28px}"]}),n})();const V=["stepper"],z=["primarioForm"];function M(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"ngx-secundario-list",15),e.\u0275\u0275listener("selectItem",function(r){e.\u0275\u0275restoreView(t);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.selectSecundario(r))}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("primarioId",t.selectedPrimario)}}function R(n,a){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275element(1,"ngx-residents-list",16),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("placeId",t.placeId)("secundarioId",t.selectedSecundario)}}function N(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header"),e.\u0275\u0275text(2," Editar primario "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body")(4,"ngx-primario-form",17),e.\u0275\u0275listener("afterSave",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return r.resetSelection(),e.\u0275\u0275resetView(r.getPrimario())})("cancel",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.resetSelection())}),e.\u0275\u0275elementEnd()()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275property("placeId",t.placeId)("primarioId",t.selectedPrimario)}}let G=(()=>{class n{constructor(t,i,r,c,m){this._activatedRoute=t,this._placeService=i,this._dialogService=r,this._toastrService=c,this._authService=m,this.selectItem=new e.EventEmitter,this.isAdmin=!1,this.primarioList=[],this.showPrimarioForm=!1,this.showSecundarioForm=!1,this.secundarioList=[],this.settings={actions:{position:"right",add:!1,edit:!1,delete:!1,custom:[{name:"edit",title:'<i class="nb-edit"></i>'},{name:"delete",title:'<i class="nb-trash"></i>'}]},columns:{nombre_primario:{title:"Nombre",type:"custom",renderComponent:x,onComponentInitFunction:v=>{v.clickLink.subscribe(S=>{this.selectPrimario(S.id_primario)})}},estado:{title:"Estado",type:"custom",renderComponent:w.P,onComponentInitFunction:v=>{v.toggle.subscribe(S=>{this.updateStatus(S.row.id_primario,S.value?"A":"I")})}}},noDataMessage:"No existen registros"},this.source=new _.nC,this.isAdmin=this._authService.isAdmin();const p=this._activatedRoute.parent.snapshot.paramMap.get("placeId");p&&(this.placeId=parseInt(p))}ngOnInit(){this.getPrimario()}getPrimario(){this._placeService.getPrimarios({id_usuario:1,id_lugar:this.placeId}).subscribe({next:i=>{this.primarioList=i,this.source.load(this.primarioList)}})}editPrimario(t){this.selectedPrimario=t,this.editId=t}onCustom(t){switch(t.action){case"edit":this.editPrimario(t.data.id_primario),this.openForm();break;case"delete":this.onDelete(t.data.id_primario)}}openForm(){this.dialog=this._dialogService.open(this.primarioForm)}onDelete(t){this._dialogService.open(P.S,{context:{title:"\xbfEst\xe1 seguro de borrar el registro?"}}).onClose.subscribe({next:i=>{i&&this.deletePrimario(t)}})}deletePrimario(t){this._placeService.deletePrimario({id_primario:t,usuario_modificacion:"admin"}).subscribe({next:()=>{this.showToast("success","Primario eliminado"),this.getPrimario(),this.resetSelection()},error:()=>{this.showToast("danger","Error al eliminar primario")}})}updateStatus(t,i){this._placeService.updateStatusPrimario({id_primario:t,estado:i,usuario_modificacion:"admin"}).subscribe({next:()=>{this.showToast("success","Estado actualizado")},error:()=>{this.showToast("danger","Ha ocurrido un error. Intente nuevamente")}})}resetSelection(){this.selectedPrimario=null,this.selectedSecundario=null,this.showPrimarioForm=!1,this.editId=null,this.dialog.close()}selectPrimario(t){this.selectedPrimario=t,this.stepperComponent.next()}selectSecundario(t){this.selectedSecundario=t,this.stepperComponent.next()}showToast(t,i){this._toastrService.show("",i,{status:t,destroyByClick:!0,duration:3e3,hasIcon:!1,position:o.fe3.TOP_RIGHT,preventDuplicates:!0})}getTable(){return new Promise(t=>{const i=[];this.primarioList.forEach(r=>{let c=new k.a0(r);i.push(c)}),setTimeout(()=>{t(i)},0)})}downloadReport(){var t=this;return(0,y.Z)(function*(){const i=yield t.getTable(),r=u.P6.json_to_sheet(i),c=u.P6.book_new();u.P6.book_append_sheet(c,r,"SheetName"),u.NC(c,"primarios.xlsx")})()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(h.gz),e.\u0275\u0275directiveInject(f.k),e.\u0275\u0275directiveInject(o.Gln),e.\u0275\u0275directiveInject(o.quB),e.\u0275\u0275directiveInject(b.e))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ngx-primario-list"]],viewQuery:function(t,i){if(1&t&&(e.\u0275\u0275viewQuery(V,5),e.\u0275\u0275viewQuery(z,5)),2&t){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(i.stepperComponent=r.first),e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(i.primarioForm=r.first)}},inputs:{placeId:"placeId"},outputs:{selectItem:"selectItem"},decls:29,vars:6,consts:[["orientation","horizontal",3,"disableStepNavigation"],["stepper",""],["label","Primario"],[1,"w-100","d-flex","justify-content-between"],[1,""],["nbButton","","status","info","hero","",3,"click"],["nbButton","","hero","","status","success",1,"ml-2",3,"disabled","click"],[1,"material-symbols-outlined"],[1,"custom-table",3,"settings","source","custom"],["label","Secundario"],["nbButton","","appearance","filled","ghost","","size","tiny","nbStepperPrevious","",1,"d-flex","cursor-pointer","no-hover",3,"click"],[1,"custom-icon","nb-arrow-left"],[4,"ngIf"],["label","Residentes"],["primarioForm",""],[3,"primarioId","selectItem"],[3,"placeId","secundarioId"],[1,"w-100",3,"placeId","primarioId","afterSave","cancel"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"ngx-no-padding-layout")(1,"nb-stepper",0,1)(3,"nb-step",2)(4,"nb-card")(5,"nb-card-header",3)(6,"h5"),e.\u0275\u0275text(7,"Primarios"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",4)(9,"button",5),e.\u0275\u0275listener("click",function(){return i.openForm()}),e.\u0275\u0275text(10," Nuevo "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"button",6),e.\u0275\u0275listener("click",function(){return i.downloadReport()}),e.\u0275\u0275elementStart(12,"span",7),e.\u0275\u0275text(13,"download"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(14," Descargar "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(15,"nb-card-body")(16,"ng2-smart-table",8),e.\u0275\u0275listener("custom",function(c){return i.onCustom(c)}),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(17,"nb-step",9)(18,"button",10),e.\u0275\u0275listener("click",function(){return i.selectedPrimario=null}),e.\u0275\u0275element(19,"i",11),e.\u0275\u0275text(20," Volver "),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(21,M,2,1,"ng-container",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"nb-step",13)(23,"button",10),e.\u0275\u0275listener("click",function(){return i.selectedSecundario=null}),e.\u0275\u0275element(24,"i",11),e.\u0275\u0275text(25," Volver "),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(26,R,2,2,"ng-container",12),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275template(27,N,5,2,"ng-template",null,14,e.\u0275\u0275templateRefExtractor)),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("disableStepNavigation",!0),e.\u0275\u0275advance(10),e.\u0275\u0275property("disabled",!i.primarioList||0===i.primarioList.length),e.\u0275\u0275advance(5),e.\u0275\u0275property("settings",i.settings)("source",i.source),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",i.selectedPrimario&&!i.editId),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",i.selectedSecundario))},dependencies:[C.O5,L.F,o.Asz,o.yKW,o.ndF,_.T5,o.DPz,o.TLo,o.Sv4,o.HFZ,g.o,E,A],styles:[".contact.selected[_ngcontent-%COMP%]{background-color:#edf1f7}.custom-icon[_ngcontent-%COMP%]{display:inline-block;font-size:28px}[_nghost-%COMP%]     nb-stepper .header{display:none}[_nghost-%COMP%]     [nbButton].appearance-ghost.status-basic:hover, .appearance-ghost.status-basic[nbButtonToggle][_ngcontent-%COMP%]:hover{background-color:transparent}[_nghost-%COMP%]     nb-stepper .step-content{padding:0}"]}),n})();var d=(()=>{return(n=d||(d={}))[n.residentesPendientes=1]="residentesPendientes",n[n.residentesActivos=2]="residentesActivos",n[n.residentesInactivos=3]="residentesInactivos",n[n.anuncios=4]="anuncios",n[n.primariosSecundarios=5]="primariosSecundarios",n[n.reportes=6]="reportes",n[n.chat=7]="chat",n[n.servicios=8]="servicios",d;var n})(),O=s(98914);let Q=(()=>{class n{constructor(t,i,r,c,m){this._placeService=t,this._activatedRoute=i,this._router=r,this._authService=c,this._menuService=m,this.isAdmin=!1,this.menu=[],this.isAdmin=this._authService.isAdmin(),this.placeId=parseInt(this._activatedRoute.snapshot.paramMap.get("placeId")),this.place=this._placeService.place$,this.menu=[{title:"MEN\xda",group:!0},{title:"Informaci\xf3n del lugar",icon:"list-outline",link:`/pages/lugares/${this.placeId}`,home:!0},{title:"Primarios y secundarios",icon:"grid-outline",link:`/pages/lugares/${this.placeId}/primario-secundario`,home:!1,hidden:!this.isActive(d.primariosSecundarios)},{title:"Residentes aprobados",icon:"person-done-outline",link:`/pages/lugares/${this.placeId}/residentes`,home:!1,hidden:!this.isActive(d.residentesPendientes)},{title:"Residentes pendientes",icon:"person-add-outline",link:`/pages/lugares/${this.placeId}/residentes/pendientes`,home:!1,hidden:!this.isActive(d.residentesActivos)},{title:"Residentes inactivos",icon:"person-delete-outline",link:`/pages/lugares/${this.placeId}/residentes/inactivos`,home:!1,hidden:!this.isActive(d.residentesInactivos)},{title:"Anuncios",icon:"alert-circle-outline",link:`/pages/lugares/${this.placeId}/anuncios`,home:!1,hidden:!this.isActive(d.anuncios)},{title:"Reportes",icon:"file-text-outline",link:`/pages/lugares/${this.placeId}/reportes`,home:!1,hidden:!this.isActive(d.reportes)},{title:"Servicios",icon:"book-open-outline",link:`/pages/lugares/${this.placeId}/servicios`,home:!1,hidden:!this.isActive(d.servicios)},{title:"Chat",icon:"message-square-outline",link:`/pages/lugares/${this.placeId}/chat`,home:!1,hidden:!this.isActive(d.chat)}],this._menuService.setMenu(this.menu)}ngOnDestroy(){this._menuService.setMenu([])}isActive(t){return"A"==this.place?.opciones.find(r=>r.id_opcion==t)?.estado}goBack(){this._router.navigateByUrl("/pages/lugares")}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(f.k),e.\u0275\u0275directiveInject(h.gz),e.\u0275\u0275directiveInject(h.F0),e.\u0275\u0275directiveInject(b.e),e.\u0275\u0275directiveInject(O.h))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ngx-place-detail"]],decls:1,vars:0,template:function(t,i){1&t&&e.\u0275\u0275element(0,"router-outlet")},dependencies:[h.lC],encapsulation:2}),n})();var $=s(41288),H=s(94176);const J=[{path:"",component:Q,children:[{path:"",component:T.C},{path:"residentes",component:g.o,data:{status:["A"]}},{path:"residentes/pendientes",component:g.o,data:{status:["P"]}},{path:"residentes/inactivos",component:g.o,data:{status:["I","R","E"]}},{path:"primario-secundario",component:G},{path:"anuncios",component:$.n},{path:"reportes",component:H.y},{path:"servicios",loadChildren:()=>s.e(884).then(s.bind(s,75884)).then(n=>n.AmenitiesModule)},{path:"chat",loadChildren:()=>Promise.resolve().then(s.bind(s,11459)).then(n=>n.ChatModule)}]}];let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[h.Bz.forChild(J),C.ez,h.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[F.O,W,o.zyh,o.j5J,o._WB]}),n})()}}]);
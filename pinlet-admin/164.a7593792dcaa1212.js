"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[164],{81164:(q,p,l)=>{l.r(p),l.d(p,{SettingsModule:()=>B});var h=l(27074),c=l(7672),e=l(30551);let _=(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-residents"]],decls:1,vars:0,template:function(n,r){1&n&&e.\u0275\u0275element(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),t})();var g=l(29766),u=l(36517),C=l(37556),f=l(36895),i=l(24006);const v=["resetPassForm"];function w(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"li",21),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n)}}function b(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"nb-alert",17)(1,"p",18)(2,"b"),e.\u0275\u0275text(3,"Oh snap!"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"ul",19),e.\u0275\u0275template(5,w,2,1,"li",20),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("ngForOf",n.errors)}}function P(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"li",21),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n)}}function S(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"nb-alert",22)(1,"p",18)(2,"b"),e.\u0275\u0275text(3,"Hooray!"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"ul",19),e.\u0275\u0275template(5,P,2,1,"li",20),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("ngForOf",n.messages)}}function y(t,o){1&t&&(e.\u0275\u0275elementStart(0,"p",24),e.\u0275\u0275text(1," La contrase\xf1a es requerida! "),e.\u0275\u0275elementEnd())}function x(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"p",24),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate2(" La contrase\xf1a debe contener desde ",n.getConfigValue("forms.validation.password.minLength")," hasta ",n.getConfigValue("forms.validation.password.maxLength")," caracteres ")}}function M(t,o){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,y,2,0,"p",23),e.\u0275\u0275template(2,x,2,2,"p",23),e.\u0275\u0275elementContainerEnd()),2&t){e.\u0275\u0275nextContext();const n=e.\u0275\u0275reference(10);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.errors?null:n.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.errors?null:n.errors.minlength)||(null==n.errors?null:n.errors.maxlength))}}function F(t,o){1&t&&(e.\u0275\u0275elementStart(0,"p",24),e.\u0275\u0275text(1," La nueva contrase\xf1a es requerida! "),e.\u0275\u0275elementEnd())}function I(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"p",24),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate2(" La contrase\xf1a debe contener desde ",n.getConfigValue("forms.validation.password.minLength")," hasta ",n.getConfigValue("forms.validation.password.maxLength")," caracteres ")}}function R(t,o){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,F,2,0,"p",23),e.\u0275\u0275template(2,I,2,2,"p",23),e.\u0275\u0275elementContainerEnd()),2&t){e.\u0275\u0275nextContext();const n=e.\u0275\u0275reference(16);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.errors?null:n.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.errors?null:n.errors.minlength)||(null==n.errors?null:n.errors.maxlength))}}function E(t,o){1&t&&(e.\u0275\u0275elementStart(0,"p",24),e.\u0275\u0275text(1," La confirmaci\xf3n de contrase\xf1a es requerida! "),e.\u0275\u0275elementEnd())}function T(t,o){1&t&&(e.\u0275\u0275elementStart(0,"p",24),e.\u0275\u0275text(1," Las contrase\xf1as no coinciden. "),e.\u0275\u0275elementEnd())}function O(t,o){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,E,2,0,"p",23),e.\u0275\u0275template(2,T,2,0,"p",23),e.\u0275\u0275elementContainerEnd()),2&t){e.\u0275\u0275nextContext();const n=e.\u0275\u0275reference(22),r=e.\u0275\u0275reference(16);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.invalid&&(null==n.errors?null:n.errors.required)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.value!==n.value&&!(null!=n.errors&&n.errors.required))}}const L=[{path:"",component:_,children:[{path:"cambiar-contrase\xf1a",component:(()=>{class t{constructor(n={},r,a){this.options=n,this._authService=r,this._toastrService=a,this.showMessages={},this.submitted=!1,this.errors=[],this.messages=[],this.user=this._authService.getUser()}resetPassword(){this._authService.resetPassword({usuario:this.user.usuario,old_contrasena:this.oldPassword,new_contrasena:this.newPassword,usuario_modificacion:"admin"}).subscribe({next:()=>{this.resetPassForm.reset(),this.showToast("success","Contrase\xf1a actualizada")},error:()=>{this.showToast("danger","Ha ocurrido un error. Intente nuevamente")}})}getConfigValue(n){return(0,g.hB)(this.options,n,null)}showToast(n,r){this._toastrService.show("",r,{status:n,destroyByClick:!0,duration:3e3,hasIcon:!1,position:u.fe3.TOP_RIGHT,preventDuplicates:!0})}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(g.h),e.\u0275\u0275directiveInject(C.e),e.\u0275\u0275directiveInject(u.quB))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-reset-password"]],viewQuery:function(n,r){if(1&n&&e.\u0275\u0275viewQuery(v,5),2&n){let a;e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(r.resetPassForm=a.first)}},decls:26,vars:24,consts:[["id","title",1,"title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["resetPassForm","ngForm"],[1,"form-control-group"],["for","input-password",1,"label"],["nbInput","","type","password","id","input-old-password","name","oldPassword","placeholder","Contrase\xf1a actual","autofocus","","fullWidth","","fieldSize","large",1,"first",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["oldPass","ngModel"],[4,"ngIf"],["nbInput","","type","password","id","input-password","name","password","placeholder","Nueva contrase\xf1a","autofocus","","fullWidth","","fieldSize","large",1,"first",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],[1,"form-group"],["for","input-re-password",1,"label"],["nbInput","","id","input-re-password","name","rePass","type","password","placeholder","Confirmar Contrase\xf1a","fullWidth","","fieldSize","large",1,"last",3,"ngModel","status","required","ngModelChange"],["rePass","ngModel"],["nbButton","","status","primary","fullWidth","","size","large",1,"reset-password-button",3,"disabled"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"h1",0),e.\u0275\u0275text(1,"Cambiar contrase\xf1a"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,b,6,1,"nb-alert",1),e.\u0275\u0275template(3,S,6,1,"nb-alert",2),e.\u0275\u0275elementStart(4,"form",3,4),e.\u0275\u0275listener("ngSubmit",function(){return r.resetPassword()}),e.\u0275\u0275elementStart(6,"div",5)(7,"label",6),e.\u0275\u0275text(8,"Contrase\xf1a actual:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"input",7,8),e.\u0275\u0275listener("ngModelChange",function(s){return r.oldPassword=s}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(11,M,3,2,"ng-container",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"div",5)(13,"label",6),e.\u0275\u0275text(14,"Nueva contrase\xf1a:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"input",10,11),e.\u0275\u0275listener("ngModelChange",function(s){return r.newPassword=s}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(17,R,3,2,"ng-container",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"div",12)(19,"label",13),e.\u0275\u0275text(20,"Confirmar Contrase\xf1a:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"input",14,15),e.\u0275\u0275listener("ngModelChange",function(s){return r.confirmPassword=s}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(23,O,3,2,"ng-container",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"button",16),e.\u0275\u0275text(25," Cambiar contrase\xf1a "),e.\u0275\u0275elementEnd()()),2&n){const a=e.\u0275\u0275reference(5),s=e.\u0275\u0275reference(10),d=e.\u0275\u0275reference(16),m=e.\u0275\u0275reference(22);e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",r.showMessages.error&&(null==r.errors?null:r.errors.length)&&!r.submitted),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.showMessages.success&&(null==r.messages?null:r.messages.length)&&!r.submitted),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngModel",r.oldPassword)("status",s.dirty?s.invalid?"danger":"success":"basic")("required",r.getConfigValue("forms.validation.password.required"))("minlength",r.getConfigValue("forms.validation.password.minLength"))("maxlength",r.getConfigValue("forms.validation.password.maxLength")),e.\u0275\u0275attribute("aria-invalid",!(!s.invalid||!s.touched)||null),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",s.invalid&&s.touched),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",r.newPassword)("status",d.dirty?d.invalid?"danger":"success":"basic")("required",r.getConfigValue("forms.validation.password.required"))("minlength",r.getConfigValue("forms.validation.password.minLength"))("maxlength",r.getConfigValue("forms.validation.password.maxLength")),e.\u0275\u0275attribute("aria-invalid",!(!d.invalid||!d.touched)||null),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",d.invalid&&d.touched),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",r.confirmPassword)("status",m.touched?m.invalid||d.value!==m.value?"danger":"success":"basic")("required",r.getConfigValue("forms.validation.password.required")),e.\u0275\u0275attribute("aria-invalid",!(!m.invalid||!m.touched)||null),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",m.touched),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("btn-pulse",r.submitted),e.\u0275\u0275property("disabled",r.submitted||!a.valid)}},dependencies:[f.sg,f.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.wO,i.nD,i.On,i.F,u.h8i,u.DPz],styles:["[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type{margin-bottom:3rem}[nbButton].reset-password-button[_ngcontent-%COMP%], [nbButton].reset-password-button[_ngcontent-%COMP%]:active, [nbButton].reset-password-button[_ngcontent-%COMP%]:focus{background-color:#eb472a;border-color:#eb472a}[nbButton].reset-password-button[_ngcontent-%COMP%]:not(.btn-disabled):hover{background-color:#eb472ad2;border-color:#eb472ad2}.form-control-group[_ngcontent-%COMP%]{margin-bottom:1rem}"]}),t})()}]}];let V=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.Bz.forChild(L),c.Bz]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[h.O,V,i.u5,u.nKr,u.T2N]}),t})()}}]);
"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[565],{46565:(w,p,i)=>{i.r(p),i.d(p,{AuthModule:()=>F});var c=i(36895),l=i(24006),d=i(7672),u=i(36517),g=i(29766),e=i(30551),f=i(37556);function h(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"li",20),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t)}}function _(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"nb-alert",17)(1,"ul",18),e.\u0275\u0275template(2,h,2,1,"li",19),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t.errors)}}function b(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"li",20),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t)}}function C(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"nb-alert",21)(1,"p",22)(2,"b"),e.\u0275\u0275text(3,"Hooray!"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"ul",18),e.\u0275\u0275template(5,b,2,1,"li",19),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("ngForOf",t.messages)}}function v(n,o){1&n&&(e.\u0275\u0275elementStart(0,"p",24),e.\u0275\u0275text(1," El usuario es requerido! "),e.\u0275\u0275elementEnd())}function x(n,o){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,v,2,0,"p",23),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.email.errors?null:t.email.errors.required)}}function M(n,o){1&n&&(e.\u0275\u0275elementStart(0,"p",24),e.\u0275\u0275text(1," La contrase\xf1a es requerida! "),e.\u0275\u0275elementEnd())}function I(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"p",24),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate2(" La contrase\xf1a debe contener de ",t.getConfigValue("forms.validation.password.minLength")," a ",t.getConfigValue("forms.validation.password.maxLength")," caracteres ")}}function y(n,o){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,M,2,0,"p",23),e.\u0275\u0275template(2,I,2,2,"p",23),e.\u0275\u0275elementContainerEnd()),2&n){e.\u0275\u0275nextContext();const t=e.\u0275\u0275reference(18);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.errors?null:t.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.errors?null:t.errors.minlength)||(null==t.errors?null:t.errors.maxlength))}}function S(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"nb-checkbox",25),e.\u0275\u0275listener("ngModelChange",function(s){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.user.rememberMe=s)}),e.\u0275\u0275text(1,"Recu\xe9rdame"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngModel",t.user.rememberMe)}}const E=[{path:"",component:g.AC,children:[{path:"login",component:(()=>{class n extends g.Yx{constructor(t,r,s,a){super(t,{},r,s),this._nbAuthService=t,this._changeDetectorRef=r,this._router=s,this._authService=a,this.showMessages={},this.errors=[]}login(){this._authService.login(this.user).subscribe({next:t=>{this._authService.setToken(t.tokenG),this._router.navigateByUrl("/")},error:t=>{this.showMessages.error=!0,this.errors=[t.error.mensaje]}})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(g._o),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(d.F0),e.\u0275\u0275directiveInject(f.e))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ngx-login"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:24,vars:18,consts:[["id","title",1,"title"],[1,"sub-title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","fullWidth","","name","username","id","input-username","placeholder","Usuario","autofocus","",3,"ngModel","status","required","ngModelChange"],["username","ngModel"],[4,"ngIf"],["for","input-password",1,"label"],["nbInput","","fullWidth","","name","password","type","password","id","input-password","placeholder","Contrase\xf1a",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],[1,"form-control-group","accept-group"],["name","rememberMe",3,"ngModel","ngModelChange",4,"ngIf"],["nbButton","","fullWidth","","status","success",1,"login-button",3,"disabled"],["outline","danger","role","alert"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],[1,"alert-title"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","rememberMe",3,"ngModel","ngModelChange"]],template:function(t,r){if(1&t&&(e.\u0275\u0275elementStart(0,"h1",0),e.\u0275\u0275text(1,"Inicio de sesi\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"p",1),e.\u0275\u0275text(3,"Hola! Ingresa con tu usuario."),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,_,3,1,"nb-alert",2),e.\u0275\u0275template(5,C,6,1,"nb-alert",3),e.\u0275\u0275elementStart(6,"form",4,5),e.\u0275\u0275listener("ngSubmit",function(){return r.login()}),e.\u0275\u0275elementStart(8,"div",6)(9,"label",7),e.\u0275\u0275text(10,"Usuario:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"input",8,9),e.\u0275\u0275listener("ngModelChange",function(a){return r.user.usuario=a}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(13,x,2,1,"ng-container",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"div",6)(15,"label",11),e.\u0275\u0275text(16,"Contrase\xf1a:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"input",12,13),e.\u0275\u0275listener("ngModelChange",function(a){return r.user.contrasena=a}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(19,y,3,2,"ng-container",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"div",14),e.\u0275\u0275template(21,S,2,1,"nb-checkbox",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"button",16),e.\u0275\u0275text(23," Ingresar "),e.\u0275\u0275elementEnd()()),2&t){const s=e.\u0275\u0275reference(7),a=e.\u0275\u0275reference(12),m=e.\u0275\u0275reference(18);e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",r.showMessages.error&&(null==r.errors?null:r.errors.length)&&!r.submitted),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.showMessages.success&&(null==r.messages?null:r.messages.length)&&!r.submitted),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngModel",r.user.usuario)("status",a.dirty?a.invalid?"danger":"success":"")("required",r.getConfigValue("forms.validation.username.required")),e.\u0275\u0275attribute("aria-invalid",!(!a.invalid||!a.touched)||null),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",a.invalid&&a.touched),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",r.user.contrasena)("status",m.dirty?m.invalid?"danger":"success":"")("required",r.getConfigValue("forms.validation.password.required"))("minlength",r.getConfigValue("forms.validation.password.minLength"))("maxlength",r.getConfigValue("forms.validation.password.maxLength")),e.\u0275\u0275attribute("aria-invalid",!(!m.invalid||!m.touched)||null),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",m.invalid&&m.touched),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",r.rememberMe),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("btn-pulse",r.submitted),e.\u0275\u0275property("disabled",r.submitted||!s.valid)}},dependencies:[c.sg,c.O5,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.wO,l.nD,l.On,l.F,u.$9b,u.h8i,u.DPz,u.NTf],styles:["[nbButton].login-button[_ngcontent-%COMP%]{background-color:#eb472a;border-color:#eb472a}[nbButton].login-button[_ngcontent-%COMP%]:hover{background-color:#eb472ad2;border-color:#eb472ad2}"]}),n})()}]}];let T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.Bz.forChild(E),d.Bz]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.ez,l.u5,d.Bz,u.PYG,u.nKr,u.T2N,u.MfT,T,g.S]}),n})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{JxMt:function(e,t,i){"use strict";i.r(t),i.d(t,"PropertiesModule",function(){return M});var a=i("s7LF"),n=i("SVse"),s=i("hrfs"),r=i("FE24"),o=i("aHM3"),l=i("YFAK"),c=i("6No5"),d=i("iInd"),b=i("Pffd"),g=i("vZxo"),u=i("VQPA"),p=i("8Y7J"),h=i("LqlI"),f=i("5eHb");const m=["propertiesGrid"];function v(e,t){if(1&e&&(p.Rb(0,"option"),p.xc(1),p.Qb()),2&e){const e=t.$implicit;p.zb(1),p.yc(e)}}function P(e,t){if(1&e&&(p.Rb(0,"option"),p.xc(1),p.Qb()),2&e){const e=t.$implicit;p.zb(1),p.yc(e)}}function y(e,t){1&e&&(p.Rb(0,"div",30),p.Rb(1,"span",31),p.xc(2,"Loading..."),p.Qb(),p.Qb())}const R=function(e){return{opacity:e}},C=[{path:"",component:(()=>{class e{constructor(e,t,i,n,s,r){this.propertyService=e,this.datePipe=t,this.modalService=i,this.modal=n,this.fb=s,this.toastr=r,this.dateFilterParams={comparator:(e,t)=>{const i=this.datePipe.transform(t,"dd-MMM-yyyy"),a=new Date(i);return e.getTime()===a.getTime()?0:a<e?-1:a>e?1:void 0}},this.isLoading=!1,this.payload={entity:"PROPERTY"},this.statusList=["DRAFT","IN_REVIEW","PUBLISHED","UNPUBLISHED","APPROVED","REJECTED"],this.activeStatusList=["true","false"],this.columnDefs=[{headerName:"Name",field:"name",pinned:"left"},{headerName:"Address",field:"address"},{headerName:"Active",field:"active"},{headerName:"Booking Count",field:"bookingCount"},{headerName:"Created At",field:"createdAt",filter:"agDateColumnFilter",cellRenderer:e=>this.datePipe.transform(e.value,"dd-MMM-yyyy"),filterParams:this.dateFilterParams},{headerName:"Description",field:"description"},{headerName:"Published Status",field:"status"},{headerName:"Weekly Earnings",field:"weeklyEarnings"}],this.showToolPanel=!0,this.gridOptions={columnDefs:this.columnDefs,defaultColDef:{flex:1,minWidth:180,sortable:!0,filter:"agTextColumnFilter",floatingFilter:!0,resizable:!0}},this.filters=this.fb.group({status:new a.d(""),isActive:new a.d(""),propertyName:new a.d("")}),this.currentPager=1,this.itemsPerPage=20,this.totalItems=this.itemsPerPage+1}ngOnInit(){this.propertyService.getProperties({page:this.currentPager-1,size:this.itemsPerPage}).subscribe(e=>{this.rowData=e.data})}ngAfterViewInit(){}pageChanged(e){this.propertyService.getProperties({page:e.page-1,size:this.itemsPerPage}).subscribe(e=>{var t;this.rowData=e.data,(null===(t=this.rowData)||void 0===t?void 0:t.length)===this.itemsPerPage&&(this.totalItems=this.itemsPerPage*this.currentPager+1)},e=>{this.rowData=[]})}onRowClicked(e){this.bsModalRef=this.modalService.show(g.a),this.modal.modalContent=e,this.modal.statusType="property"}statusChanged(e){this.filters.get("status").patchValue(e.target.value)}activeStatusChanged(e){this.filters.get("isActive").patchValue(e.target.value)}handleSearch(){this.isLoading=!0,void 0!==this.filters.get("status").value&&(this.payload=Object.assign(Object.assign({},this.payload),{status:this.filters.get("status").value})),void 0!==this.filters.get("isActive").value&&(this.payload=Object.assign(Object.assign({},this.payload),{active:this.filters.get("isActive").value})),""!==this.filters.get("propertyName").value&&(this.payload=Object.assign(Object.assign({},this.payload),{search:this.filters.get("propertyName").value})),this.filters.dirty?this.propertyService.getFilteredData(this.payload).subscribe(e=>{this.rowData=e.data,this.isLoading=!1}):this.toastr.warning("Please select a filter to search")}Reset(){window.location.reload()}}return e.\u0275fac=function(t){return new(t||e)(p.Lb(b.a),p.Lb(n.e),p.Lb(h.b),p.Lb(u.a),p.Lb(a.c),p.Lb(f.b))},e.\u0275cmp=p.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&p.Bc(m,1),2&e){let e;p.mc(e=p.Zb())&&(t.grid=e.first)}},decls:44,vars:18,consts:[[1,"animated","fadeIn"],[1,"card",3,"ngClass"],[1,"card-body"],[1,"row"],[1,"col-sm-5"],[1,"card-title","mb-0"],[1,"small","text-muted"],[1,"search-field"],[3,"formGroup","ngSubmit"],[1,"status"],["for","status",1,"label"],["name","status","formControlName","status",1,"select-box",3,"ngModel","change","ngModelChange"],[3,"value","disabled"],[4,"ngFor","ngForOf"],[1,"isActive"],["for","isActive",1,"label"],["name","isActive","formControlName","isActive",1,"select-box",3,"ngModel","change","ngModelChange"],[1,"propertyName"],["for","propertyName",1,"label"],["type","text","name","propertyName","formControlName","propertyName",1,"form-control"],[1,"btn-container"],["type","Submit","value","Search",1,"btn-primary","btn"],["type","button","value","Reset",1,"btn-primary","btn",3,"click"],[1,"col","pt-3","pb-3"],[1,"ag-theme-alpine",2,"width","100%","height","60vh",3,"rowData","gridOptions","rowClicked"],["propertiesGrid",""],[1,"col-6"],[2,"float","right"],["pageBtnClass","btn",1,"pull-left",3,"totalItems","ngModel","itemsPerPage","ngModelChange","pageChanged"],["class","spinner-border","role","status",4,"ngIf"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(e,t){1&e&&(p.Rb(0,"div",0),p.Rb(1,"div",1),p.Rb(2,"div",2),p.Rb(3,"div",3),p.Rb(4,"div",4),p.Rb(5,"h4",5),p.xc(6,"PROPERTY"),p.Qb(),p.Mb(7,"div",6),p.Qb(),p.Qb(),p.Mb(8,"br"),p.Rb(9,"div",7),p.Rb(10,"form",8),p.Yb("ngSubmit",function(){return t.handleSearch()}),p.Rb(11,"div",9),p.Rb(12,"label",10),p.xc(13,"Select Status: "),p.Qb(),p.Mb(14,"br"),p.Rb(15,"select",11),p.Yb("change",function(e){return t.statusChanged(e)})("ngModelChange",function(e){return t.defaultOption=e}),p.Rb(16,"option",12),p.xc(17,"Select Status"),p.Qb(),p.vc(18,v,2,1,"option",13),p.Qb(),p.Qb(),p.Rb(19,"div",14),p.Rb(20,"label",15),p.xc(21,"Select Active: "),p.Qb(),p.Mb(22,"br"),p.Rb(23,"select",16),p.Yb("change",function(e){return t.activeStatusChanged(e)})("ngModelChange",function(e){return t.defaultOptionNew=e}),p.Rb(24,"option",12),p.xc(25,"Select Active"),p.Qb(),p.vc(26,P,2,1,"option",13),p.Qb(),p.Qb(),p.Rb(27,"div",17),p.Rb(28,"label",18),p.xc(29,"Enter Property Name: "),p.Qb(),p.Mb(30,"input",19),p.Qb(),p.Rb(31,"div",20),p.Mb(32,"input",21),p.Qb(),p.Rb(33,"div",20),p.Rb(34,"input",22),p.Yb("click",function(){return t.Reset()}),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Rb(35,"div",23),p.Rb(36,"ag-grid-angular",24,25),p.Yb("rowClicked",function(e){return t.onRowClicked(e)}),p.Qb(),p.Qb(),p.Rb(38,"div",3),p.Mb(39,"div",26),p.Rb(40,"div",26),p.Rb(41,"div",27),p.Rb(42,"pager",28),p.Yb("ngModelChange",function(e){return t.currentPager=e})("pageChanged",function(e){return t.pageChanged(e)}),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.vc(43,y,3,0,"div",29),p.Qb()),2&e&&(p.zb(1),p.gc("ngClass",p.jc(16,R,!0===t.isLoading)),p.zb(9),p.gc("formGroup",t.filters),p.zb(5),p.gc("ngModel",t.defaultOption),p.zb(1),p.gc("value",t.default)("disabled",!0),p.zb(2),p.gc("ngForOf",t.statusList),p.zb(5),p.gc("ngModel",t.defaultOptionNew),p.zb(1),p.gc("value",t.default)("disabled",!0),p.zb(2),p.gc("ngForOf",t.activeStatusList),p.zb(10),p.gc("rowData",t.rowData)("gridOptions",t.gridOptions),p.zb(6),p.gc("totalItems",t.totalItems)("ngModel",t.currentPager)("itemsPerPage",t.itemsPerPage),p.zb(1),p.gc("ngIf",t.isLoading))},directives:[n.j,a.t,a.k,a.g,a.r,a.j,a.e,a.n,a.u,n.k,a.b,l.a,c.a,a.m,n.l],styles:[".search-field[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-evenly;\n      }\n      .btn[_ngcontent-%COMP%] {\n        outline: none;\n        border: none;\n      }\n      .select-box[_ngcontent-%COMP%] {\n        width: 12rem;\n        height: 35px;\n        border-radius: 4px;\n      }\n      .label[_ngcontent-%COMP%] {\n        font-weight: bold;\n      }\n      .btn-container[_ngcontent-%COMP%] {\n        margin-top: 1.8rem;\n      }\n      .spinner-border[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 55%;\n        left: 50%;\n      }\n      .opacity[_ngcontent-%COMP%] {\n        opacity: 0.3;\n      }"]}),e})(),data:{title:"Properties"}}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Jb({type:e}),e.\u0275inj=p.Ib({imports:[[d.g.forChild(C)],d.g]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Jb({type:e}),e.\u0275inj=p.Ib({providers:[n.e],imports:[[a.h,w,s.b,r.c,c.c,o.b.forRoot(),l.b.withComponents([]),n.c,a.p]]}),e})()}}]);
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DatePipe } from "@angular/common";

import { ChartsModule } from "ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { AgGridModule } from "ag-grid-angular";
import { PaginationModule } from "ngx-bootstrap/pagination";

import { PartnersComponent } from "./partners.component";
import { PartnersRoutingModule } from "./partners-routing.module";

@NgModule({
  imports: [
    FormsModule,
    PartnersRoutingModule,
    ChartsModule,
    PaginationModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    AgGridModule.withComponents([]),
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  declarations: [PartnersComponent],
})
export class PartnersModule {}

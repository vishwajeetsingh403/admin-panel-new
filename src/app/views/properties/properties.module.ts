import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DatePipe } from "@angular/common";

import { ChartsModule } from "ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { AgGridModule } from "ag-grid-angular";
import { PaginationModule } from "ngx-bootstrap/pagination";

import { PropertiesComponent } from "./properties.component";
import { PropertiesRoutingModule } from "./properties-routing.module";

@NgModule({
  imports: [
    FormsModule,
    PropertiesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    PaginationModule,
    ButtonsModule.forRoot(),
    AgGridModule.withComponents([]),
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  declarations: [PropertiesComponent],
})
export class PropertiesModule {}

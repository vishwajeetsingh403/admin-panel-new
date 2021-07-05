import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { GridOptions } from "ag-grid-community";
import { DatePipe } from "@angular/common";
import { PropertyService } from "../../services/property.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalComponent } from "../modal/modal.component";
import { ModalService } from "../../services/modal.service";
import { FormBuilder, FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  templateUrl: "properties.component.html",
  styles: [
    `
      .search-field > form {
        display: flex;
        justify-content: space-evenly;
      }
      .btn {
        outline: none;
        border: none;
      }
      .select-box {
        width: 12rem;
        height: 35px;
        border-radius: 4px;
      }
      .label {
        font-weight: bold;
      }
      .btn-container {
        margin-top: 1.8rem;
      }
      .spinner-border {
        position: absolute;
        top: 55%;
        left: 50%;
      }
      .opacity {
        opacity: 0.3;
      }
    `,
  ],
})
export class PropertiesComponent implements OnInit, AfterViewInit {
  dateFilterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
      const date = this.datePipe.transform(cellValue, "dd-MMM-yyyy");
      const cellDate = new Date(date);

      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }

      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }

      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
    },
  };

  isLoading: boolean = false;

  payload: object = {
    entity: "PROPERTY",
  };

  statusList = [
    "DRAFT",
    "IN_REVIEW",
    "PUBLISHED",
    "UNPUBLISHED",
    "APPROVED",
    "REJECTED",
  ];

  defaultOption;
  defaultOptionNew;
  default;

  activeStatusList = ["true", "false"];

  columnDefs = [
    { headerName: "Name", field: "name", pinned: "left" },
    { headerName: "Address", field: "address" },
    { headerName: "Active", field: "active" },
    { headerName: "Booking Count", field: "bookingCount" },
    {
      headerName: "Created At",
      field: "createdAt",
      filter: "agDateColumnFilter",
      cellRenderer: (params) => {
        return this.datePipe.transform(params.value, "dd-MMM-yyyy");
      },
      filterParams: this.dateFilterParams,
    },
    { headerName: "Description", field: "description" },
    { headerName: "Published Status", field: "status" },
    { headerName: "Weekly Earnings", field: "weeklyEarnings" },
  ];
  rowData: any[];
  showToolPanel = true;

  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: {
      flex: 1,
      minWidth: 180,
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      resizable: true,
    },
  };

  bsModalRef: BsModalRef;
  myContent;

  @ViewChild("propertiesGrid") grid;

  constructor(
    private propertyService: PropertyService,
    private datePipe: DatePipe,
    private modalService: BsModalService,
    private modal: ModalService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  filters = this.fb.group({
    status: new FormControl(""),
    isActive: new FormControl(""),
    propertyName: new FormControl(""),
  });

  ngOnInit(): void {
    this.propertyService
      .getProperties({
        page: this.currentPager - 1,
        size: this.itemsPerPage,
      })
      .subscribe((data: any) => {
        this.rowData = data.data;
      });
  }

  ngAfterViewInit() {}
  currentPager: number = 1;
  itemsPerPage: number = 20;
  totalItems: number = this.itemsPerPage + 1;

  pageChanged(event: any): void {
    this.propertyService
      .getProperties({
        page: event.page - 1,
        size: this.itemsPerPage,
      })
      .subscribe(
        (data: any) => {
          this.rowData = data.data;
          if (this.rowData?.length === this.itemsPerPage) {
            this.totalItems = this.itemsPerPage * this.currentPager + 1;
          }
        },
        (err) => {
          this.rowData = [];
        }
      );
  }

  onRowClicked(eve) {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.modal.modalContent = eve;
    this.modal.statusType = "property";
  }

  statusChanged(event) {
    this.filters.get("status").patchValue(event.target.value);
  }

  activeStatusChanged(event) {
    this.filters.get("isActive").patchValue(event.target.value);
  }

  handleSearch() {
    this.isLoading = true;
    if (this.filters.get("status").value !== undefined) {
      this.payload = {
        ...this.payload,
        status: this.filters.get("status").value,
      };
    }
    if (this.filters.get("isActive").value !== undefined) {
      this.payload = {
        ...this.payload,
        active: this.filters.get("isActive").value,
      };
    }
    if (this.filters.get("propertyName").value !== "") {
      this.payload = {
        ...this.payload,
        search: this.filters.get("propertyName").value,
      };
    }

    if (this.filters.dirty) {
      this.propertyService
        .getFilteredData(this.payload)
        .subscribe((data: any) => {
          this.rowData = data.data;
          this.isLoading = false;
        });
    } else {
      this.toastr.warning("Please select a filter to search");
    }
  }

  Reset() {
    window.location.reload();
  }
}

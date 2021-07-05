import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { GridOptions } from "ag-grid-community";
import { DatePipe } from "@angular/common";
import { ServiceService } from "../../services/service.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ModalService } from "../../services/modal.service";
import { ModalComponent } from "../modal/modal.component";
import { FormBuilder, FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { PropertyService } from "../../services/property.service";

@Component({
  templateUrl: "services.component.html",
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
export class ServicesComponent implements OnInit, AfterViewInit {
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
  defaultOption;
  defaultOptionNew;
  default;

  payload: object = {
    entity: "SERVICE",
  };

  statusList = [
    "DRAFT",
    "IN_REVIEW",
    "PUBLISHED",
    "UNPUBLISHED",
    "APPROVED",
    "REJECTED",
  ];

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
    { headerName: "Image Url", field: "imageUrl" },
    { headerName: "Property Count", field: "numberOfProperty" },
    { headerName: "Service Count", field: "numberOfServices" },
    { headerName: "Property Count", field: "numberOfProperty" },
    { headerName: "Weekly Earnings", field: "weeklyEarnings" },
    { headerName: "Published Status", field: "status" },
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

  @ViewChild("servicesGrid") grid;

  constructor(
    private serviceService: ServiceService,
    private datePipe: DatePipe,
    private modal: ModalService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private propertyService: PropertyService
  ) {}

  filters = this.fb.group({
    status: new FormControl(""),
    isActive: new FormControl(""),
    propertyName: new FormControl(""),
  });

  ngOnInit(): void {
    this.serviceService
      .getServices({
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
    this.serviceService
      .getServices({
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
    this.modal.statusType = "service";
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

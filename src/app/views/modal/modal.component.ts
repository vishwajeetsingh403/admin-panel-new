import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service";
import { ToastrService } from "ngx-toastr";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  // bsModalRef: BsModalRef;
  rejectionReason: string = null;
  selectedStatusValue: string;
  propertyName: string;
  defaultOption;
  default;
  partnerId;
  token;
  constructor(
    private modal: ModalService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
  ) {}

  ngOnInit(): void {}

  selectedStatus(event) {
    const { name } = this.modal.modalContent.data;
    this.propertyName = name;
    this.selectedStatusValue = event;
  }

  updateStatus() {
    const { id } = this.modal.modalContent.data;
    let payload = {
      status: this.selectedStatusValue,
      type: this.modal.statusType,
      typeId: id,
      reason: this.rejectionReason,
    };
    this.modal.postStatus(payload).subscribe((data: any) => {
      if (data.success) {
        this.toastr.success("Status Updated");
        this.closeModal();
      } else {
        this.toastr.error("Something went wrong!");
      }
    });
  }

  closeModal() {
    this.bsModalRef.hide();
  }

  redirectToPartner() {
    this.partnerId = this.modal.modalContent.data.id;
    this.modal.getHeaders(this.partnerId).subscribe((data) => {
      this.token = data.headers.get("X-Almien-User-Token");

      let queryParam = `token=${this.token}&id=${this.partnerId}`;

      let url = ["http://localhost:4200/", queryParam].join("?");

      window.open(url);
    });
  }
}

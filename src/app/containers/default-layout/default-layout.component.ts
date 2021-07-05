import { Component } from "@angular/core";
import { navItems } from "../../_nav";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private auth: AuthService) {}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.auth.logout();
  }
}

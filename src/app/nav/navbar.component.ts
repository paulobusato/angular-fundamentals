import { Component } from "@angular/core";
import { EventService, ISession } from "../events";
import { AuthService } from "../user/auth.service";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      li > a.active {
        color: #f97924;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    `,
  ],
})
export class NavBarComponent {
  searchTerm = "";
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) {}

  searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }
}

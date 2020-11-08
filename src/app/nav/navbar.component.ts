import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EventService, IEvent, ISession } from "../events";
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
export class NavBarComponent implements OnInit {
  searchTerm = "";
  foundSessions: ISession[];
  foundEvents: Observable<IEvent[]>;

  constructor(public auth: AuthService, private eventService: EventService) {}

  ngOnInit(): void {
    this.foundEvents = this.eventService.getEvents();
  }

  searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }
}

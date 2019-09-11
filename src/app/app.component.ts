import { Component, OnInit } from '@angular/core';
import { VcLogger } from '@turing/shared/interfaces/vc-logger-publisher';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'vc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private headerTitle: string;

  constructor(
    private vcLogger: VcLogger,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  private getHeaderTitleFromRouteData = () => {
    let route = this.activatedRoute.firstChild;
    if (!route) {
      return;
    }

    while (route.firstChild) {
      route = route.firstChild;
    }

    if (route.outlet === 'primary') {
      route.data.subscribe((value) => {
        this.headerTitle = value.title;
        this.titleService.setTitle(`Turing - ${this.headerTitle}`);
      });
    }
  };

  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.getHeaderTitleFromRouteData();
      }
    });
  }
}

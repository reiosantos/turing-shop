import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'vc-sidebar',
             templateUrl: './sidebar.component.html',
             styleUrls: ['./sidebar.component.scss']
           })
export class SidebarComponent implements OnInit {
  loading = false;
  value = 0;

  constructor() {
  }

  ngOnInit() {
  }
}

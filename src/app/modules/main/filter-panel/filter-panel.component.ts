import {Component, OnInit} from '@angular/core';
import {VcProductClient} from '@turing/shared/interfaces/vc-product-client';

@Component({
             selector: 'vc-filter-panel',
             templateUrl: './filter-panel.component.html',
             styleUrls: ['./filter-panel.component.scss']
           })
export class FilterPanelComponent implements OnInit {

  constructor(
    public vcProductClient: VcProductClient
  ) {
    this.vcProductClient.initClient();
  }

  ngOnInit() {
  }
}

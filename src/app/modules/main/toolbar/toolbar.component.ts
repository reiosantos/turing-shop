import { Component, OnInit } from '@angular/core';
import { VcCustomer } from '@turing/shared/models/vc-customer';
import { withDestroy } from '@turing/core/mixins/with-destroy';

@Component({
  selector: 'vc-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent extends withDestroy() implements OnInit {

  user: VcCustomer = null;

  constructor() {
    super();
  }

  ngOnInit() {
    // TODO: this.user = this.auth.getCurrentUser();
  }

  logout() {
    // TODO implement logout
  }

  showLogoutModal = () => {
    if (this.user) {
      // TODO: this.auth.logout();
    }
  };

  showLoginModal() {
    // TODO: show Login modal;
  }
}

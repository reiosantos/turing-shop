import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material';
import {VcErrorStateMatcher} from '@turing/core/providers/vc-error-state-matcher';
import {VcAuthToken} from '@turing/shared/interfaces/vc-auth-token';
import {VcAuthTokenService} from '@turing/core/services/auth-token/vc-auth-token.service';
import {VcLogger, VcLoggerPublisher} from '@turing/shared/interfaces/vc-logger-publisher';
import {LoggerService} from '@turing/core/logger/logger.service';
import {LoggerPublisherService} from '@turing/core/logger/logger-publisher.service';
import {VcHttpClient} from '@turing/shared/interfaces/vc-http-client';
import {HttpWrapperService} from '@turing/core/http/http-wrapper.service';
import {VcAlert} from '@turing/shared/interfaces/vc-alert';
import {AlertService} from '@turing/core/services/alert/alert.service';
import {ProductService} from '@turing/core/services/products/product.service';
import {VcProductClient} from '@turing/shared/interfaces/vc-product-client';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: ErrorStateMatcher, useClass: VcErrorStateMatcher },
        { provide: VcAuthToken, useClass: VcAuthTokenService },
        { provide: VcLogger, useClass: LoggerService },
        { provide: VcLoggerPublisher, useClass: LoggerPublisherService },
        { provide: VcHttpClient, useClass: HttpWrapperService },
        { provide: VcAlert, useClass: AlertService },
        { provide: VcProductClient, useClass: ProductService },
      ]
    };
  }
}

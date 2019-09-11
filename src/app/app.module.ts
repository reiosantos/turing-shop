import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '@turing/app.component';
import {
  PageNotFoundComponent
} from '@turing/shared/components/page-not-found/page-not-found.component';
import { AppRoutingModule } from '@turing/app-routing.module';
import { JwtInterceptor } from '@turing/core/interceptors/jwt-interceptor';
import { CoreModule } from '@turing/core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
  ],
  schemas: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap:  [AppComponent]
})
export class AppModule {}

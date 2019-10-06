import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule, MatPaginatorModule,
  MatProgressBarModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatOptionModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    MatTabsModule,
    MatBadgeModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule
  ]
})
export class AppMaterialModule {}

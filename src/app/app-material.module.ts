import { NgModule } from '@angular/core';
import {
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDialogModule,
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatTabsModule,
  MatBadgeModule,
  MatGridListModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatDatepickerModule, MatInputModule
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
    MatInputModule
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
    MatInputModule
  ]
})
export class AppMaterialModule {}

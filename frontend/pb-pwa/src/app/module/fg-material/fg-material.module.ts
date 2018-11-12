import { NgModule, ModuleWithProviders } from '@angular/core';
// Providing animation capabilities for angular-material
// https://angular.io/api/platform-browser/animations/BrowserAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Providing touch-support for angular-material
// https://hammerjs.github.io/
import 'hammerjs';
// Import Angular-Material Components ordered by its
// documentation structure/sections
import {
  // Form Controls
  // https://material.angular.io/components/categories
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  // Navigation
  // https://material.angular.io/components/categories/nav
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  // Layout
  // https://material.angular.io/components/categories/layout
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  // Buttons & Indicators
  // https://material.angular.io/components/categories/buttons
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  // Popups & Modals
  // https://material.angular.io/components/categories/modals
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  // Data Table
  // https://material.angular.io/components/table/overview
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatNativeDateModule,
  MatRippleModule,
  MatBadgeModule
} from '@angular/material';
// Import Angular-Material CDK
// Common Behaviours
// https://material.angular.io/cdk/categories/component-composition
import { A11yModule } from '@angular/cdk/a11y';
import { ObserversModule } from '@angular/cdk/observers';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { BidiModule } from '@angular/cdk/bidi';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
// Components
// https://material.angular.io/cdk/categories/components
import { CdkTableModule } from '@angular/cdk/table';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FgAngularMaterialDemoComponent } from './component/fg-angular-material-demo/fg-angular-material-demo.component';
import { FgBreakpointService } from './service/fg-breakpoint/fg-breakpoint.service';
/**
* FgMaterialModule -
* This Module provides all angular-material
* components and cdk classes, including all
* it's dependencies, to the importing
* angular-application
*/
@NgModule({
  imports: [
    BrowserAnimationsModule,
    // ---------------------------
    // Angular-Material Components
    // Form Controls
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    // Navigation
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    // Layout
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    // Buttons & Indicators
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    // Popups & Modals
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    // Data Table
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatBadgeModule,
    // ---------------------------
    // Angular-Material CDK
    // Common Behaviours
    A11yModule,
    ObserversModule,
    LayoutModule,
    OverlayModule,
    PortalModule,
    BidiModule,
    ScrollDispatchModule,
    // Components
    CdkTableModule,
    CdkStepperModule,
    MatNativeDateModule,
    MatRippleModule
  ],
  exports: [
    // ---------------------------
    // Angular-Material Components
    // Form Controls
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    // Navigation
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    // Layout
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    // Buttons & Indicators
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    // Popups & Modals
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    // Data Table
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    // ---------------------------
    // Angular-Material CDK
    // Common Behaviours
    A11yModule,
    ObserversModule,
    LayoutModule,
    OverlayModule,
    PortalModule,
    BidiModule,
    ScrollDispatchModule,
    // Components
    CdkTableModule,
    CdkStepperModule,
    MatNativeDateModule,
    MatRippleModule,
    MatBadgeModule,
    // ---------------------------
    // Forge Angular-Material Demo-Component
    FgAngularMaterialDemoComponent
  ],
  declarations: [
    FgAngularMaterialDemoComponent
  ],
  providers: [
    FgBreakpointService
  ]
})
/**
 * FgMaterialModule -
 * Module Exports Angular-Material Components and
 * Services for importing Application. Also provides
 * some additional components and services build upon
 * angular-material and angular-cdk
 */
export class FgMaterialModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: FgMaterialModule,
      providers: [
        FgBreakpointService
      ]
    };
  }
}

// // import { DatatableComponent } from '@swimlane/ngx-datatable/src';
// import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
// import { ViewEncapsulation, Component } from '@angular/core';

// // import { PbDatatableModule } from './../../module/pb-datatable/pb-datatable.module';

// @Component({
//   selector: 'ngx-datatable-custom',
//   template: `
//     <div
//       visibilityObserver
//       (visible)="recalculate()">
//       <datatable-header
//         *ngIf="headerHeight"
//         [sorts]="sorts"
//         [sortType]="sortType"
//         [scrollbarH]="scrollbarH"
//         [innerWidth]="_innerWidth"
//         [offsetX]="_offsetX | async"
//         [dealsWithGroup]="groupedRows"
//         [columns]="_internalColumns"
//         [headerHeight]="headerHeight"
//         [reorderable]="reorderable"
//         [targetMarkerTemplate]="targetMarkerTemplate"
//         [sortAscendingIcon]="cssClasses.sortAscending"
//         [sortDescendingIcon]="cssClasses.sortDescending"
//         [allRowsSelected]="allRowsSelected"
//         [selectionType]="selectionType"
//         (sort)="onColumnSort($event)"
//         (resize)="onColumnResize($event)"
//         (reorder)="onColumnReorder($event)"
//         (select)="onHeaderSelect($event)"
//         (columnContextmenu)="onColumnContextmenu($event)">
//       </datatable-header>
//       <datatable-body
//         [groupRowsBy]="groupRowsBy"
//         [groupedRows]="groupedRows"
//         [rows]="_internalRows"
//         [groupExpansionDefault]="groupExpansionDefault"
//         [scrollbarV]="scrollbarV"
//         [scrollbarH]="scrollbarH"
//         [virtualization]="virtualization"
//         [loadingIndicator]="loadingIndicator"
//         [externalPaging]="externalPaging"
//         [rowHeight]="rowHeight"
//         [rowCount]="rowCount"
//         [offset]="offset"
//         [trackByProp]="trackByProp"
//         [columns]="_internalColumns"
//         [pageSize]="pageSize"
//         [offsetX]="_offsetX | async"
//         [rowDetail]="rowDetail"
//         [groupHeader]="groupHeader"
//         [selected]="selected"
//         [innerWidth]="_innerWidth"
//         [bodyHeight]="bodyHeight"
//         [selectionType]="selectionType"
//         [emptyMessage]="messages.emptyMessage"
//         [rowIdentity]="rowIdentity"
//         [rowClass]="rowClass"
//         [selectCheck]="selectCheck"
//         [displayCheck]="displayCheck"
//         [summaryRow]="summaryRow"
//         [summaryHeight]="summaryHeight"
//         [summaryPosition]="summaryPosition"
//         (page)="onBodyPage($event)"
//         (activate)="activate.emit($event)"
//         (rowContextmenu)="onRowContextmenu($event)"
//         (select)="onBodySelect($event)"
//         (scroll)="onBodyScroll($event)"
//         (treeAction)="onTreeAction($event)">
//       </datatable-body>
//       <datatable-footer
//         *ngIf="footerHeight"
//         [rowCount]="rowCount"
//         [pageSize]="pageSize"
//         [offset]="offset"
//         [footerHeight]="footerHeight"
//         [footerTemplate]="footer"
//         [totalMessage]="messages.totalMessage"
//         [pagerLeftArrowIcon]="cssClasses.pagerLeftArrow"
//         [pagerRightArrowIcon]="cssClasses.pagerRightArrow"
//         [pagerPreviousIcon]="cssClasses.pagerPrevious"
//         [selectedCount]="selected.length"
//         [selectedMessage]="!!selectionType && messages.selectedMessage"
//         [pagerNextIcon]="cssClasses.pagerNext"
//         (page)="onFooterPage($event)">
//       </datatable-footer>
//     </div>
//   `,
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   encapsulation: ViewEncapsulation.None,
//   // styleUrls: ['./datatable.component.scss'],
//   // host: {
//   //   class: 'ngx-datatable-custom'
//   // }
// })
// export class DatatableCustomComponent {


// }

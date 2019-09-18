import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    declarations: [
      LayoutComponent,
      HeaderComponent,
      SidebarComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbDropdownModule,
        FormsModule,
        SharedModule
    ]
})
export class LayoutModule {}

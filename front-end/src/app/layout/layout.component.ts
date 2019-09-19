import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsComponent } from './components/tabs/tabs.component';
import { Menus } from './components/sidebar/sidebar.component';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean;

    @ViewChild(TabsComponent, null) tabsComponent;
    @ViewChild('migrar', null) Migrar;
    @ViewChild('progreso', null) Progreso;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    cargaMenu($event) {
      switch ($event) {
        case Menus.Migrar:
            this.tabsComponent.openTab('Migrar', this.Migrar, {}, true);
          break;
        case Menus.Progreso:
            this.tabsComponent.openTab('Progreso', this.Progreso, {}, true);
            break;
        default:
          break;
      }

    }
}

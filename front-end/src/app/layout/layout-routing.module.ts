import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
           /* { path: 'ingresarSocio', component: IngresarSocioComponent },
            { path: 'buscarSocio', component: BuscarSocioComponent },
            { path: 'bajaSocio', component: EliminarSocioComponent }*/
            //{ path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

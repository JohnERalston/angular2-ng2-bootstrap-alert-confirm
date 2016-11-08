import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlutoComponent } from './pluto/components/pluto.component';
import { HomeComponent } from './home/components/home.component';
import { NotFoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'pluto', component: PlutoComponent },
    { path: '**', component: NotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

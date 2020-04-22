import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchCriteriaComponent} from './components/search-criteria/search-criteria.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';


const appRoutes: Routes = [
    {
        path:'',
        component: SearchCriteriaComponent
    },
    {
        path:'movie/:id',
        component: MovieListComponent
    }
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
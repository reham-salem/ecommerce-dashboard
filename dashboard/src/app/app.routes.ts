import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"products",
        loadComponent:()=>import('./product/components/product-list/product-list.component').then(m=>m.ProductListComponent)
    },
    { path: '', redirectTo: 'products', pathMatch: 'full' }
];

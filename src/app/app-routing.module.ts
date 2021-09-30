import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) //vista hijo
  },
  {
    path: 'abaout',
    //component: AbaoutComponent, vista padre
    loadChildren: () => import('./pages/abaout/abaout.module').then( m => m.AbaoutPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'carousel',
    loadChildren: () => import('./page/carousel/carousel.module').then( m => m.CarouselPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./page/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'vista4',
    loadChildren: () => import('./page/vista4/vista4.module').then( m => m.Vista4PageModule)
  },
  {
    path: 'vista5',
    loadChildren: () => import('./page/vista5/vista5.module').then( m => m.Vista5PageModule)
  },
  {
    path: 'vista6',
    loadChildren: () => import('./page/vista6/vista6.module').then( m => m.Vista6PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

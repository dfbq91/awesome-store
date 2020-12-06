import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((module) => module.HomeModule),
      },
      {
        path: 'products',
        pathMatch: 'full',
        loadChildren: () =>
          import('./product/product.module').then(
            (module) => module.ProductModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then(
            (module) => module.ContactModule
          ),
      },
      {
        path: 'demo',
        loadChildren: () =>
          import('./demo/demo.module').then((m) => m.DemoModule),
      },
      {
        path: 'order',
        loadChildren: () =>
        import('./order/order.module').then((m) => m.OrderModule),
      }
    ],
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((module) => module.AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (module) => module.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

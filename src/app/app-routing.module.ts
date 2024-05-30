import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatalistComponent } from './cook/cook.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page2Component } from './pages/page2/page2.component';
import { appCanActivate } from './guard/app.auth.guard';
import { AppRoles } from './app.roles';

const routes: Routes = [
  {
    path: '',
    component: DatalistComponent

  },

  {
    path: 'page1',
    component: Page1Component,
    pathMatch: 'full',
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Admin] }
  },

  {
    path: 'page2',
    component: Page2Component,
    pathMatch: 'full',
  },

  {
    path: 'page3',
    component: Page3Component,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
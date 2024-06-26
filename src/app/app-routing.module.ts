import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookComponent } from './cook/cook.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page2Component } from './pages/page2/page2.component';
import { appCanActivate } from './guard/app.auth.guard';
import { AppRoles } from './app.roles';
import { Page5Component } from './pages/page5/page5.component';
import { Page6Component } from './pages/page6/page6.component';

import { Page8Component } from './pages/page8/page8.component';
import { Page7Component } from './pages/page7/page7.component';

const routes: Routes = [
  {
    path: '',
    component: CookComponent,
  },

  {
    path: 'page1',
    component: Page1Component,
    pathMatch: 'full',
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Admin] },
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
  {
    path: 'page4',
    component: Page4Component,
    pathMatch: 'full',
  },

  {
    path: 'page5',
    component: Page5Component,
    pathMatch: 'full',
  },
  {
    path: 'page6',
    component: Page6Component,
    pathMatch: 'full',
  },
  {
    path: 'page7',
    component: Page7Component,
    pathMatch: 'full',
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'page8',
    component: Page8Component,
    pathMatch: 'full',
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Admin] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Records } from './pages/records/records';
import { NgModule } from '@angular/core';
import { ViewStation } from './pages/view-station/view-station';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'records', component: Records },
  { path: 'station/:id', 
    loadComponent: () => import('./pages/view-station/view-station').then(m => m.ViewStation)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


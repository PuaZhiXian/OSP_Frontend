import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/intro'},
  {path: 'intro', loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroModule)},
  {path: 'effects', loadChildren: () => import('./pages/effects/effects.module').then(m => m.EffectsModule)},
  {path: 'causes', loadChildren: () => import('./pages/causes/causes.module').then(m => m.CausesModule)},
  {path: 'solution', loadChildren: () => import('./pages/solutions/solutions.module').then(m => m.SolutionsModule)},
  {path: 'future', loadChildren: () => import('./pages/future/future.module').then(m => m.FutureModule)},
  {path: 'events', loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

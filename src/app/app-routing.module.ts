import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { TalkDetailComponent } from './shell/talk-detail/talk-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'talks' },
  { path: 'talks', component: ShellComponent },
  { path: 'talks/:id', component: TalkDetailComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

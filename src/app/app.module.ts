import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TalksService } from './services/talks.service';
import { FilterPipe } from './pipes/filter.pipe';
import { ShellComponent } from './shell/shell.component';
import { TalksComponent } from './shell/talks/talks.component';
import { TalkComponent } from './shell/talk/talk.component';
import { FilterComponent } from './shell/filter/filter.component';
import { AppRoutingModule } from './app-routing.module';
import { TalkDetailComponent } from './shell/talk-detail/talk-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    FilterComponent,
    TalksComponent,
    TalkComponent,
    FilterPipe,
    TalkDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TalksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSectionFormComponent } from './create-section-form/create-section-form.component';
import { JoinSectionFormComponent } from './join-section-form/join-section-form.component';
import { CreateSongFormComponent } from './create-song-form/create-song-form.component';
import { JoinSongFormComponent } from './join-song-form/join-song-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSectionFormComponent,
    JoinSectionFormComponent,
    CreateSongFormComponent,
    JoinSongFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

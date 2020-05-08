import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSectionFormComponent } from './create-section-form/create-section-form.component';
import { CreateSongFormComponent } from './create-song-form/create-song-form.component';
import { JoinSongFormComponent } from './join-song-form/join-song-form.component';
import { JoinSectionFormComponent } from './join-section-form/join-section-form.component';


const routes: Routes = [
  { path: "", redirectTo: "v1/create-song", pathMatch: "full" },
  {
    path: "v1", children: [
      { path: "create-song", component: CreateSongFormComponent },
      { path: "join-song", component: JoinSongFormComponent },
      { path: "create-section", component: CreateSectionFormComponent },
      { path: "join-section", component: JoinSectionFormComponent }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

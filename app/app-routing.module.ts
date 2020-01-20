import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubzoneComponent } from './subzone/subzone.component';


const routes: Routes = [
  {path:"subzone",component: SubzoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

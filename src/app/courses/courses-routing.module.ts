import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { BloqueadorGuard } from '../guards/bloqueador.guard';


const routes: Routes = [
  //{ 
    //path: 'cursos', 
    //children: [
      {
        path: ':nome', 
        component: CoursesListComponent,
        //canActivate: [BloqueadorGuard],
        //canDeactivate: [BloqueadorGuard]
      }
    //]
  //}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }

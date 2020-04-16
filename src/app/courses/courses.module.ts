import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from '../courses-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [CoursesListComponent]
})
export class CoursesModule { }

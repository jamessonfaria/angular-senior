import { MyLibraryModule } from './../../projects/my-library/src/lib/my-library.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyButtonComponent } from './my-button/my-button.component';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibraryModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MyLibraryModule } from './../../projects/my-library/src/lib/my-library.module';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyButtonComponent } from './my-button/my-button.component';

registerLocaleData(localeBR);

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
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
